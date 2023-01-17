import React from "react";
import footersetupStyles from "../styles/FooterSetup.module.css";

function FooterSetup() {
  return (
    <footer className={footersetupStyles.footerSetup__container}>
      <div className={footersetupStyles.footerSetup__row}>
        <a href="/" className={footersetupStyles.footerSetup__link}>
          Questions? Contact us.
        </a>
        <div className={footersetupStyles.footerSetup__linksWrapper}>
          <div className={footersetupStyles.footerSetup__rowOne}>
            <a href="/" className={footersetupStyles.footerSetup__link}>
              FAQ
            </a>
            <a href="/" className={footersetupStyles.footerSetup__link}>
              Privacy
            </a>
          </div>
          <div className={footersetupStyles.footerSetup__rowTwo}>
            <a href="/" className={footersetupStyles.footerSetup__link}>
              Help Center
            </a>
            <a href="/" className={footersetupStyles.footerSetup__link}>
              Cookie Preferences
            </a>
          </div>
          <div className={footersetupStyles.footerSetup__rowThree}>
            <a href="/" className={footersetupStyles.footerSetup__link}>
              Netflix Shop
            </a>
            <a href="/" className={footersetupStyles.footerSetup__link}>
              Corporate Information
            </a>
          </div>
          <div className={footersetupStyles.footerSetup__rowFour}>
            <a href="/" className={footersetupStyles.footerSetup__link}>
              Terms of use
            </a>
          </div>
        </div>
        <select id={footersetupStyles.footerSetup__selectLanguage}>
          <option
            className={footersetupStyles.footerSetup__languageOption}
            value="english"
          >
            English
          </option>
          <option
            className={footersetupStyles.footerSetup__languageOption}
            value="arabic"
          >
            العربي
          </option>
        </select>
      </div>
    </footer>
  );
}

export default FooterSetup;
