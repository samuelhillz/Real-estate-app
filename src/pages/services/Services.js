import React from 'react'
import './Services.css'
import service1 from '../../assets/theservices.webp'

const Services = () => {
  return (
    <div className="sevices">
      <div className="service-container">
        <div className='background'>
          <img src={service1} alt="" />
          <h2>Service guide</h2>
        </div>
        <div className="service-text">
          <p>
            From determining your home's value to closing day, learn more about
            the home renting process.
          </p>
          <div className="steps-wrap">
            <h2> 5 Steps To Successfully rent Your Home</h2>
            <div className="steps layout">
              <div className="step-one">
                <h3>1. Choose an Agent</h3>
                <p>
                  The best thing you can do to make the selling process as quick
                  and as easy as possible is to hire a real estate professional
                  — and our RE/MAX agents are here to help every step of the
                  way. We can offer cutting edge technology, comprehensive
                  marketing strategies, and can effectively and efficiently
                  guide you through the real estate process. We understand the
                  nuances of the market and can work with you to determine a
                  competitive and fair price for your home.
                </p>
              </div>
              <div className="step-one">
                <h3>2. Prepare Your Home For Sale</h3>
                <p>
                  Before you list your home, you’ll want to make sure your home
                  is as marketable as possible. You may want to consider some
                  repairs that could help add value to your property, such as
                  fixing any water damage or foundation concerns. Even small
                  cosmetic changes can have a big impact in the eyes of a buyer,
                  such as replacing outdated light fixtures or giving your home
                  a fresh coat of paint. Your agent can work with you to help
                  identify updates that may help increase the value of your
                  home.
                </p>
              </div>
              <div className="step-one">
                <h3>3. Determine Your Home’s Value</h3>
                <p>
                  Choosing the right price for your home is one of the most
                  important components of the selling process. While online
                  estimates can be a good place to start, your agent will be
                  able to provide free of charge a more accurate valuation based
                  on local trends, the condition of your home, similar homes in
                  the area, and more. Equipped with the insight and knowledge on
                  the real estate market, you can rest assured knowing your
                  RE/MAX agent is committed to finding a fair value for your
                  home.
                </p>
              </div>
              <div className="step-one">
                <h3>4. Accept the Offer</h3>
                <p>
                  Once your home is on the market and a buyer is interested, he
                  or she will submit an offer to your agent through their own
                  agent. While the offer may differ from your asking price, you
                  are able to reject or counter it if you’d like. Once you
                  accept an offer, you’ll be officially under contract! During
                  the due-diligence period between signing the purchase
                  agreement and closing the sale of your home, your agent can
                  help you understand the conditions, provisions, and
                  obligations of your contact.
                </p>
              </div>
              <div className="step-one">
                <h3>5. Close on Your Home</h3>
                <p>
                  Once you’ve gone through the process you are ready to
                  officially sell your home! You’ll sit down and sign paperwork
                  with the help of your agent and transfer the ownership of your
                  home to the buyer. Now it’s time to celebrate — you’ve just
                  sold your home and are ready to move on to your next
                  adventure.
                </p>
              </div>
            </div>
            <div className="service-message">
              <h3>
                Contact Us Today and a Local Agents will be in Touch with You
                Today!
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services