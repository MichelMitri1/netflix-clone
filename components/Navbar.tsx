import netflixLogo from "../components/assets/netflix logo.png";
import { signOut } from "firebase/auth";
import navbarStyles from "../styles/Navbar.module.css";
import { NextRouter, useRouter } from "next/router";
import React from "react";
import { auth } from "../components/firebase.js";

function Navbar({ user }: any) {
  const router: NextRouter = useRouter();

  function logoutUser(): void {
    console.log(user);
    signOut(auth);
    router.push("/logoutPage");
  }

  return (
    <nav className={navbarStyles.navbar__container}>
      <figure className={navbarStyles.navbar__logoWrapper}>
        <img
          src={netflixLogo.src}
          alt=""
          className={navbarStyles.navbar__logo}
        />
      </figure>
      <div className={navbarStyles.navbar__linksWrapper}>
        <select className={navbarStyles.navbar__languageSelect}>
          <option className={navbarStyles.homepage__option} value="english">
            English
          </option>
          <option className={navbarStyles.homepage__option} value="arabic">
            العربي
          </option>
        </select>
        {!user ? (
          <button
            className={navbarStyles.navbar__signInButton}
            onClick={() => router.push("/login")}
          >
            Sign In
          </button>
        ) : (
          <button
            className={navbarStyles.navbar__signInButton}
            onClick={() => logoutUser()}
            style={{
              padding: "10px 10px",
            }}
          >
            Sign Out
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
