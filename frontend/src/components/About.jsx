import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              At our restaurant, quality is our top priority. Every dish is prepared with fresh, handpicked ingredients to ensure the best taste and nutrition. We strictly follow high hygiene and safety standards in our kitchen, so every meal is clean, healthy, and trustworthy.

              Our chefs focus on authentic flavors, perfect seasoning, and consistent taste in every serving. We avoid artificial colors and harmful preservatives, delivering food that is pure, flavorful, and satisfying.

              From starters to main courses, each dish is cooked with care, passion, and attention to detail, ensuring that our customers enjoy a memorable dining experience every time they visit.

              ✨ Fresh Ingredients | Hygienic Preparation | Authentic Taste | Consistent Quality
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;