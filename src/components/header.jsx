import React, { useState, useEffect } from "react";

export const Header = (props) => {
  // Set the discount expiry date (YYYY-MM-DD)
  const discountExpiryDate = "2023-06-01";

  // Calculate the remaining time until the discount expiry
  const calculateTimeRemaining = () => {
    const currentTime = new Date().getTime();
    const expiryTime = new Date(discountExpiryDate).getTime();
    const timeDifference = expiryTime - currentTime;

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 90));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 90)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  // Update the time remaining every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // Format the time values with leading zeros if necessary
  const formatTimeValue = (value) => {
    return value.toString().padStart(2, "0");
  };

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <div class="services-box">
                  <img
                    src="img/portfolio/services.png"
                    alt="Service Image"
                    class="service-img"
                  />
                </div>
                <div className="head">VALID TODAY</div>
                <div className="timer">
                  <div>
                    <span>{formatTimeValue(timeRemaining.hours)} : </span>
                    <span> Hours </span>
                  </div>
                  <div>
                    <span>{formatTimeValue(timeRemaining.minutes)} : </span>
                    <span> Minutes </span>
                  </div>
                  <div>
                    <span>{formatTimeValue(timeRemaining.seconds)} </span>
                    <span> Seconds</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/+447477182176"
                  className="btn btn-custom btn-lg"
                >
                  Join now
                </a>{" "}
                <div class="services-box">
                  <img
                    src="img/portfolio/servic.png"
                    alt="Service Image"
                    class="service-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
