import Container from "./Container";
import { Icon } from "@iconify/react";
const Navbar = () => {
  return (
    <nav className="w-full py-3 bg-primary-500">
      <Container>
        <a
          href="/student/auth"
          className="text-light-500 hover:text-neutral-50 flex items-center "
        >
          <Icon icon={"arcticons:quizlet"} fontSize={35} />
          <span className="tracking-widest font-thin ml-[0.1rem] md:block hidden">
            {" "}
            uizzer
          </span>
        </a>
      </Container>
    </nav>
  );
};

export default Navbar;
