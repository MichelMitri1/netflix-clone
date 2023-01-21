import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import homepageStyles from "../styles/HomePage.module.css";
import { onAuthStateChanged, User } from "firebase/auth";
import { NextRouter, useRouter } from "next/router";
import { auth } from "../components/firebase.js";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./features/user";
import Questions from "./Questions";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Card1 from "./Card1";
import Card4 from "./Card4";
import Card2 from "./Card2";
import Card3 from "./Card3";
import React, {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

function HomePage() {
  const emailRef = useRef("") as unknown as MutableRefObject<HTMLInputElement>;
  const [loading, setLoading]: [boolean, Dispatch<SetStateAction<boolean>>] =
  useState(false);
  const userInfo = useSelector((state: any) => state.user.value);
  const dispatch = useDispatch();
  const router: NextRouter = useRouter();
  const [user, setUser]: any = useState(null);

  function enterEmail(e: React.MouseEvent<HTMLFormElement, MouseEvent>): void {
    e.preventDefault();
    if (!emailRef.current.value) {
      return;
    }
    setLoading(true);
    console.log(emailRef.current.value);
    dispatch(
      login({
        email: emailRef.current.value,
      })
    );
    console.log(userInfo);
    router.push("/setupOne");
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return (
    <div className={homepageStyles.homepage__container}>
      <div className={homepageStyles.homepage__row}>
        <Navbar user={user} />
        <div className={homepageStyles.homepage__wrapper}>
          {!user ? (
            <>
              <h1 className={homepageStyles.homepage__title}>
                Unlimited movies, TV shows, and more.
              </h1>
              <h3 className={homepageStyles.homepage__subtitle}>
                Watch anywhere. Cancel anytime.
              </h3>
              <p className={homepageStyles.homepage__para}>
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
              <form
                className={homepageStyles.homepage__signupWrapper}
                onClick={(e) => enterEmail(e)}
              >
                <input
                  type="email"
                  placeholder="Email address"
                  required
                  className={homepageStyles.homepage__signupInput}
                  ref={emailRef}
                />
                {!loading ? (
                  <button className={homepageStyles.homepage__signupButton}>
                    Get Started <ArrowForwardIosIcon />
                  </button>
                ) : (
                  <button
                    className={homepageStyles.homepage__signupButton}
                    style={{
                      opacity: "0.6",
                    }}
                  >
                    <div
                      className={homepageStyles.homepage__loadingButton}
                    ></div>
                  </button>
                )}
              </form>
            </>
          ) : (
            <div className={homepageStyles.homepage__finishSignup}>
              <p
                style={{
                  fontSize: "24px",
                }}
              >
                Welcome back!
              </p>
              <h1 className={homepageStyles.homepage__title}>
                Unlimited movies, TV shows, and more.
              </h1>
              <h3 className={homepageStyles.homepage__subtitle}>
                Watch anywhere. Cancel anytime.
              </h3>
              <button
                className={homepageStyles.homepage__signupButton}
                onClick={() => router.push("/setupTwo")}
                style={{ width: "250px" }}
              >
                Finish Sign Up <ArrowForwardIosIcon />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className={homepageStyles.homepage__cardsContainer}>
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
      </div>
      <Questions user={user} />
      <Footer />
    </div>
  );
}

export default HomePage;
