import React, { useState } from "react";

const AddComment = () => {
  const initialFormData = {
    fullName: "",
    email: "",
    subject: "",
    reviewText: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Review submitted:", formData);

    // Show confirmation message
    setIsSubmitted(true);

    // Clear the form fields
    setFormData(initialFormData);

    // Optional: Hide confirmation message after a delay
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  const isFormValid = formData.fullName && formData.email && formData.subject && formData.reviewText;

  return (
    <div className="w-full p-6 bg-white shadow-lg rounded-lg mx-auto mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-start">Leave A Comment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div className="flex justify-start gap-6">
        <div className="w-full">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
            required
          />
        </div>

        {/* Email */}
        <div className="w-full">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
            required
          />
        </div>
        </div>

        {/* Subject */}
        <div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Write A Subject"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
            required
          />
        </div>

        {/* Review Text */}
        <div>
          <textarea
            name="reviewText"
            value={formData.reviewText}
            onChange={handleChange}
            rows="4"
            placeholder="Write A Comment"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isFormValid}
          className={`px-6 py-3 rounded-md text-white font-bold ${
            isFormValid ? "bg-pink-600 hover:bg-pink-700" : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Send Comment
        </button>
      </form>

      {/* Confirmation Message */}
      {isSubmitted && (
        <p className="mt-4 text-green-600 font-medium text-center">Review added successfully!</p>
      )}
    </div>
  );
};

export default AddComment;
