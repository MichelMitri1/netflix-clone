import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import setupPassStyles from "../styles/SetupPass.module.css";
import { collection, addDoc } from "firebase/firestore";
import { NextRouter, useRouter } from "next/router";
import NavbarSetup from "../components/NavbarSetup";
import FooterSetup from "../components/FooterSetup";
import { auth, db } from "../components/firebase";
import { useSelector } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";

function SetupPass() {
  const emailRef = useRef() as unknown as MutableRefObject<HTMLInputElement>;
  const passwordRef = useRef() as unknown as MutableRefObject<HTMLInputElement>;
  const router: NextRouter = useRouter();
  const user: User | null = auth.currentUser;
  const userInfo = useSelector((state: any) => state.user.value);
  const [loginError, setLoginError] = useState("");
  const [login, setLogin] = useState(false);

  async function rateMovie(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!emailRef.current.value || !passwordRef.current.value) {
      setLoginError(
        "Please enter a valid email address and password to procceed."
      );
      return;
    }
    setLogin(true);
    try {
      await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );

      await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      router.push("/setupTwo");
      if (user) {
        await addDoc(collection(db, "userInfo"), {
          email: emailRef.current.value,
          uid: user.uid,
        });
      }
    } catch (error: any) {
      if (error) {
        // console.log(error.code);
        setLoginError(error.message);
        setLogin(false);
      } else {
        router.push("/setupTwo");
      }
    }
  }

  useEffect(() => {
    if (userInfo.email !== "") {
      emailRef.current.value = userInfo.email;
    }
  }, []);

  return (
    <div className={setupPassStyles.setupPass__container}>
      <NavbarSetup />
      <form action="" onSubmit={(e) => rateMovie(e)}>
        <div className={setupPassStyles.setupPass__wrapper}>
          <p>
            STEP <span className={setupPassStyles.setupPass__steps}>1</span> OF{" "}
            <span className={setupPassStyles.setupPass__steps}>3</span>
          </p>
          <h1 className={setupPassStyles.setupPass__header}>
            Create a password to start your membership
          </h1>
          <p
            style={{
              fontSize: "18px",
            }}
          >
            Just a few more steps and you&apos;re done!
          </p>
          <p
            style={{
              fontSize: "18px",
            }}
          >
            We hate papwerwork, too.
          </p>
          <p
            style={{
              color: "#ffa00a",
              textAlign: "start",
            }}
          >
            {loginError}
          </p>
          <input
            type="email"
            placeholder="Email"
            className={setupPassStyles.setupPass__emailInput}
            ref={emailRef}
          />
          <input
            type="password"
            placeholder="Add a password"
            className={setupPassStyles.setupPass__passwordInput}
            ref={passwordRef}
          />
          <div className={setupPassStyles.setupPass__specialOffers}>
            <input
              type="checkbox"
              className={setupPassStyles.setupPass__checkbox}
            />
            <p>Please do not email me Netflix special offers.</p>
          </div>
          {!login ? (
            <button className={setupPassStyles.setupPass__nextButton}>
              Next
            </button>
          ) : (
            <button
              className={setupPassStyles.setupPass__nextButton}
              style={{
                opacity: "0.8",
              }}
            >
              <div className={setupPassStyles.setupPass__loadingButton}></div>
            </button>
          )}
        </div>
      </form>
      <FooterSetup />
    </div>
  );
}

export default SetupPass;
