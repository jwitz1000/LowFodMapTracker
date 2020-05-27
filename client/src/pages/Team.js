import React from "react";

const Team = (props) => {
  return (
    <div>
      <div className="container team">
        <div className="team-banner">
          <img
            className="logo"
            src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
          />
          <h1>Team</h1>
        </div>

        <div className="row">
          <div className="col-md-6">
            <img
              className="team-img"
              alt="founder "
              src={process.env.PUBLIC_URL + "/assets/images/Arman-1.jpeg"}
            />
            <div>
              <h4>Arman Riahi</h4>
              <p>Ceo & Founder</p>
            </div>
          </div>
          <div className="col-md-6">
            <img
              className="team-img"
              alt="engineer "
              src={process.env.PUBLIC_URL + "/assets/images/Patrick.png"}
            />
            <div>
              <h4>Patrick Panattoni</h4>
              <p>Founding Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
