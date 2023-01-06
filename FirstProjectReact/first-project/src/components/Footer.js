import { Container, Navbar } from "react-bootstrap";

const Footer = (props) => {
  return (
    <Navbar className="bg-dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">
          Coding With Me
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as:{" "}
            <a href="https://personal-site-abdillahmufki.netlify.app/">
              Abdillah Mufki
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Footer;
