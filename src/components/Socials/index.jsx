import React from "react";
import styles from "./Socials.module.scss";

const Socials = () => {
  const socialsInfo = [
    { imgUrl: "icons/twitter.svg", alt: "twitter" },
    { imgUrl: "icons/instagram.svg", alt: "instagram" },
    { imgUrl: "icons/facebook.svg", alt: "facebook" },
  ];
  return (
    <div className={styles.socials}>
      {socialsInfo.map((social) => (
        <a href="#" key={social.alt}>
          <img src={social.imgUrl} alt={social.alt} />
        </a>
      ))}
    </div>
  );
};

export default Socials;
