import React from "react";
import footerStyles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={footerStyles.footer__container}>
      <a href="/" className={footerStyles.footer__linkQuestion}>
        Questions? Contact us.
      </a>
      <div className={footerStyles.footer__linkWrapper}>
        <div className={footerStyles.footer__linksColumn1}>
          <a href="/" className={footerStyles.footer__link}>
            FAQ
          </a>
          <a href="/" className={footerStyles.footer__link}>
            Investor Relations
          </a>
          <a href="/" className={footerStyles.footer__link}>
            Privacy
          </a>
          <a href="/" className={footerStyles.footer__link}>
            Speed Test
          </a>
        </div>
        <div className={footerStyles.footer__linksColumn2}>
          <a href="/" className={footerStyles.footer__link}>
            Help Center
          </a>
          <a href="/" className={footerStyles.footer__link}>
            Jobs
          </a>
          <a href="/" className={footerStyles.footer__link}>
            Cookie Preferences
          </a>
          <a href="/" className={footerStyles.footer__link}>
            Legal Notices
          </a>
        </div>
        <div className={footerStyles.footer__linksColumn3}>
          <a href="/" className={footerStyles.footer__link}>
            Account
          </a>
          <a href="/" className={footerStyles.footer__link}>
            Ways to Watch
          </a>
          <a href="/" className={footerStyles.footer__link}>
            Corporate Information
          </a>
          <a href="/" className={footerStyles.footer__link}>
            Only on Netflix
          </a>
        </div>
        <div className={footerStyles.footer__linksColumn4}>
          <a href="/" className={footerStyles.footer__link}>
            Media Center
          </a>
          <a href="/" className={footerStyles.footer__link}>
            Terms of Use
          </a>
          <a href="/" className={footerStyles.footer__link}>
            Contact us
          </a>
        </div>
      </div>
      <select id={footerStyles.footer__selectLanguage}>
        <option className={footerStyles.footer__languageOption} value="english">
          English
        </option>
        <option className={footerStyles.footer__languageOption} value="arabic">
          العربي
        </option>
      </select>
      <p
        style={{
          color: "grey",
        }}
      >
        Netflix Lebanon
      </p>
    </footer>
  );
}

export default Footer;
