import React from "react";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import "./Body.css";

function Body() {
  return (
    <div>
      <div className="row-container1">
        <div className="image-column">
          <img src={img2} alt="" />
        </div>
        <div className="text-column">
          <h4 style={{ color: "#800080" }}>Web & Mobile App Development</h4>
          <p>
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>

          <div>
            <button
              className="btn btn-md text-light"
              style={{ backgroundColor: "#e4c31d" }}
            >
              LEARN MORE
            </button>
          </div>
        </div>
      </div>

      <div className="row-container2">
        <div className="text-column2">
          <h4 style={{ color: "#800080" }}>Digital Stratergy Consulting</h4>
          <p>
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </p>

          <div>
            <button
              className="btn btn-md text-light"
              style={{ backgroundColor: "#e4c31d" }}
            >
              LEARN MORE
            </button>
          </div>
        </div>

        <div className="image-column2">
          <img src={img3} alt="" />
        </div>
      </div>

      <div className="row-container3">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <p className="one">
            Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
          </p>
          <button>-</button>
          <p className="two">
            Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id
            ipsum. Elementum ultrices nulla faucibus odio est sed aliquam.
            Sapien massa morbi risus sagittis tortor integer.
          </p>
        </div>

        <div className="faq-item1">
          <p>
            Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?
          </p>

          <button>+</button>
        </div>

        <div className="faq-item1">
          <p>
            Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?
          </p>
          <button>+</button>
        </div>
      </div>
    </div>
  );
}

export default Body;
