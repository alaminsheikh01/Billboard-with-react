import React from "react";
import img1 from "../asset/images/back.jpg";
import img2 from "../asset/images/multi_img.jpg";

const Plus = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={img1} className="img-fluid" alt="back" />
          </div>
          <div className="col-md-6 text-center mt-2">
            <div>
              <h1
                style={{
                  color: "#73B437",
                  fontFamily: '"Poppins", Sans-serif',
                  fontSize: "100px",
                  fontWeight: "800",
                }}
              >
                PLUS!!!
              </h1>
              <p
                style={{
                  fontSize: "18px",
                  color: "#8c7e7e",
                  fontStyle: "italic",
                }}
              >
                We will create a FREE Customer- <br />
                Attracting,Full-Color Display ad
                <br /> designed to your offer
                <br />
                <br /> Yes, you'll have a custom built ad
                <br />
                created for you by our professional
                <br /> design staff for maximum impact for
                <br /> your business
              </p>
              <p
                style={{
                  textAlign: "center",
                  color: "#73B437",
                  fontFamily: '"Poppins", Sans-serif',
                  fontSize: "45px",
                  fontWeight: "800",
                }}
              >
                $150 value
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center mt-5">
        <div className="row">
          <div
            className="col"
            style={{
              background: "pink",
              padding: "20px",
              wordSpacing: "7px",
              fontSize: "23px",
              borderRadius: "12px",
            }}
          >
            <p>
              Not sure what to promote? Don’t worry, we have an IDEA BANK with
              suggested
              <br /> promotions that have been successful for others inside your
              industry.
            </p>
          </div>
        </div>
      </div>
      <img src={img2} className="img-fluid reapet" />
    </>
  );
};

export default Plus;
