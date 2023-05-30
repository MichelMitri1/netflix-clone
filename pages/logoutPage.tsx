import netflixLogo from "../components/assets/netflix logo.png";
import logoutpageStyles from "../styles/LogoutPage.module.css";
import { useRouter, NextRouter } from "next/router";
import { auth } from "../components/firebase.js";
import React, { Dispatch, SetStateAction, useState } from "react";
import { signOut } from "firebase/auth";
import Link from "next/link";

function LogoutPage() {
  const router: NextRouter = useRouter();
  const [time, setTime]: [number, Dispatch<SetStateAction<number>>] =
    useState(30);

  function goBack() {
    signOut(auth);
    router.push("/");
  }

  setTimeout(() => {
    signOut(auth);
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
            Just so you know, you don&apos;t always need to sign out of Netlfix.
            It&apos;s only necessary if you&apos;re on a shared or public
            computer.
          </p>
          <p
            style={{
              opacity: "0.9",
              fontSize: "18px",
            }}
          >
            You&apos;ll be directed to Netflix.com in {time} seconds.
          </p>
          <button
            className={logoutpageStyles.logoutpage__goNowButton}
            onClick={() => goBack()}
          >
            Go Now
          </button>
        </div>
      </div>
      <footer className={logoutpageStyles.logoutpage__footerContainer}>
        <div className={logoutpageStyles.logoutpage__footerRow}>
          <Link href="/">Questions? Contact us.</Link>
          <div className={logoutpageStyles.logoutpage__linksWrapper}>
            <div className={logoutpageStyles.logoutpage__footerLinks}>
              <Link href="/">FAQ</Link>
              <Link href="/">Cookie Preferences</Link>
            </div>
            <div className={logoutpageStyles.logoutpage__footerLinks}>
              <Link href="/">Help Center</Link>
              <Link href="/">Corporate Information</Link>
            </div>
            <div className={logoutpageStyles.logoutpage__footerLinks}>
              <Link href="/">Terms of use</Link>
            </div>
            <div className={logoutpageStyles.logoutpage__footerLinks}>
              <Link href="/">Privacy</Link>
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
