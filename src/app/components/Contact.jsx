import React from 'react'
import '../styles/template.css';

const Contact = () => {
  return (
    <div className="container">
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
                <form id="contact-form" method="post" autocomplete="off">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <label>Enter Your Name</label>
                                <div className="input-group mb-4">
                                    <input className="form-control" placeholder="Full Name" aria-label="Full Name" type="text"/>
                                </div>
                            </div>
                            <div className="col-md-6 ps-md-2">
                                <label>Email</label>
                                <div className="input-group">
                                    <input type="email" className="form-control" placeholder="your@gmail.com"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group mb-4 mt-md-0 mt-4">
                            <label>What can we help you?</label>
                            <textarea name="message" className="form-control" id="message" rows="6" placeholder="Jot Down Your feelings"></textarea>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <button type="submit" className="btn bg-gradient-primary mt-4">Send Message</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default Contact