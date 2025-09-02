import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        Hi, I’m Caliph Adamu a passionate and results-driven full-stack developer with a strong foundation in both frontend and backend development. I specialize in creating seamless, scalable, and user-friendly web solutions that bring ideas to life and solve real-world problems.
From building visually appealing eCommerce platforms to crafting powerful company tools like complaint management systems and leave request applications, I aim to deliver digital products that are both functional and engaging.
With a keen eye for design, a strong grasp of modern development frameworks, and a commitment to clean, efficient code, I’m here to help businesses scale, streamline, and stand out.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
