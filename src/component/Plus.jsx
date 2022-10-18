import React from "react";
import img1 from "../asset/images/ad_design.jpg";
import img2 from "../asset/images/multi_img.jpg";
import img3 from "../asset/images/front.png";
import img4 from "../asset/images/back.png";

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
      <div className="container text-center mt-5 mb-5">
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

      <div
        className="container-fluid pt-5 pb-5"
        style={{ background: "#b91f00", color: "white", textAlign: "center" }}
      >
        <div>
          <h1>RESERVE YOUR SPOT ON THE SUMMER CARD NOW!</h1>
          <p
            style={{
              marginTop: "24px",
              fontSize: "20px",
              fontFamily: "cursive",
            }}
          >
            FIRST COME, FIRST SERVE so order now before your competitor locks up
            your industry spot !
          </p>
        </div>
      </div>

      <div className="container text-center mt-5 mb-5">
        <div className="row">
          <div className="col">
            <p
              style={{
                textAlign: "center",
                color: "#73B437",
                fontSize: "50px",
                fontWeight: "600",
                border: "2px solid darkgreen",
                borderRadius: "10px",
                paddingTop: "29px",
                paddingBottom: "29px",
              }}
            >
              EACH SIDE OF THE CARD IS LIMITED <br /> TO ONLY 10 AVAILABLE
              POSITIONS
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center">
            <h3>Side1</h3>
            <img src={img3} className="img-fluid" />
          </div>
          <div className="col-md-6 text-center">
            <h3>Side2</h3>
            <img src={img4} className="img-fluid" />
          </div>
        </div>
        <p
          style={{
            marginTop: "20px",
            fontSize: "21px",
            color: "gray",
            textAlign: "center",
          }}
        >
          (Click on a side to enlarge)
        </p>
        <p
          style={{
            marginTop: "20px",
            fontSize: "21px",
            color: "#73B437",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          All Ad Postions are just $500 each – That’s only 5¢ per Household
        </p>
      </div>
      <hr />

      <div className="container">
        <div>
          <h1
            style={{
              marginTop: "60px",
              fontSize: "40px",
              color: "#73B437",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            CLAIM YOUR INDUSTRY SPOT NOW!
          </h1>

          <div className="row">
            <div className="offset-md-2 col-md-8 text-center">
              <p
                style={{
                  fontSize: "20px",
                  lineHeight: "36px",
                  fontStyle: "italic",
                }}
              >
                If you would like to get your message in front of Leawood’s
                highest income households for a fraction of the price of a
                postage stamp then you must act fast.
                <br />
                <br />
                In the form below select the industry category you wish to
                claim. If your preferred category is still available then select
                the ad placement from the available positions.
                <br />
                <br />
                Note: your company may fit more than one of the categories
                listed but your ad must be focused only on the category you
                claim. Of course if a prospect contacts you about your service
                you are free to discuss any additonal services you might offer.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div style={{ background: "#bf1414", paddingTop: "100px" }}>
        <div className="container">
          <div className="text-center" style={{ color: "white" }}>
            <h1>AVAILABLE INDUSTRIES TO CHOOSE FROM:</h1>
          </div>
          <div className="row mt-5">
            <div className="col-md-3">
              <ul className="custom_list_item">
                <li>Carpet Cleaner</li>
                <li>Deck Repair</li>
                <li>Electrical</li>
                <li>Fencing</li>
                <li>Floor Coverings</li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul className="custom_list_item">
                <li>Carpet Cleaner</li>
                <li>Deck Repair</li>
                <li>Electrical</li>
                <li>Fencing</li>
                <li>Floor Coverings</li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul className="custom_list_item">
                <li>Carpet Cleaner</li>
                <li>Deck Repair</li>
                <li>Electrical</li>
                <li>Fencing</li>
                <li>Floor Coverings</li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul className="custom_list_item">
                <li>Carpet Cleaner</li>
                <li>Deck Repair</li>
                <li>Electrical</li>
                <li>Fencing</li>
                <li>Floor Coverings</li>
              </ul>
            </div>
            <div style={{ color: "white", textAlign: "center" }}>
              <p>
                (If you have a Home Services business that is non-competing to
                the list above and would like to participate please contact us
                for possible inclusion)​
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plus;
