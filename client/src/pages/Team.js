import React from "react";

const Team = (props) => {
  return (
    <div>
      <div class="container team">
        <div>
          <img
            class="logo"
            src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
          />
          <h1>Team</h1>
        </div>
        <div class="row">
          <div class="col-md-4">
            <img
              class="team-img"
              alt="founder "
              src={process.env.PUBLIC_URL + "/assets/images/Arman-1.jpeg"}
            />
            <div>
              <h4>Arman Riahi</h4>
              <p>Ceo & Founder</p>
            </div>
          </div>
          <div class="col-md-4">
            <img
              class="team-img"
              alt="engineer "
              src={process.env.PUBLIC_URL + "/assets/images/Patrick.png"}
            />
            <div>
              <h4>Patrick Panattoni</h4>
              <p>Founding Engineer</p>
            </div>
          </div>
          <div class="col-md-4">
            <img
              class="team-img"
              alt="founder "
              src={process.env.PUBLIC_URL + "/assets/images/andrew.jpg"}
            />
            <div>
              <h4>Andrew Sim</h4>
              <p>Financial & Legal Consultant</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
