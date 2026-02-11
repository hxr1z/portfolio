require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors()); // Allows your React app to talk to this server
app.use(express.json());

// 1. Create the Connection to Aiven
const db = mysql.createPool({
    host: process.env.DB_HOST,       // e.g., mysql-service-account.aivencloud.com
    user: process.env.DB_USER,       // e.g., avnadmin
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,   // e.g., defaultdb
    port: process.env.DB_PORT || 3306,
    ssl: { rejectUnauthorized: false } // Aiven usually requires SSL
});

db.getConnection((err, connection) => {
    if (err) {
        console.error("❌ CONNECTION FAILED:", err.code);
    } else {
        console.log("✅ CONNECTED TO DATABASE!");
        
        // Ask the database: "What is your name?"
        connection.query("SELECT DATABASE() as dbName", (err, res) => {
            console.log("📂 Current Database Name:", res[0].dbName);
        });

        // Ask the database: "What tables do you have?"
        connection.query("SHOW TABLES", (err, res) => {
            console.log("📋 Tables found:", res);
        });
        
        connection.release();
    }
});

// 2. The Route to GET all Projects
app.get('/api/projects', (req, res) => {
    const sql = 'SELECT * FROM projects';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json(err);
        return res.json(results);
    });
});

// 3. The Route to GET a specific Project (for your Detail page)
app.get('/api/projects/:id', (req, res) => {
    // 1. The Query: Join the tables
    const sql = `
        SELECT 
            p.*, 
            s.title as section_title, 
            s.content as section_content 
        FROM projects p 
        LEFT JOIN project_sections s ON p.id = s.project_id 
        WHERE p.id = ?
    `;

    db.query(sql, [req.params.id], (err, results) => {
        if (err) return res.status(500).json(err);
        if (results.length === 0) return res.status(404).json({ message: "Project not found" });

        // 2. The Aggregation (Squishing rows together)
        // We take the project info from the FIRST row found
        const project = {
            id: results[0].id,
            title: results[0].title,
            description: results[0].description,
            category: results[0].category,
            image_url: results[0].image_url,
            live_link: results[0].live_link,
            gallery_images: results[0].gallery_images, // Still JSON from the main table
            created_at: results[0].created_at,
            // Create an empty array for our new sections
            sections: []
        };

        // 3. Loop through results to fill the sections array
        results.forEach(row => {
            if (row.section_title) {
                project.sections.push({
                    title: row.section_title,
                    // If content is stored as JSON in DB, it comes out as an object/array automatically.
                    // If it comes out as a string, we might need JSON.parse(row.section_content)
                    content: row.section_content 
                });
            }
        });

        return res.json(project);
    });
});

app.get('/api/certificates', (req, res) => {
    const sql = 'SELECT * FROM certificates ORDER BY id DESC'; // Newest first
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json(err);
        return res.json(results);
    });
});

// 5. Get All Activities (CCA)
app.get('/api/activities', (req, res) => {
    const sql = 'SELECT * FROM activities ORDER BY id DESC';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json(err);
        return res.json(results);
    });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});