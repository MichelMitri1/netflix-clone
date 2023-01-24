import React from "react";
import NavbarSetup from "../components/NavbarSetup";
import setupStyles from "../styles/Setup.module.css";
import netflixStep1 from "../components/assets/netflix-step-1.png";
import FooterSetup from "../components/FooterSetup";
import { NextRouter, useRouter } from "next/router";

function SetupOne() {
  const router: NextRouter = useRouter();

  return (
    <div className={setupStyles.setup__container}>
      <NavbarSetup />
      <div className={setupStyles.setup__row}>
        <figure className={setupStyles.setup__imgWrapper}>
          <img src={netflixStep1.src} className={setupStyles.setup__img} />
        </figure>
        <h1 className={setupStyles.setup__header}>
          Finish setting up your account
        </h1>
        <p className={setupStyles.setup__description}>
          Netflix is personalized for you. Create a password to watch on any
          device at any time.
        </p>
        <button
          className={setupStyles.setup__nextButton}
          onClick={() => router.push("/setupPass")}
        >
          Next
        </button>
      </div>
      <FooterSetup />
    </div>
  );
}

export default SetupOne;
