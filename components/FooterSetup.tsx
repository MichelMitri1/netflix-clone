import React from "react";
import footersetupStyles from "../styles/FooterSetup.module.css";
import Link from "next/link";

function FooterSetup() {
  return (
    <footer className={footersetupStyles.footerSetup__container}>
      <div className={footersetupStyles.footerSetup__row}>
        <Link href="/" className={footersetupStyles.footerSetup__link}>
          Questions? Contact us.
        </Link>
        <div className={footersetupStyles.footerSetup__linksWrapper}>
          <div className={footersetupStyles.footerSetup__rowOne}>
            <Link href="/" className={footersetupStyles.footerSetup__link}>
              FAQ
            </Link>
            <Link href="/" className={footersetupStyles.footerSetup__link}>
              Privacy
            </Link>
          </div>
          <div className={footersetupStyles.footerSetup__rowTwo}>
            <Link href="/" className={footersetupStyles.footerSetup__link}>
              Help Center
            </Link>
            <Link href="/" className={footersetupStyles.footerSetup__link}>
              Cookie Preferences
            </Link>
          </div>
          <div className={footersetupStyles.footerSetup__rowThree}>
            <Link href="/" className={footersetupStyles.footerSetup__link}>
              Netflix Shop
            </Link>
            <Link href="/" className={footersetupStyles.footerSetup__link}>
              Corporate Information
            </Link>
          </div>
          <div className={footersetupStyles.footerSetup__rowFour}>
            <Link href="/" className={footersetupStyles.footerSetup__link}>
              Terms of use
            </Link>
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
