import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <form
        className="bg-white shadow-lg p-6 rounded-lg"
        onSubmit={handleSubmit}
      >
        <h3 className="text-2xl font-semibold mb-4">Register here</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            className="border border-gray-300 p-2 rounded"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            className="border border-gray-300 p-2 rounded"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="tel"
          className="border border-gray-300 p-2 rounded w-full mb-4"
          name="phone"
          placeholder="Mobile Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <textarea
          className="border border-gray-300 p-2 rounded w-full mb-4"
          name="message"
          placeholder="Send a message here"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button
          type="submit"
          className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
