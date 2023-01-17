import React, { MutableRefObject, useRef, useState } from "react";
import loginpageStyles from "../styles/LoginPage.module.css";
import netflixLogo from "../components/assets/netflix logo.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../components/firebase.js";
import { useRouter } from "next/router";

function login() {
  const emailRef = useRef("") as unknown as MutableRefObject<HTMLInputElement>;
  const passwordRef = useRef(
    ""
  ) as unknown as MutableRefObject<HTMLInputElement>;
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function loginUser(e: any): Promise<void> {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      router.push("/");
    } catch (error: unknown) {
      setLoading(false);
      alert(error);
      console.log("user is not signed in");
    }
  }

  return (
    <div className={loginpageStyles.loginpage__container}>
      <figure className={loginpageStyles.loginpage__logoWrapper} onClick={() => router.push("/")}>
        <img
          src={netflixLogo.src}
          className={loginpageStyles.loginpage__logo}
        />
      </figure>
      <div className={loginpageStyles.loginpage__row}>
        <form
          className={loginpageStyles.loginpage__info}
          onSubmit={(e) => loginUser(e)}
        >
          <h2 className={loginpageStyles.loginpage__title}>Sign In</h2>
          <input
            type="email"
            placeholder="Email address"
            className={loginpageStyles.loginpage__emailInput}
            ref={emailRef}
          />
          <input
            type="password"
            placeholder="Password"
            className={loginpageStyles.loginpage__passwordInput}
            ref={passwordRef}
          />
          {!loading ? (
            <button className={loginpageStyles.loginpage__signInButton}>
              Sign In
            </button>
          ) : (
            <button
              className={loginpageStyles.loginpage__signInButton}
              style={{
                opacity: "0.8",
                display: "flex",
                justifyContent: "center",
                alightItems: "center",
              }}
            >
              <div className={loginpageStyles.loginpage__loadingButton}></div>
            </button>
          )}
        </form>
        <div className={loginpageStyles.loginpage__optionsWrapper}>
          <div className={loginpageStyles.loginpage__remember}>
            <input type="checkbox" />
            <p>Remember me</p>
          </div>
          <a href="/" className={loginpageStyles.loginpage__needHelp}>
            Need help?
          </a>
        </div>
        <p>
          New to Netflix?{" "}
          <a href="/" className={loginpageStyles.loginpage__signupLink}>
            Sign up now.
          </a>
        </p>
        <p>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <a href="/" className={loginpageStyles.loginpage__learnMore}>
            Learn more.
          </a>
        </p>
      </div>
      <footer className={loginpageStyles.loginpage__footerContainer}>
        <div className={loginpageStyles.loginpage__footerRow}>
          <a href="/">Questions? Contact us.</a>
          <div className={loginpageStyles.loginpage__linksWrapper}>
            <div className={loginpageStyles.loginpage__footerLinks}>
              <a href="">FAQ</a>
              <a href="">Cookie Preferences</a>
            </div>
            <div className={loginpageStyles.loginpage__footerLinks}>
              <a href="">Help Center</a>
              <a href="">Corporate Information</a>
            </div>
            <div className={loginpageStyles.loginpage__footerLinks}>
              <a href="">Terms of use</a>
            </div>
            <div className={loginpageStyles.loginpage__footerLinks}>
              <a href="">Privacy</a>
            </div>
          </div>
          <select id={loginpageStyles.loginpage__languageSelect}>
            <option value="english">English</option>
            <option value="arabic">العربي</option>
          </select>
        </div>
      </footer>
    </div>
  );
}

export default login;
