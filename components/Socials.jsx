import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const social = [
  { icon: <FaGithub />, path: "https://github.com/ajaykumar-br" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/Ajay-Kumar-BR" },
  { icon: <FaYoutube />, path: "/" },
  { icon: <FaTwitter />, path: "/" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {social.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
