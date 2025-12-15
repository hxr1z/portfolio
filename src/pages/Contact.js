import React from 'react';

const Contact = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-5xl md:text-6xl text-left mb-12 relative inline-block">
          Contact Me!
          <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-indigo-500 rounded-full"></span>
        </h2>

        <div className="mb-12 font-sans text-base md:text-lg text-gray-600 space-y-4">
            <p>
            I'm always open to new opportunities where I can apply my skills in technology, 
            software development, and design.
            </p>
            <p>
            Feel free to reach out at <span className="font-bold text-indigo-600">24034847@myrp.edu.sg</span> or 
            use the form below.
            </p>
        </div>

        {/* --- FORM UPDATE START --- */}
        <form 
          action="https://formspree.io/f/xldqoaok" // <--- PASTE YOUR ID HERE
          method="POST"
          className="space-y-6 bg-white p-8 md:p-12 rounded-2xl shadow-xl shadow-gray-100"
        >
            <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">First Name</label>
                <input type="text" name="firstName" required className="border-b-2 border-gray-200 bg-transparent p-3 outline-none focus:border-indigo-600 transition-colors" />
            </div>
            <div className="flex flex-col">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
                <input type="text" name="lastName" required className="border-b-2 border-gray-200 bg-transparent p-3 outline-none focus:border-indigo-600 transition-colors" />
            </div>
            </div>

            <div className="flex flex-col">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email *</label>
            <input type="email" name="email" required className="border-b-2 border-gray-200 bg-transparent p-3 outline-none focus:border-indigo-600 transition-colors" />
            </div>

            <div className="flex flex-col">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Message</label>
            <textarea name="message" rows="4" required className="border-2 border-gray-100 bg-gray-50 p-3 rounded-lg outline-none focus:border-indigo-600 focus:bg-white transition-all"></textarea>
            </div>

            <div className="pt-4">
            <button type="submit" className="bg-indigo-600 text-white px-12 py-4 text-sm font-bold tracking-widest uppercase hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-1 transition-all rounded-lg w-full md:w-auto">
                Send Message
            </button>
            </div>
        </form>
        {/* --- FORM UPDATE END --- */}

      </div>
    </section>
  );
};

export default Contact;