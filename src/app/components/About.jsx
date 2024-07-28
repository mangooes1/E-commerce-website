import React from 'react'
import '../styles/template.css';
const About = () => {
  return (
    <div className="container">
    <div className="row">
        <div className="col-lg-6">
            <h3 className="text-gradient text-primary mb-0 mt-2">Read More About Us</h3>
            <h3>The most important</h3>
            <p>Pain is what we go through as we become older. We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.</p>
            <a href="javascript:;" className="text-primary icon-move-right">More about us
                <i className="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
            </a>
        </div>
        <div className="col-lg-6 mt-lg-0 mt-5 ps-lg-0 ps-0">
            <div className="p-3 info-horizontal">
                <div className="icon icon-shape rounded-circle bg-gradient-primary shadow text-center">
                    <i className="fas fa-ship opacity-10" aria-hidden="true"></i>
                </div>
                <div className="description ps-3">
                    <p className="mb-0">It becomes harder for us to give others a hand. <br/> We get our heart broken by people we love.</p>
                </div>
            </div>

            <div className="p-3 info-horizontal">
                <div className="icon icon-shape rounded-circle bg-gradient-primary shadow text-center">
                    <i className="fas fa-handshake opacity-10" aria-hidden="true"></i>
                </div>
                <div className="description ps-3">
                    <p className="mb-0">As we live, our hearts turn colder. <br/>Cause pain is what we go through as we become older.</p>
                </div>
            </div>
            <div className="p-3 info-horizontal">
                <div className="icon icon-shape rounded-circle bg-gradient-primary shadow text-center">
                    <i className="fas fa-hourglass opacity-10" aria-hidden="true"></i>
                </div>
                <div className="description ps-3">
                    <p className="mb-0">When we lose family over time. <br/> What else could rust the heart more over time? Blackgold.</p>
                </div>
            </div>
        </div>
    </div>
</div>
    
  )
}

export default About