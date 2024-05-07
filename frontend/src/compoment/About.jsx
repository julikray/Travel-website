// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faMap,
//   faHandHoldingDollar,
//   faHeadset,
// } from "@fortawesome/free-solid-svg-icons";
// import "./about.css";

// function About( { name, comment, rating }) {

//   const reviewData = {
//     name: 'John Doe',
//     comment: 'Great product! Will definitely buy again.',
//     rating: 5


//     name: 'John Doe',
//     comment: 'Great product! Will definitely buy again.',
//     rating: 5


//     name: 'John Doe',
//     comment: 'Great product! Will definitely buy again.',
//     rating: 5
//   };

//   return (
//     <div>
//       <div className="aboutImg1">
//         <img src="image/footer-bg.jpg" alt="" />
//       </div>

//       <section class="about">
//         <div class="about1-img">
//           <img src="image/about.jpg" alt="about" />
//         </div>

//         <div class="about-content1">
//           <h3>Why Choose US?</h3>
//           <p>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
//             perspiciatis temporibus, magnam cupiditate sit unde, error
//             recusandae suscipit obcaecati explicabo cum dicta excepturi
//             blanditiis officiis? Iste dolore distinctio blanditiis aperiam?
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
//             perspiciatis temporibus, magnam cupiditate sit unde, error
//             recusandae suscipit obcaecati explicabo cum dicta excepturiggg.
//             officiis? Iste dolore distinctio blanditiis aperiam? Lorem ipsum
//             dolor sit, amet consectetur adipisicing elit. Et perspiciatis
//             temporibus, magnam cupiditate sit unde, error recusandae suscipit
//             obcaecati explicabo cum dicta excepturi blanditiis officiis? Iste
//             dolore distinctio blanditiis aperiam?
//           </p>

//           <div className="icon-div">
//             <div className="icon-div1">
//               <FontAwesomeIcon icon={faMap} className="fontIcon" />
//               <p>Top Destinations</p>
//             </div>

//             <div className="icon-div1">
//               <FontAwesomeIcon
//                 icon={faHandHoldingDollar}
//                 className="fontIcon"
//               />
//               <p>Affordable Price</p>
//             </div>
//             <div className="icon-div1">
//               <FontAwesomeIcon icon={faHeadset} className="fontIcon" />
//               <p>24/7 Guide Service</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* reviws section start */}

//       <section>
//       <div>
//       <h1>Customer Reviews</h1>
//       {reviews.map((review, index) => (
//         <div>
//           key={index}
//           name={review.name}
//           comment={review.comment}
//           rating={review.rating}
//         </div>
//       ))}
//     </div>


//       </section>

//       {/* reviws section end */}
//     </div>
//   );
// }

// export default About;






import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMap,
  faHandHoldingDollar,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import "./about.css";

function About() {
  const reviewData = [
    { name: 'John Doe', comment: 'Great product! Will definitely buy again.', rating: 5 },
    { name: 'Jane Smith', comment: 'Average quality, but good value for the price.', rating: 4 },
    { name: 'Alice Johnson', comment: 'Excellent service! Highly recommended.', rating: 5 },
    { name: 'John t', comment: 'Great product! Will definitely buy again.', rating: 5 },
    { name: 'Jot Doe', comment: 'Great product! Will definitely buy again.', rating: 5 },
    { name: 'Jop Doe', comment: 'Great product! Will definitely buy again.', rating: 5 },
    
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === reviewData.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? reviewData.length - 1 : prevSlide - 1));
  };

  return (
    <div>
      <div className="aboutImg1">
        {/* <img src="image/div.png" alt="" /> */}
      </div>

      <section className="about">
        <div className="about1-img">
          <img src="image/about.jpg" alt="about" />
        </div>

        <div className="about-content1">
          <h3>Why Choose Us?</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
            perspiciatis temporibus, magnam cupiditate sit unde, error
            recusandae suscipit obcaecati explicabo cum dicta excepturi
            blanditiis officiis? Iste dolore distinctio blanditiis aperiam?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
            perspiciatis temporibus, magnam cupiditate sit unde, error
            recusandae suscipit obcaecati explicabo cum dicta excepturiggg.
            officiis? Iste dolore distinctio blanditiis aperiam? Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Et perspiciatis
            temporibus, magnam cupiditate sit unde, error recusandae suscipit
            obcaecati explicabo cum dicta excepturi blanditiis officiis? Iste
            dolore distinctio blanditiis aperiam?
          </p>

          <div className="icon-div">
            <div className="icon-div1">
              <FontAwesomeIcon icon={faMap} className="fontIcon" />
              <p>Top Destinations</p>
            </div>

            <div className="icon-div1">
              <FontAwesomeIcon
                icon={faHandHoldingDollar}
                className="fontIcon"
              />
              <p>Affordable Price</p>
            </div>
            <div className="icon-div1">
              <FontAwesomeIcon icon={faHeadset} className="fontIcon" />
              <p>24/7 Guide Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* reviews section start */}
      <section className="reviews">
        <div className="reviews-container">
          <h1>Customer Reviews</h1>
          <div className="slider">
            {reviewData.map((review, index) => (
              <div
                key={index}
                className={index === currentSlide ? "slide active" : "slide"}
              >
                <h3>{review.name}</h3>
                <img src={`image/${review.name}.jpg`} alt={review.name} className="review-photo" />
                <p>{review.comment}</p>
                <div className="rating">
                  {[...Array(review.rating)].map((_, index) => (
                    <span key={index} role="img" aria-label="star">⭐</span>
                  ))}
                </div>
              </div>
            ))}
            <button className="prev" onClick={prevSlide}>Prev</button>
            <button className="next" onClick={nextSlide}>Next</button>
          </div>
        </div>
      </section>
    
      {/* reviews section end */}
    </div>
  );
}

export default About;