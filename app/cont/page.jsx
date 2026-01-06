'use client'; 

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const res = await fetch('http://127.0.0.1:8000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to send message');

      setStatus({ loading: false, success: 'Message sent successfully!', error: null });
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message });
    }
  };

  return (
    <div className="max-w-lg mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      {status.success && <div className="bg-green-100 text-green-700 p-3 mb-4 rounded">{status.success}</div>}
      {status.error && <div className="bg-red-100 text-red-700 p-3 mb-4 rounded">{status.error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
            type="text" name="name" placeholder="Name" required 
            value={formData.name} onChange={handleChange}
            className="w-full border p-2 rounded" 
        />
        <input 
            type="email" name="email" placeholder="Email" required 
            value={formData.email} onChange={handleChange}
            className="w-full border p-2 rounded" 
        />
        <textarea 
            name="message" placeholder="Message" rows="4" required 
            value={formData.message} onChange={handleChange}
            className="w-full border p-2 rounded"
        ></textarea>

        <button 
            type="submit" disabled={status.loading}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
            {status.loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}