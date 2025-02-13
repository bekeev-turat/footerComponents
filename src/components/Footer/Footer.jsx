import React from "react";
import styles from "./Footer.module.scss";
import Socials from "../Socials";
import ContactUs from "../ContactUs";
import SectionTitle from "../ui/SectionTitle";

const Footer = () => {
  return (
    <footer id="contact" className={styles.root}>
      <div className={styles.offer}>
        <SectionTitle>
          <span>Sip, Savor, Smile.</span> <br />
          It’s coffee time!
        </SectionTitle>
        <Socials />
      </div>
      <ContactUs />
    </footer>
  );
};

export default Footer;
