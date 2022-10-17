import React from "react";
import img1 from "../asset/images/mixed.jpg";
import img2 from "../asset/images/head.png";
import img3 from "../asset/images/us_circle.png";

const Mega = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col" style={{ textAlign: "center" }}>
            <h1>
              Massive 9"x12" Full-Color{" "}
              <span style={{ color: "#73B437" }}>MEGA Postcard</span>
            </h1>
            <p
              style={{
                fontFamily: "cursive",
                fonSize: "20px",
                marginTop: "26px",
              }}
            >
              Printed on sturdy 16pt UV Coated Cardstock will insure this card
              stands out​
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6">
            <img src={img1} className="img-fluid" />
          </div>
          <div className="col-md-6 mt-5" style={{ textAlign: "center" }}>
            <div>
              <h1
                style={{
                  lineHeight: "79px",
                  fontSize: "45px",
                  fontWeight: "bold",
                }}
              >
                Guaranteed <br />
                <span style={{ color: "#73B437" }}>
                  INSTANT
                  <br /> CUSTOMER
                </span>
                <br /> Visibility
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid text-center mt-5">
        <div className="row">
          <div
            className="col"
            style={{ background: "#fecf5a", fontWeight: "bold" }}
          >
            <div className="mt-5 mb-5">
              <h1 style={{ color: "#b91f00", fontWeight: "bold" }}>
                NO LONG-TERM CONTRACTS
              </h1>
              <p
                style={{
                  color: "rgb(80 44 44)",
                  fontFamily: "cursive",
                  fontSize: "18px",
                }}
              >
                FIRST COME, FIRST SERVE so order now before your competitor
                locks up your industry spot!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <div className="text-center mt-4">
              <h1
                style={{
                  fontWeight: "bold",
                  fontSize: "50px",
                  color: "#73B437",
                }}
              >
                BUT HOW MUCH?
              </h1>
              <p
                style={{
                  fontStyle: "italic",
                  fontSize: "20px",
                  marginTop: "42px",
                  color: "darkcyan",
                }}
              >
                By splitting the cost with other like - but not competing
                businesses,
                <br /> we are able to give this Special Launch Offer
                <br /> price of only 5¢ per household delivered.
              </p>
              <div className="row">
                <div className="col-md-4">
                  <img src={img3} className="img-fluid" />
                </div>
                <div className="col-md-8 mt-5">
                  <p
                    style={{
                      textAlign: "left",
                      fontSize: "21px",
                      fontStyle: "italic",
                      color: "#786666",
                    }}
                  >
                    That, right, for less that 10% of the price of a <br />
                    single postage stamp you can have your ad
                    <br /> delivered to some of the highest income
                    <br /> households in the Leawood area.
                  </p>
                  <div>
                    <p
                      style={{
                        color: "#73B437",
                        fontFamily: '"Poppins", Sans-serif,',
                        fontSize: "172px",
                        fontWeight: "800",
                        textAlign: "left",
                      }}
                    >
                      5 <span style={{ fontSize: "102px" }}>¢</span>
                    </p>

                    <p style={{ fontSize: "25px", marginTop: "-49px" }}>
                      per household
                    </p>
                    <p
                      style={{
                        textAlign: "left",
                        fonSize: "20px",
                        color: "#a49393",
                      }}
                    >
                      (FIVE-CENTS / ONE NICKEL)
                    </p>
                    <p
                      style={{
                        textAlign: "left",
                        marginTop: "41px",
                        lineHeight: "34px",
                        marginBottom: "20px",
                      }}
                    >
                      *Be sure to check with your accountant
                      <br /> as placing an ad in the Springtime Co-Op
                      <br /> Mailer may be a tax-deductible expense.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <img src={img2} className="img-fluid" alt="us_circle" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mega;
