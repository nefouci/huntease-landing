import React, { useState } from "react";
import axios from "axios";
import { Alert } from "reactstrap";
const Popup = (props) => {
  //  const [isOpen, setIsOpen] = useState(false);
  const [email, SetEmail] = useState("");
  const [phone, SetPhone] = useState("");
  const [name, SetName] = useState("");
  const [success, SetSuccess] = useState(false);
  //const toggle = () => setIsOpen(!isOpen);

  const send_mail = async () => {
    if ((email && phone && name) != "") {
      const response = await axios.post(
        "https://huntease-mvp.herokuapp.com/request-demo",
        {
          mail: email,
          phone: phone,
          name: name,
        }
      );
      if ((response.status = 200)) {
        SetSuccess(true);
        setTimeout(props.tooglePopup, 3000);
        console.log("Success !");
      }
    } else {
      alert("Please fill all inputs!");
    }
  };
  return (
    <div className="popup-container flex fdr aic jcc">
      {!success ? (
        <div className="popup flex fdc aic jcc">
          <div className="top_left" />
          <div className="cancel flex aic jcc" onClick={props.tooglePopup}>
            <img
              className="close"
              alt="close"
              src={require("../../assets/img/close-icon.svg")}
            />
          </div>{" "}
          <img
            className="logo"
            alt="logo"
            src={require("../../assets/img/logo-white-retina.svg")}
          />
          <div className="popup-inner-container flex fdc aic jcc">
            <h3 className="semi_bold_text white">
              Interested in growing your sales team today? Send us a request 👇
            </h3>
            <h4 className="semi_bold_text grey">
              We'll contact you as soon as we receive your request.
            </h4>
            <div className="flex fdc aifs">
              <label className="text_s16 regular_text white">First name</label>
              <input
                className="text_s16 regular_text grey"
                placeholder="Joe Doe"
                onChange={(e) => SetName(e.target.value)}
              />
              <label className="text_s16 regular_text white">Work email</label>
              <input
                className="text_s16 regular_text grey"
                placeholder="johndoe@company.com"
                onChange={(e) => SetEmail(e.target.value)}
              />
              <label className="text_s16 regular_text white">
                Phone number
              </label>
              <input
                className="text_s16 regular_text grey"
                placeholder="+1   555 - 555 - 5555 "
                onChange={(e) => SetPhone(e.target.value)}
              />
            </div>
            <div className="button-demo flex fdr jcc aic" onClick={send_mail}>
              Get a free demo
              <img alt="arrow" src={require("../../assets/img/arrow.png")} />
            </div>
            <p className="text_s16 regular_text grey">
              We care about protecting your data. Here’s our{" "}
              <b className="text_s16 bold_text white">Privacy Policy.</b>
            </p>
          </div>
        </div>
      ) : (
        <div className="success_popup flex fdc aic jcc white text_s14 light_text">
          <div className="top_left " />
          <h3 className="semi_bold_text white">
            Thank you for contacting us<br></br> We'll contact you as soon as we
            receive your request
          </h3>
        </div>
      )}
    </div>
  );
};

export default Popup;
