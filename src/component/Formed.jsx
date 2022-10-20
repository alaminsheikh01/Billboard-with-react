import React from "react";

function Formed() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="offset-3 col-md-6">
            <form>
              <div className="row mb-4">
                <div className="form-group col-md-6">
                  <label for="firstname">FirstName</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    placeholder="FirstName"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="lastname">LastName</label>
                  <input
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
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="phone">Phone</label>
                  <input
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
                  type="text"
                  className="form-control"
                  id="companyname"
                  placeholder="company name"
                />
              </div>

              <div className="row">
                <div className="form-group col-md-6 mb-4">
                  <label for="inputState">Industry to be Claimed</label>
                  <select id="inputState" className="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="form-group col-md-12 mb-4">
                  <label for="inputCity">City</label>
                  <textarea
                    name="w3review"
                    rows="4"
                    cols="50"
                    type="textarea"
                    className="form-control"
                    id="inputCompany"
                    placeholder="If your HOME SERVICES industry is not listed, or in case your first choice has already been taken, please list any additional HOME SERVICES you offer which you would like to be considered for."
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Formed;
