import React, { useState } from "react";
import { db } from "./firebase";

function Formed() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [Cname, setCname] = useState("");
  const [option, setOption] = useState("");
  const [comment, setComment] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoader(true);

    if (!fname || !lname || !email || !phone || !Cname || !option || !comment) {
      alert("please fill all form");
      setLoader(false);
    } else {
      db.collection("contacts")
        .add({
          fname,
          lname,
          email,
          phone,
          Cname,
          option,
          comment,
        })
        .then(() => {
          alert("data has been save!");
          setLoader(false);
        })
        .catch((error) => {
          alert(error.message);
          setLoader(false);
        });
    }

    setFname("");
    setLname("");
    setEmail("");
    setPhone("");
    setCname("");
    setOption("");
    setComment("");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="offset-3 col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="row mb-4">
                <div className="form-group col-md-6">
                  <label for="firstname">FirstName</label>
                  <input
                    type="text"
                    className="form-control"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    placeholder="FirstName"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="lastname">LastName</label>
                  <input
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    type="text"
                    className="form-control"
                    id="lastname"
                    placeholder="LastName"
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="form-group col-md-6">
                  <label for="email">Email</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="phone">Phone</label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="number"
                    className="form-control"
                    id="phone"
                    placeholder="phone"
                  />
                </div>
              </div>
              <div className="form-group mb-4">
                <label for="companyname">Company Name</label>
                <input
                  value={Cname}
                  onChange={(e) => setCname(e.target.value)}
                  type="text"
                  className="form-control"
                  id="companyname"
                  placeholder="company name"
                />
              </div>
              <div className="row">
                <div className="form-group col-md-6 mb-4">
                  <label for="inputState">Industry to be Claimed</label>
                  <select
                    id="inputState"
                    className="form-control"
                    value={option}
                    onChange={(e) => setOption(e.target.value)}
                  >
                    <option selected>Choose...</option>
                    <option>Automobile</option>
                    <option>Chiropractor</option>
                    <option>Cleaning Services </option>
                    <option>Deck Repair</option>
                    <option>Dentist</option>
                    <option>Electrical</option>
                    <option>Fire/Water Damage</option>
                    <option>Handyman Services</option>
                    <option>Heating & Air Conditioning</option>
                    <option>House Painting</option>
                    <option>Junk Removal</option>
                    <option>Landscaping</option>
                    <option>Lawyer</option>
                    <option>Mold Removal</option>
                    <option>Movers</option>
                    <option>Pest Control</option>
                    <option>Plumbing</option>
                    <option>Pool Service</option>
                    <option>Remodeling Services</option>
                    <option>Roofing</option>
                    <option>Salon/Spa</option>
                    <option>Veterinarian</option>
                    <option>Windows & Doors</option>
                  </select>
                </div>
                <div className="form-group col-md-12 mb-4">
                  <label for="inputCity">Additional Industries</label>
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    rows="4"
                    cols="50"
                    type="textarea"
                    className="form-control"
                    id="inputCompany"
                    placeholder="If your HOME SERVICES industry is not listed, or in case your first choice has already been taken, please list any additional HOME SERVICES you offer which you would like to be considered for."
                  />
                </div>
              </div>

              {loader ? (
                <button class="btn btn-primary" type="submit" disabled>
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Loading...
                </button>
              ) : (
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Formed;
