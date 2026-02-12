require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors()); // Allows your React app to talk to this server
app.use(express.json());

// 1. Create the Connection to Aiven
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306,
    ssl: { rejectUnauthorized: false } // Aiven requires SSL
});

// Test Connection on Start
db.getConnection((err, connection) => {
    if (err) {
        console.error("❌ CONNECTION FAILED:", err.code);
    } else {
        console.log("✅ CONNECTED TO DATABASE!");
        connection.release();
    }
});

// 2. Route: GET all Projects (Main Portfolio Page)
app.get('/api/projects', (req, res) => {
    const sql = 'SELECT * FROM projects ORDER BY id DESC'; // Newest projects first
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json(err);
        return res.json(results);
    });
});

// 3. Route: GET Single Project + Sections + Gallery (Detail Page)
app.get('/api/projects/:id', async (req, res) => {
    const projectId = req.params.id;

    try {
        // A. Get Main Project Info
        const [projectResults] = await db.promise().query('SELECT * FROM projects WHERE id = ?', [projectId]);
        
        if (projectResults.length === 0) return res.status(404).json({ message: "Not found" });
        const project = projectResults[0];

        // B. Get Sections (Title + Content)
        const [sections] = await db.promise().query('SELECT title, content FROM project_sections WHERE project_id = ?', [projectId]);
        
        // C. Get Gallery Images
        const [gallery] = await db.promise().query('SELECT image_url FROM project_gallery WHERE project_id = ?', [projectId]);

        // D. Combine everything into one clean JSON object
        const response = {
            ...project,
            image: project.image_url, // Map to frontend name
            link: project.live_link,  // Map to frontend name
            // Parse sections if they are stored as JSON strings, otherwise keep as is
            sections: sections.map(s => ({
                title: s.title,
                content: s.content
            })),
            // Map gallery results to a simple array of strings: ['/img/1.png', '/img/2.png']
            gallery: gallery.map(g => g.image_url)
        };

        res.json(response);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// 4. Route: Get Certificates
app.get('/api/certificates', (req, res) => {
    const sql = 'SELECT * FROM certificates ORDER BY id DESC';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json(err);
        return res.json(results);
    });
});

// 5. Route: Get Activities (CCA)
app.get('/api/activities', (req, res) => {
    const sql = 'SELECT * FROM activities ORDER BY id DESC';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json(err);
        return res.json(results);
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});