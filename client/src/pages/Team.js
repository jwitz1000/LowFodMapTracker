import React from "react";

const Team = (props) => {
  return (
    <div>
      <header
        id="MainHeader"
        class="team-header"
        style={{ marginLeft: `10vw` }}
      >
        <img
          class="logo"
          src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
        />
        <h1>Team</h1>
      </header>

      <div class="container">
        <div class="row">
          <div class="col-md-6">
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
          <div class="col-md-6">
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
        </div>
      </div>
    </div>
  );
};

export default Team;
