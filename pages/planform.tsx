import React from "react";
import FooterSetup from "../components/FooterSetup";
import NavbarSetup from "../components/NavbarSetup";
import CheckIcon from "@mui/icons-material/Check";
import planformStyles from "../styles/PlanForm.module.css";
import Link from "next/link";

function planform() {
  return (
    <div className={planformStyles.planform__container}>
      <NavbarSetup />
      <div className={planformStyles.planform__row}>
        <div className={planformStyles.planform__wrapper}>
          <p className={planformStyles.planform__stepsWrapper}>
            STEP <span className={planformStyles.planform__steps}>2</span> OF{" "}
            <span className={planformStyles.planform__steps}>3</span>
          </p>
          <h1 className={planformStyles.planform__header}>
            Choose the plan that's right for you
          </h1>
          <div className={planformStyles.planform__planWrapper}>
            <CheckIcon
              style={{
                color: "#e50914",
                fontWeight: "bolder",
                fontSize: "28px",
              }}
            />
            <p className={planformStyles.planform__plan}>
              Watch all you want. Ad-free.
            </p>
          </div>
          <div className={planformStyles.planform__planWrapper}>
            <CheckIcon
              style={{
                color: "#e50914",
                fontWeight: "bolder",
                fontSize: "28px",
              }}
            />
            <p className={planformStyles.planform__plan}>
              Recommendations just for you.
            </p>
          </div>
          <div className={planformStyles.planform__planWrapper}>
            <CheckIcon
              style={{
                color: "#e50914",
                fontWeight: "bolder",
                fontSize: "28px",
              }}
            />
            <p className={planformStyles.planform__plan}>
              Change or cancel your plan anytime.
            </p>
          </div>
        </div>
        <div className={planformStyles.planform__subscriptionsWrapper}>
          <div className={planformStyles.planform__subscriptionsTypes}>
            <span className={planformStyles.planform__subscription}>Basic</span>
            <span className={planformStyles.planform__subscription}>
              Standard
            </span>
            <span className={planformStyles.planform__subscription}>
              Premium
            </span>
          </div>
          <div className={planformStyles.planform__monthlyPriceContainer}>
            <div className={planformStyles.planform__monthlyPriceRow}>
              <p className={planformStyles.planform__monthlyTitle}>
                Monthly price
              </p>
              <div className={planformStyles.planform__monthlyPriceWrapper}>
                <p className={planformStyles.planform__monthlyPrice}>USD7.99</p>
                <p className={planformStyles.planform__monthlyPrice}>USD9.99</p>
                <p className={planformStyles.planform__monthlyPrice}>
                  USD11.99
                </p>
              </div>
            </div>
            <div className={planformStyles.planform__monthlyPriceRow}>
              <p className={planformStyles.planform__monthlyTitle}>
                Video quality
              </p>
              <div className={planformStyles.planform__monthlyPriceWrapper}>
                <p className={planformStyles.planform__monthlyPrice}>Good</p>
                <p className={planformStyles.planform__monthlyPrice}>Better</p>
                <p className={planformStyles.planform__monthlyPrice}>Best</p>
              </div>
            </div>
            <div className={planformStyles.planform__monthlyPriceRow}>
              <p className={planformStyles.planform__monthlyTitle}>
                Resolutiom
              </p>
              <div className={planformStyles.planform__monthlyPriceWrapper}>
                <p className={planformStyles.planform__monthlyPrice}>720p</p>
                <p className={planformStyles.planform__monthlyPrice}>1080p</p>
                <p className={planformStyles.planform__monthlyPrice}>4K+HDR</p>
              </div>
            </div>
            <div className={planformStyles.planform__monthlyPriceRow}>
              <p className={planformStyles.planform__monthlyTitle}>
                Watch on your TV, computer, mobile phone and tablet
              </p>
              <div className={planformStyles.planform__monthlyPriceWrapper}>
                <p className={planformStyles.planform__monthlyPrice}>
                  <CheckIcon
                    style={{
                      fontWeight: "bolder",
                      fontSize: "28px",
                    }}
                  />
                </p>
                <p className={planformStyles.planform__monthlyPrice}>
                  {" "}
                  <CheckIcon
                    style={{
                      fontWeight: "bolder",
                      fontSize: "28px",
                    }}
                  />
                </p>
                <p className={planformStyles.planform__monthlyPrice}>
                  <CheckIcon
                    style={{
                      fontWeight: "bolder",
                      fontSize: "28px",
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
          <p
            style={{
              fontSize: "13px",
              opacity: "0.8",
              maxWidth: "750px",
            }}
          >
            HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
            subject to your internet services and device capabilities. Not all
            content is available in all resolutions. See our{" "}
            <Link href="/">Terms of use</Link> for more detail.
          </p>
          <br />
          <p
            style={{
              fontSize: "13px",
              opacity: "0.8",
              maxWidth: "750px",
            }}
          >
            Only people who live with you may use your account. Watch on 4
            different devices at the same time with Premium, 2 with Standard,
            and 1 with Basic
          </p>
        </div>
      </div>
      <div className={planformStyles.planform__nextButtonWrapper}>
        <button className={planformStyles.planform__nextButton}>Next</button>
      </div>
      <FooterSetup />
    </div>
  );
}

export default planform;
