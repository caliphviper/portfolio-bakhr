import SingleContactSocial from "./SingleContactSocial";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
       <SingleContactSocial link="https://wa.me/2349020750063" Icon={FaWhatsapp} />
      <SingleContactSocial link="#" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/CYBER-WIZARD17" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/bakhrs_web/?hl=en" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
