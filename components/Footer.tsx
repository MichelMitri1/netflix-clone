import Link from "next/link";
import React from "react";
import footerStyles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={footerStyles.footer__container}>
      <Link href="/" className={footerStyles.footer__linkQuestion}>
        Questions? Contact us.
      </Link>
      <div className={footerStyles.footer__linkWrapper}>
        <div className={footerStyles.footer__linksColumn1}>
          <Link href="/" className={footerStyles.footer__link}>
            FAQ
          </Link>
          <Link href="/" className={footerStyles.footer__link}>
            Investor Relations
          </Link>
          <Link href="/" className={footerStyles.footer__link}>
            Privacy
          </Link>
          <Link href="/" className={footerStyles.footer__link}>
            Speed Test
          </Link>
        </div>
        <div className={footerStyles.footer__linksColumn2}>
          <Link href="/" className={footerStyles.footer__link}>
            Help Center
          </Link>
          <Link href="/" className={footerStyles.footer__link}>
            Jobs
          </Link>
          <Link href="/" className={footerStyles.footer__link}>
            Cookie Preferences
          </Link>
          <Link href="/" className={footerStyles.footer__link}>
            Legal Notices
          </Link>
        </div>
        <div className={footerStyles.footer__linksColumn3}>
          <Link href="/" className={footerStyles.footer__link}>
            Account
          </Link>
          <Link href="/" className={footerStyles.footer__link}>
            Ways to Watch
          </Link>
          <Link href="/" className={footerStyles.footer__link}>
            Corporate Information
          </Link>
          <Link href="/" className={footerStyles.footer__link}>
            Only on Netflix
          </Link>
        </div>
        <div className={footerStyles.footer__linksColumn4}>
          <Link href="/" className={footerStyles.footer__link}>
            Media Center
          </Link>
          <Link href="/" className={footerStyles.footer__link}>
            Terms of Use
          </Link>
          <Link href="/" className={footerStyles.footer__link}>
            Contact us
          </Link>
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
