import React, { useState } from "react";
import { Link } from "react-router-dom";

function Package() {
  const [noOfElement, setNoOfElement] = useState(6);

  const loadMore = () => {
    setNoOfElement(noOfElement + noOfElement); 
  };

   const data = [
    {
      image: "./image/tej",
      heading: "adventure & tour",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque",
    },
    {
      image: "./image/tej",
      heading: "adventure & tour",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque",
    },
    {
      image: "./image/tej",
      heading: "adventure & tour",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque",
    },
    {
      image: "./image/tej",
      heading: "adventure & tour",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque",
    },
    {
      image: "./image/tej",
      heading: "adventure & tour",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque",
    },
    {
      image: "./image/tej",
      heading: "adventure & tour",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque",
    },
    {
      image: "./image/tej",
      heading: "adventure & tour",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque",
    },
    {
      image: "./image/tej",
      heading: "adventure & tour",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque",
    },
    {
      image: "./image/tej",
      heading: "adventure & tour",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque",
    },
    {
      image: "./image/tej",
      heading: "adventure & tour",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque",
    },
    {
      image: "./image/tej",
      heading: "adventure & tour",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque",
    },
    {
      image: "./image/tej",
      heading: "adventure & tour",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque",
    },
    {
      image: "./image/tej",
      heading: "adventure & tour",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque",
    },
    {
      image: "./image/tej",
      heading: "adventure & tour",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque",
    },
    {
      image: "./image/tej",
      heading: "adventure & tour",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque",
    },
    
  ];
  return (
    <div>
      <div className="aboutImg1">
        <img src="image/footer-bg.jpg" alt="" />
      </div>

      <section className="home-packages">
        <h1>TOP DESTINATION</h1>

        <div className="box-container">
          {data.slice(0, noOfElement).map((item, index) => (
            <div className="box" key={index}>
              <div className="image">
                <img src={item.image} alt="" />
              </div>
              <div className="content">
                <h3>{item.heading}</h3>
                <p>{item.para}</p>
                <Link to="/book" className="btn">
                  book now
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="load-more">
         
          {noOfElement < data.length && (
            <button onClick={loadMore} className="btn">
              Load More
            </button>
          )}
        </div>
      </section>
    </div>
  );
}

export default Package;