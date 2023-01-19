import React, { MutableRefObject, useRef, useState } from "react";
import loginpageStyles from "../styles/LoginPage.module.css";
import netflixLogo from "../components/assets/netflix logo.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../components/firebase.js";
import { useRouter } from "next/router";
import Link from "next/link";

function Login() {
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
      <figure
        className={loginpageStyles.loginpage__logoWrapper}
        onClick={() => router.push("/")}
      >
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
          <Link href="/" className={loginpageStyles.loginpage__needHelp}>
            Need help?
          </Link>
        </div>
        <p>
          New to Netflix?{" "}
          <Link href="/" className={loginpageStyles.loginpage__signupLink}>
            Sign up now.
          </Link>
        </p>
        <p>
          This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot.{" "}
          <Link href="/" className={loginpageStyles.loginpage__learnMore}>
            Learn more.
          </Link>
        </p>
      </div>
      <footer className={loginpageStyles.loginpage__footerContainer}>
        <div className={loginpageStyles.loginpage__footerRow}>
          <Link href="/">Questions? Contact us.</Link>
          <div className={loginpageStyles.loginpage__linksWrapper}>
            <div className={loginpageStyles.loginpage__footerLinks}>
              <Link href="/">FAQ</Link>
              <Link href="/">Cookie Preferences</Link>
            </div>
            <div className={loginpageStyles.loginpage__footerLinks}>
              <Link href="/">Help Center</Link>
              <Link href="/">Corporate Information</Link>
            </div>
            <div className={loginpageStyles.loginpage__footerLinks}>
              <Link href="/">Terms of use</Link>
            </div>
            <div className={loginpageStyles.loginpage__footerLinks}>
              <Link href="/">Privacy</Link>
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

export default Login;
