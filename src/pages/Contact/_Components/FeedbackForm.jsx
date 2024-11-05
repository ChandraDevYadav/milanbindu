import React, { useState } from 'react';

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  });

  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Check if all fields have been filled to enable the button
    const allFieldsFilled = Object.values({ ...formData, [name]: value }).every(field => field !== '');
    setIsButtonActive(allFieldsFilled);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      mobile: '',
      subject: '',
      message: ''
    });
    setIsButtonActive(false);
  };

  return (
    <div className="flex justify-center items-center py-4 md:py-24 bg-white">
      <form onSubmit={handleSubmit} className="w-full max-w-4xl p-4">
        <h2 className="text-6xl font-bold text-primary mb-4 text-center">Feedback.</h2>
        <p className='text-gray-700 text-lg font-medium text-center mb-12'>Let us know your opinions. Also you can write us if you have any questions..</p>

        <div className='flex justify-start items-center gap-4'>
        <div className="mb-8 w-full">
          <input
            type="text"
            name="name"
            placeholder='Your Name *'
            value={formData.name}
            onChange={handleChange}
            className="w-full px-2 py-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="mb-8 w-full">
          <input
            type="email"
            name="email"
            placeholder='Your Email *'
            value={formData.email}
            onChange={handleChange}
            className="w-full px-2 py-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
          />
        </div>
        </div>

        <div className='flex justify-start items-center gap-4'>
        <div className="mb-8 w-full">
          <input
            type="tel"
            name="mobile"
            placeholder='Your Mobile *'
            value={formData.mobile}
            onChange={handleChange}
            className="w-full px-2 py-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="mb-8 w-full">
          <input
            type="text"
            name="subject"
            placeholder='Your Subject *'
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-2 py-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
          />
        </div>
        </div>

        <div className="mb-4">
          <textarea
            name="message"
            placeholder='Your Message *'
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            rows="8"
          />
        </div>

        <button
          type="submit"
          disabled={!isButtonActive}
          className={`w-full py-2 px-4 text-white font-semibold rounded-lg ${isButtonActive ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-gray-300 cursor-not-allowed'}`}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default FeedbackForm;
