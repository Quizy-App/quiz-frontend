import Container from "./Container";

const Navbar = () => {
  return (
    <nav className="w-full py-2 bg-primary-500">
      <Container>
        <a href="#" className="text-light-500">
          Quiz App
        </a>
      </Container>
    </nav>
  );
};

export default Navbar;
