import navbarSetupStyles from "../styles/NavbarSetup.module.css";
import netflixLogo from "../components/assets/netflix logo.png";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../components/firebase.js";
import React, { useEffect, useState } from "react";
import { useRouter, NextRouter } from "next/router";
import Link from "next/link";

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
          <Link
            href="/login"
            className={navbarSetupStyles.navbarSetup__signInLink}
          >
            Sign In
          </Link>
        ) : (
          <Link
            href="/logoutPage"
            className={navbarSetupStyles.navbarSetup__signInLink}
          >
            Sign Out
          </Link>
        )}
      </div>
    </nav>
  );
}

export default NavbarSetup;
