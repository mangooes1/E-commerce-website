import React from 'react'
import '../styles/template.css';

const Query = () => {
  return (
    // <div classNameName="container">
    //         <div classNameName="row my-5">
    //             <div classNameName="col-md-6 mx-auto text-center">
    //                 <h2>Frequently Asked Questions</h2>
    //                 <p>Have questions about our services and products? We've got you covered! Find answers here for all the info you need to help you shop with confidence.</p>
    //             </div>
    //         </div>
    //         <div classNameName="row">
    //             <div classNameName="col-md-10 mx-auto">
    //                 <div classNameName="accordion" id="accordionRental">
    //                     <div classNameName="accordion-item mb-3">
    //                         <h5 classNameName="accordion-header" id="headingOne">
    //                             <button classNameName="accordion-button border-bottom font-weight-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
    //                                 How do I order?
    //                                 <i classNameName="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
    //                                 <i classNameName="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
    //                             </button>
    //                         </h5>
    //                         <div id="collapseOne" classNameName="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionRental">
    //                             <div classNameName="accordion-body text-dark text-sm opacity-8">
    //                                 We’re not always in the position that we want to be at. We’re constantly growing. We’re constantly making mistakes. We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game
    //                                 of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s passed.
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div classNameName="accordion-item mb-3">
    //                         <h5 classNameName="accordion-header" id="headingTwo">
    //                             <button classNameName="accordion-button border-bottom font-weight-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
    //                                 How can i make the payment?
    //                                 <i classNameName="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
    //                                 <i classNameName="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
    //                             </button>
    //                         </h5>
    //                         <div id="collapseTwo" classNameName="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionRental">
    //                             <div classNameName="accordion-body text-dark text-sm opacity-8">
    //                                 It really matters and then like it really doesn’t matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn’t matter. Because it's about motivating the doers. Because I’m here to follow my dreams and inspire other people to follow their dreams, too.
    //                                 <br/>
    //                                 We’re not always in the position that we want to be at. We’re constantly growing. We’re constantly making mistakes. We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s passed.
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div classNameName="accordion-item mb-3">
    //                         <h5 classNameName="accordion-header" id="headingThree">
    //                             <button classNameName="accordion-button border-bottom font-weight-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
    //                                 How much time does it take to receive the order?
    //                                 <i classNameName="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
    //                                 <i classNameName="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
    //                             </button>
    //                         </h5>
    //                         <div id="collapseThree" classNameName="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionRental">
    //                             <div classNameName="accordion-body text-dark text-sm opacity-8">
    //                                 The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you. Would you believe in what you believe in, if you were the only one who believed it?
    //                                 If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even try. Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how.
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div classNameName="accordion-item mb-3">
    //                         <h5 classNameName="accordion-header" id="headingFour">
    //                             <button classNameName="accordion-button border-bottom font-weight-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
    //                                 Can I resell the products?
    //                                 <i classNameName="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
    //                                 <i classNameName="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
    //                             </button>
    //                         </h5>
    //                         <div id="collapseFour" classNameName="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionRental">
    //                             <div classNameName="accordion-body text-dark text-sm opacity-8">
    //                                 I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can’t do anything, you won’t do anything. I was taught I could do everything.
    //                                 <br/><br/>
    //                                 If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even try. Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how.
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div classNameName="accordion-item mb-3">
    //                         <h5 classNameName="accordion-header" id="headingFifth">
    //                             <button classNameName="accordion-button border-bottom font-weight-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifth" aria-expanded="false" aria-controls="collapseFifth">
    //                                 Where do I find the shipping details?
    //                                 <i classNameName="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
    //                                 <i classNameName="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
    //                             </button>
    //                         </h5>
    //                         <div id="collapseFifth" classNameName="accordion-collapse collapse" aria-labelledby="headingFifth" data-bs-parent="#accordionRental">
    //                             <div classNameName="accordion-body text-dark text-sm opacity-8">
    //                                 There’s nothing I really wanted to do in life that I wasn’t able to get good at. That’s my skill. I’m not really specifically talented at anything except for the ability to learn. That’s what I do. That’s what I’m here for. Don’t be afraid to be wrong because you can’t learn anything from a compliment.
    //                                 I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can’t do anything, you won’t do anything. I was taught I could do everything.
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    // /   </div>
    <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
    
  )
}

export default Query