import React, { useState } from "react";
import logoutpageStyles from "../styles/LogoutPage.module.css";
import netflixLogo from "../components/assets/netflix logo.png";
import { useRouter, NextRouter } from "next/router";

function LogoutPage() {
  const router: NextRouter = useRouter();
  const [time, setTime] = useState(30);

  setTimeout(() => {
    router.push("/");
  }, 30000);

  setTimeout(() => {
    setTime(time - 1);
  }, 1000);

  return (
    <div className={logoutpageStyles.logoutpage__container}>
      <div className={logoutpageStyles.logoutpage__row}>
        <nav className={logoutpageStyles.logoutpage__navbar}>
          <figure className={logoutpageStyles.logoutpage__logoWrapper}>
            <img
              src={netflixLogo.src}
              className={logoutpageStyles.logoutpage__logo}
            />
          </figure>
          <button
            className={logoutpageStyles.logoutpage__signInButton}
            onClick={() => router.push("/login")}
          >
            Sign In
          </button>
        </nav>
        <div className={logoutpageStyles.logoutpage__wrapper}>
          <h1
            style={{
              opacity: "0.8",
            }}
          >
            Leaving So Soon?
          </h1>
          <p
            style={{
              opacity: "0.9",
              fontSize: "18px",
            }}
          >
            Just so you know, you don't always need to sign out of Netlfix. It's
            only necessary if you're on a shared or public computer.
          </p>
          <p
            style={{
              opacity: "0.9",
              fontSize: "18px",
            }}
          >
            You'll be directed to Netflix.com in {time} seconds.
          </p>
          <button
            className={logoutpageStyles.logoutpage__goNowButton}
            onClick={() => router.push("/")}
          >
            Go Now
          </button>
        </div>
      </div>
      <footer className={logoutpageStyles.logoutpage__footerContainer}>
        <div className={logoutpageStyles.logoutpage__footerRow}>
          <a href="/">Questions? Contact us.</a>
          <div className={logoutpageStyles.logoutpage__linksWrapper}>
            <div className={logoutpageStyles.logoutpage__footerLinks}>
              <a href="">FAQ</a>
              <a href="">Cookie Preferences</a>
            </div>
            <div className={logoutpageStyles.logoutpage__footerLinks}>
              <a href="">Help Center</a>
              <a href="">Corporate Information</a>
            </div>
            <div className={logoutpageStyles.logoutpage__footerLinks}>
              <a href="">Terms of use</a>
            </div>
            <div className={logoutpageStyles.logoutpage__footerLinks}>
              <a href="">Privacy</a>
            </div>
          </div>
          <select id={logoutpageStyles.logoutpage__languageSelect}>
            <option value="english">English</option>
            <option value="arabic">العربي</option>
          </select>
        </div>
      </footer>
    </div>
  );
}

export default LogoutPage;
