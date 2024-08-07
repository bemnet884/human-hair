import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.message) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Simulate sending data to server
      console.log(formData);
      setSubmitStatus('Success! Your message has been sent.');
      // Reset form fields
      setFormData({ name: '', email: '', message: '' });
    } else {
      setSubmitStatus('Error: Please fill in all fields correctly.');
    }
  };

  return (
    <section className="w-full flex justify-center max-sm:flex-col items-start gap-20 p-8 md:p-16">
      <div className="w-full md:w-1/2 lg:w-2/5">
        <h2 className="text-4xl font-bold font-palanquin mb-4">
          <span className="text-primary">Contact</span> Us
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          We'd love to hear from you! Please fill out the form below to get in touch.
        </p>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg" noValidate>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-violet-500"
              aria-describedby="name-error"
              required
            />
            {errors.name && (
              <p id="name-error" className="text-red-500 text-sm mt-1">
                {errors.name}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-violet-500"
              aria-describedby="email-error"
              required
            />
            {errors.email && (
              <p id="email-error" className="text-red-500 text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-violet-500"
              rows="5"
              aria-describedby="message-error"
              required
            />
            {errors.message && (
              <p id="message-error" className="text-red-500 text-sm mt-1">
                {errors.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white font-bold py-2 px-4 rounded-md hover:bg-violet-400 transition-colors duration-300"
          >
            Send Message
          </button>
          {submitStatus && (
            <p className={`text-sm mt-4 ${submitStatus.startsWith('Success') ? 'text-green-500' : 'text-red-500'}`}>
              {submitStatus}
            </p>
          )}
        </form>
      </div>

      <div className="w-full md:w-1/2 lg:w-2/5 mt-8 md:mt-0">
        <h3 className="text-4xl font-bold font-palanquin mb-4">
          Our <span className="text-primary">Location</span>
        </h3>
        <div className="w-full h-80 bg-gray-200 rounded-lg flex justify-center items-center my-8">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.873483115885!2d38.79373147418142!3d8.983787891075739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b858fbf50bd97%3A0x93a0799b20ab0276!2sBole%20Addis%20Ababa%20International%20Airport!5e0!3m2!1sen!2set!4v1722895998208!5m2!1sen!2set" 
            width="600" 
            height="350" 
            style={{border: "0"}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            aria-label="Google Map showing our location"
          ></iframe>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed">
          Bole, Addis Ababa, Ethiopia <br />
          Phone: (+251) 909090909 <br />
          Email: <a href="mailto:customer@FandishasBundles.com" className="text-primary underline">customer@FandishasBundles.com</a>
        </p>
      </div>
    </section>
  );
};

export default ContactUs;
