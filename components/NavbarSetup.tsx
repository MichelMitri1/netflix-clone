import navbarSetupStyles from "../styles/NavbarSetup.module.css";
import netflixLogo from "../components/assets/netflix logo.png";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../components/firebase.js";
import React, { useEffect, useState } from "react";
import { useRouter, NextRouter } from "next/router";

function NavbarSetup() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return (
    <nav className={navbarSetupStyles.navbarSetup__container}>
      <div className={navbarSetupStyles.navbarSetup__row}>
        <figure
          className={navbarSetupStyles.navbarSetup__logoWrapper}
          onClick={() => router.push("/")}
        >
          <img
            src={netflixLogo.src}
            alt=""
            className={navbarSetupStyles.navbarSetup__logo}
          />
        </figure>
        {!user ? (
          <a
            href="/login"
            className={navbarSetupStyles.navbarSetup__signInLink}
          >
            Sign In
          </a>
        ) : (
          <a
            href="/logoutPage"
            className={navbarSetupStyles.navbarSetup__signInLink}
          >
            Sign Out
          </a>
        )}
      </div>
    </nav>
  );
}

export default NavbarSetup;
