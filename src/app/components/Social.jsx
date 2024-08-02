import React from 'react'
import '../styles/template.css';

const Social = () => {
  return (
    <div className="py-5 pt-5 pb-5" id="social"  style={{backgroundColor:`#FFF5E0`}}>
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <h4 className="mb-1">Thank you for your support!</h4>
                <p className="lead mb-0">Delivering the best products</p>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
                <a href="https://www.instagram.com/stitchndglow?igsh=OTdvY2QxeXY2anJ3" className="btn btn-instagram mb-0 me-2">
                    <i className="fab fa-instagram me-1" aria-hidden="true"></i> Instagram
                </a>
                <a href="javascript:;" className="btn btn-facebook mb-0 me-2">
                    <i className="fab fa-facebook-square me-1" aria-hidden="true"></i> Facebook
                </a>
                <a href="https://www.pinterest.com/stitchndglow/" className="btn btn-pinterest mb-0 me-2">
                    <i className="fab fa-pinterest me-1" aria-hidden="true"></i> Pinterest
                </a>
               
            </div>
        </div>
    </div>
</div>
  )
}

export default Social