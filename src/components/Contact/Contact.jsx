import React, { useState } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

    const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "2a1f53eb-5c63-4fa6-aff3-a3fe330c34f4",
          ...formData
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Geet in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" />
                        <p>awodiabdulmujeeb@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" />
                        <p>+234-813-378-0225</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" />
                        <p>Kwara, Nigeria</p>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit} className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input
                    type="text"
                    placeholder='Enter your name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="">Your Email</label>
                <input
                    type="email"
                    placeholder='Enter your email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="">Write your Message here</label>
                <textarea
                    placeholder='Enter your message'
                    name='message'
                    rows="8"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button className='contact-submit' type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Submit now"}
                </button>
            </form>
        </div>
    </div>
  )
}

export default Contact