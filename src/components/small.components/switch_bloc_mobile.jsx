import React from "react";

const SwitchBlocMobile = ({ text, picture }) => {
  return (
    <div className="switch-feature-button-mobile flex fdr jcfs aic">
      <div className="circle-inner red flex aic jcc">{picture}</div>
      <h5 className="Text blue text_s18 extra_bold_text">{text}</h5>
    </div>
  );
};

export default SwitchBlocMobile;
