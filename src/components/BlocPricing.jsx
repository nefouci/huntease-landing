import React, { useState } from "react";
import Switch from "react-switch";

const BlocPricing = (props) => {
  const [checked, SetChecked] = useState(false);
  const [shown, SetShown] = useState(false);
  return (
    <div className="Bloc-five flex fdc aic jcc" id="pricing_bloc">
      <h3 className="extra_bold_text blue">Simple & transparent pricing</h3>
      <h4 className="semi_bold_text grey">
        Everything is about Freedom, and that is exactly what we are<br></br>{" "}
        giving you, try all the features for Free
      </h4>
      <div className="toggle-container flex fdr aic jcc">
        <h5 className={`extra_bold_text ${checked ? "grey" : "blue"}`}>
          Monthly
        </h5>
        <Switch
          offColor="white"
          onColor="white"
          offHandleColor="#0026BC"
          onHandleColor="#0026BC"
          uncheckedIcon={false}
          checkedIcon={false}
          className="toggle"
          onChange={() => SetChecked(!checked)}
          checked={checked}
        />
        <h5 className={`extra_bold_text ${checked ? "blue" : "grey"}`}>
          Annually
        </h5>
        <img
          className="green-notice"
          alt="checked"
          src={require("../assets/img/green-notice.svg")}
        />
      </div>
      <div className="plans flex fdr jcc">
        {" "}
        {shown && (
          <div
            className="notice flex fdc  jcc"
            onMouseLeave={() => SetShown(false)}
          >
            <div className="flex jcfs fdr">
              <img
                alt="checked"
                src={require("../assets/img/awesome-info-circle.svg")}
              />
              <p className="text_s14 bold_text orange">
                Additional information
              </p>
            </div>
            <h5 className="text_s14 bold_text grey">
              When you consume your free minutes<br></br>
              your plan switched to<b> Pay-as-you-go</b> <br></br>with €0.05 per{" "}
              <b>minute.</b>
            </h5>
          </div>
        )}
        <div className="plan-container plan-container-basic flex fdc aic jcfs">
          <div className="flex fdc">
            <h3 className="extra_bold_text blue">Basic</h3>
            <h4 className="semi_bold_text grey">
              A plan that best fits small business owners that need a push into
              the sales world.
            </h4>
            <h1 className="flex jcfs aic text_s90 blue bold_text">
              <span className="text_s60">€</span>29
              <span className="text_s20">.99</span>
            </h1>{" "}
            <h5 className="t regular_text grey">Per user/monthly</h5>
            <div className="plan-features flex fdc jcfs">
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p className="regular_text dark">3 user minimum</p>
              </div>
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p className="regular_text dark">
                  240 Minutes of outgoing calls for free
                </p>
              </div>
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p className="regular_text dark">Personal dashboard</p>
              </div>
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p className="regular_text dark">Voice emotional analysis</p>
              </div>
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p className="regular_text dark">
                  Conversional Guide (unlimited)
                </p>
              </div>
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p className=" regular_text dark">Hubspot Integration</p>
              </div>
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p className=" regular_text dark">
                  Additional future Integrations
                </p>
              </div>
            </div>
          </div>
          <div
            className="button-demo flex fdr jcc aic semi_bold_text white"
            onClick={props.tooglePopup}
          >
            Request a demo
            <div className="inner-button flex aic jcc">
              {" "}
              <img
                alt="arrow"
                src={require("../assets/img/awesome-arrow-right-white.svg")}
              />
            </div>{" "}
          </div>
        </div>
        <div className="plan-container flex fdc aic jcfs">
          <div className="red_notice extra_bold_text flex aic jcc">
            <p>LAUNCHING PRICE</p>
          </div>

          <div className="flex fdc">
            <h3 className="extra_bold_text blue">Growth</h3>
            <h4 className="semi_bold_text grey">
              Increase your sales revenue with an easy transition to Huntease
              and a plan that best fits your workflow.
            </h4>
            <h1 className="flex jcfs aic text_s90 blue bold_text">
              <span className="text_s60">€</span>39
              <span className="text_s20">.99</span>
            </h1>{" "}
            <h5 className="t regular_text grey">Per user/monthly</h5>
            <div className="plan-features flex fdc jcfs">
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p className="regular_text dark">3 user minimum</p>
              </div>
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p className="regular_text dark">
                  240 Minutes of outgoing calls for free
                </p>
                <span onMouseEnter={() => SetShown(true)}>
                  {" "}
                  <img
                    className="notice-warning"
                    alt="checked"
                    src={require("../assets/img/awesome-info-circle.svg")}
                  />
                </span>
              </div>
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p className="regular_text dark">Personal dashboard</p>
              </div>
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p className="regular_text dark">Voice emotional analysis</p>
              </div>
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p className="regular_text dark">
                  Conversional Guide (unlimited)
                </p>
              </div>
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p className=" regular_text dark">Hubspot Integration</p>
              </div>
              <div className="plan-item flex fdr jcfs">
                <img
                  alt="checked"
                  src={require("../assets/img/awesome-check.svg")}
                />
                <p className=" regular_text dark">
                  Additional future Integrations
                </p>
              </div>
            </div>
          </div>
          <div
            className="button-demo flex fdr jcc aic text_s18 bold_text white"
            onClick={props.tooglePopup}
          >
            Request a demo{" "}
            <div className="inner-button flex aic jcc">
              {" "}
              <img
                alt="arrow"
                src={require("../assets/img/awesome-arrow-right-white.svg")}
              />
            </div>
          </div>
        </div>
        <div className="plan-container plan-container-basic partner flex fdc aic jcfs">
          <div className="flex fdc">
            <h3 className="extra_bold_text blue">Partner</h3>
            <h4 className=" semi_bold_text grey">
              For those who are interested to work with Huntease on a larger
              scale, such as affiliate programs and other collaborations of that
              type.
            </h4>
          </div>
          <div
            className="button-demo flex fdr jcc aic  text_s18 bold_text white"
            onClick={props.tooglePopup}
          >
            Contact us
            <div className="inner-button flex aic jcc">
              {" "}
              <img
                alt="arrow"
                src={require("../assets/img/awesome-arrow-right-white.svg")}
              />
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlocPricing;
