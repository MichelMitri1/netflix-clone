import setupTwoStyles from "../styles/SetupTwo.module.css";
import FooterSetup from "../components/FooterSetup";
import NavbarSetup from "../components/NavbarSetup";
import { NextRouter, useRouter } from "next/router";
import CheckIcon from "@mui/icons-material/Check";
import React from "react";

function SetupTwo() {
  const router: NextRouter = useRouter();

  return (
    <div className={setupTwoStyles.setupTwo__container}>
      <NavbarSetup />
      <div className={setupTwoStyles.setupTwo__row}>
        <div className={setupTwoStyles.setupTwo__checkWrapper}>
          <div className={setupTwoStyles.setupTwo__check}>
            <CheckIcon
              style={{
                color: "#e50914",
                fontWeight: "bolder",
              }}
            />
          </div>
        </div>
        <p className={setupTwoStyles.setupTwo__stepsWrapper}>
          STEP <span className={setupTwoStyles.setupTwo__steps}>2</span> OF{" "}
          <span className={setupTwoStyles.setupTwo__steps}>3</span>
        </p>
        <h1 className={setupTwoStyles.setupTwo__header}>Choose your plan.</h1>

        <div className={setupTwoStyles.setupTwo__plansContainer}>
          <div className={setupTwoStyles.setupTwo__plansWrapper}>
            <CheckIcon
              style={{
                color: "#e50914",
                fontSize: "30px",
              }}
            />
            <p className={setupTwoStyles.setupTwo__plan}>
              No commitments, cancel anytime.
            </p>
          </div>
          <div className={setupTwoStyles.setupTwo__plansWrapper}>
            <CheckIcon
              style={{
                color: "#e50914",
                fontSize: "30px",
              }}
            />
            <p className={setupTwoStyles.setupTwo__plan}>
              Everything on Netflix for one low price.
            </p>
          </div>
          <div className={setupTwoStyles.setupTwo__plansWrapper}>
            <CheckIcon
              style={{
                color: "#e50914",
                fontSize: "30px",
              }}
            />
            <p className={setupTwoStyles.setupTwo__plan}>
              Unlimited viewing on all your devices.
            </p>
          </div>
        </div>
        <button
          className={setupTwoStyles.setupTwo__nextButton}
          onClick={() => router.push("/planform")}
        >
          Next
        </button>
      </div>
      <FooterSetup />
    </div>
  );
}

export default SetupTwo;

