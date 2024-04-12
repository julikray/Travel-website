import React from "react";
import { Link } from "react-router-dom";

function Home() {
  

  return (
    <div>



      {/* home-hero start */}
      <section className="herosection">
        <div className="textsection">
          <h4 className="h4tag">
            LET'S MAKE THE BEST TRIP EVER
            <img src="../image/worldwide.png" alt="" srcset="" />
          </h4>
          <h1 className="h1tag">
            Traveling opens the door <br /> to creating <spam>memories</spam>
          </h1>
          <p className="p-tag">
            Unlock the secrets of the world's most captivating destinations.
          </p>
        </div>

        <div className="imgsection">
          <div className="heroimg1">
            <img src="../image/hero-img01.jpg" alt="img" />
          </div>

          <div className="heroimg2">
            <img src="../image/hero-img02.jpg" alt="img" />
          </div>

          <div className="heroimg3">
            <img src="../image/hero-img03.jpg" alt="img" />
          </div>
        </div>
      </section>

      {/* home-hero end  */}



      {/* service start  */}

      <section class="service">
        <h3 class="heading-title">OUR SERVICE</h3>
        <div class="box-container">
          <div class="box">
            <img src="./image/adventure.png" alt="adventure" />
            <h3>Adventure</h3>
          </div>

          <div class="box">
            <img src="./image/tour-guide.png" alt="tour-guide" />
            <h3>Tour Guide</h3>
          </div>

          <div class="box">
            <img src="./image/trekking.png" alt="trekking" />
            <h3>Trekking</h3>
          </div>

          <div class="box">
            <img src="./image/fire.png" alt="fire" />
            <h3>Camp fire</h3>
          </div>

          <div class="box">
            <img src="./image/offroad.png" alt="off-road" />
            <h3>Off Road</h3>
          </div>

          <div class="box">
            <img src="./image/home.png" alt="camping" />
            <h3>Camping</h3>
          </div>
        </div>
      </section>

      {/* service end  */}


      {/* home-about start */}

      <section class="home-about">
        <div class="about-img">
          <img src="image/about.jpg" alt="about" />
        </div>

        <div class="about-content">
          <h3>About Us</h3>
          <p>
            Welcome to JKTravel travel dreams take flight! Founded in 2002,
            we're passionate explorers dedicated to curating unique journeys.
            With expert guidance, personalized itineraries, and a commitment to
            sustainability, we transform trips into unforgettable adventures.
            Join us on the road less traveled and discover the world in style.
          </p>
          <Link to="/about" class="btn">
            Read More
          </Link>
        </div>
      </section>
      {/* home-about end  */}


      {/* home-package start  */}
      <section class="home-packages">
        <h1>Our Packages</h1>

        <div class="box-container">
          <div class="box">
            <div class="image">
              <img src="./image/tej" alt="" />
            </div>
            <div class="content">
              <h3>adventure & tour</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                quaerat deleniti cupiditate
              </p>
              <Link to="/book" class="btn">
                book now
              </Link>
            </div>
          </div>

          <div class="box">
            <div class="image">
              <img src="./image/tej" alt="" />
            </div>

            <div class="content">
              <h3>adventure & tour</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                quaerat deleniti cupiditate
              </p>
              <Link to="/book" class="btn">
                book now
              </Link>
            </div>
          </div>

          <div class="box">
            <div class="image">
              <img src="./image/tej" alt="" />
            </div>
            <div class="content">
              <h3>adventure & tour</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                quaerat deleniti cupiditate
              </p>
              <Link to="/book" class="btn">
                book now
              </Link>
            </div>
          </div>
        </div>
        <div class="load-more">
          <Link to="/package" class="btn">
            load more
          </Link>
        </div>
      </section>
      {/* home-package end  */}


      {/* home-off start */}

      <section>
        <div className="off">
          <h1>Upto 50% off</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos ipsam
            mollitia quod in dicta, perferendis modi maiores consectetur,
            nesciunt distinctio placeat. Aspernatur libero, odio ex quae
            consequunturnon qui hic!
          </p>

          <div class="load-more">
            <Link to="/book" class="btn">
              book now
            </Link>
          </div>
        </div>
      </section>
      {/* home-off end  */}

      
    </div>
  );
}

export default Home;
