import React, { useState } from 'react';
import Confetti from 'react-confetti';
import '../styles/template.css';

const Contact = () => {
  const [isSubmitted, setSubmitted

    
  ] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.status === 200) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return isSubmitted ? (
    <div>
      <h1 className="text-center font-semibold text-3xl">
        Thank you for your message!
      </h1>
      <Confetti />
    </div>
  ) : (
    <div className="container mt-6 " id='contact'>
      <div className="row align-items-center">
        <div className="col-lg-8 mx-auto text-center">
          <div className="ms-3 mb-md-5">
            <h3>Contact us</h3>
            <p>
              For further questions, including partnership opportunities, please email Nishu@gmail.com
              or contact using our contact form.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="card card-plain">
            <form onSubmit={onSubmit} className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <label>Enter Your Name</label>
                  <div className="input-group mb-4">
                    <input
                      className="form-control"
                      placeholder="Full Name"
                      aria-label="Full Name"
                      type="text"
                      value={name}
                      name='name'
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6 ps-md-2">
                  <label>Email</label>
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="your@gmail.com"
                      value={email}
                      name='email'
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group mb-4 mt-md-0 mt-4">
                <label>What can we help you?</label>
                <textarea
                  name="message"
                  className="form-control"
                  id="message"
                  rows="6"
                  placeholder="Jot Down Your feelings"
                  value={message}
                //   name="message"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="row">
                <div className="col-md-12 text-center">
                  <button type="submit" className="btn bg-black text-white mt-4">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
