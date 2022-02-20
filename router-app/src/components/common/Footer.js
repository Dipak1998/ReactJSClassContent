import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__item"></div>
      <div className="footer__item">
        Contact Info &#38; Socials
        <ul className="contact__list">
          <li>Phone Number: +1 (703)-203-8101</li>
          <li>Email: mohammad.abdur.rafi.1@gmail.com</li>
          <li>
            Twitter: <a href="twitter.com/MoeRafi"> @MoeRafi</a>
          </li>
          <li>
            Twitch: <a href="twitch.tv/MoeRafi">twitch.tv/MoeRafi</a>
          </li>
          <li>
            Instagram: <a href="instagram.com/rafi99422">@rafi99422</a>
          </li>
          <li>
            TikTok: <a href="tiktok.com/RoeMafi">@RoeMafi</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;