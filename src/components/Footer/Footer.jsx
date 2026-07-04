import blueskyIcon from "../../assets/icons/icon-bluesky.svg";
import tiktokIcon from "../../assets/icons/icon-tiktok.svg";
import instagramIcon from "../../assets/icons/icon-instagram.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__description">Made with ❤️ and 🥑</p>

        <div className="footer__socials">
          <a href="https://www.tiktok.com/" target="_blank">
            <img src={tiktokIcon} alt="TikTok" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://bsky.app/" target="_blank">
            <img src={blueskyIcon} alt="Bluesky" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
