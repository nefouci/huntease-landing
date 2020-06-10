import React from "react";

const BlocFive = () => {
  return (
    <div className="bloc-5 flex fdc aic">
      <div className="bloc-container flex fdr aic jcc">
        <div className="blocs flex aifs jcc fdc">
          <h3 className="text_s46 bold_text blue">Competitive</h3>{" "}
          <img alt="separator_2" src={require("../assets/img/separator.svg")} />
          <h3 className="text_s46 bold_text blue">
            environment for your sales team.
          </h3>
          <h5 className="text_s24 regular_text grey">
            Huntease is a platform centered around{" "}
            <span className="blue">gamification</span> and teamwork which
            creates a healthy competitive environment for SDR teams to boost
            their productivity and acquire more clients while having fun.
          </h5>
        </div>
        <img
          alt="ilust_2"
          src={require("../assets/illustrations/ilust_5.svg")}
        />
      </div>
    </div>
  );
};

export default BlocFive;