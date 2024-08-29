import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = (props) => {
  return (
    <div className="descriptionbox">
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div> 
        </div>
        <div className="descriptionbox-description">
            <p>Agrobuy is your one-stop online destination for premium agriculture equipment, high-quality seeds,
                and essential fertilizers. Designed with farmers and agricultural enthusiasts in mind,
                Agrobuy offers a comprehensive range of products to support every aspect of modern farming.
                Our user-friendly platform ensures you can easily find and purchase the tools and supplies you need to enhance productivity and grow your business.
                From advanced machinery to the latest in seed technology and nutrient-rich fertilizers, Agrobuy is dedicated to providing reliable solutions that help you cultivate success. 
            </p>
        </div>
    </div>
  );
}

export default DescriptionBox; 