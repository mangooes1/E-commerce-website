import React from 'react'
import '../styles/template.css';

const Social = () => {
  return (
    <div className="py-5">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <h4 className="mb-1">Thank you for your support!</h4>
                <p className="lead mb-0">Delivering the best products</p>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
                <a href="javascript:;" className="btn btn-twitter mb-0 me-2">
                    <i className="fab fa-twitter me-1" aria-hidden="true"></i> Twitter
                </a>
                <a href="javascript:;" className="btn btn-facebook mb-0 me-2">
                    <i className="fab fa-facebook-square me-1" aria-hidden="true"></i> Facebook
                </a>
                <a href="javascript:;" className="btn btn-tumblr mb-0 me-2">
                    <i className="fab fa-tumblr me-1" aria-hidden="true"></i> Tumblr
                </a>
                <a href="javascript:;" className="btn btn-dribbble mb-0">
                    <i className="fab fa-dribbble me-1" aria-hidden="true"></i> Dribbble
                </a>
            </div>
        </div>
    </div>
</div>
  )
}

export default Social