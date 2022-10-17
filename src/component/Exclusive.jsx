import React from "react";
import cartoonImage from "../asset/images/cartoon.png";

const Exclusive = () => {
  return (
    <>
      <div style={{ background: "#bf1414", paddingTop: "100px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src={cartoonImage}
                className="img-fluid"
                alt="cartoon image"
              />
            </div>
            <div className="col-md-6">
              <div className="text center mt-5 exclusive_haed_text">
                <h1>EXCLUSIVE Distribution</h1>
                <p>(No Competition - Just One Advertiser per Industry)</p>
              </div>
            </div>
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

export default Exclusive;
