import React from "react";
import styles from './ContactUs.module.scss'
import SubTitle from "../ui/SubTitle";

const ContactUs = () => {
  return (
    <div className={styles.info}>
      <SubTitle>Contact us</SubTitle>
      <ul>
        <li>
          <img src="icons/pin-alt.svg" alt="" />
          <a
            href="https://www.google.com/maps/place/%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9+%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82+%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9+%D0%90%D0%B7%D0%B8%D0%B8/@42.8159616,74.6283202,15z/data=!4m6!3m5!1s0x389eb7c2a6fd1615:0x20d8bf1fd38af6a2!8m2!3d42.8111811!4d74.6272343!16zL20vMGR5dnI0?entry=ttu&g_ep=EgoyMDI0MTExNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
          >
            8558 Green Rd., LA
          </a>
        </li>
        <li>
          <img src="icons/phone.svg" alt="" />
          <a href="tel:+16035550123">+1 (603) 555-0123</a>
        </li>
        <li>
          <img src="icons/clock.svg" alt="" />
          <p>Mon-Sat: 9:00 AM – 23:00 PM</p>
        </li>
      </ul>
    </div>
  );
};

export default ContactUs;
