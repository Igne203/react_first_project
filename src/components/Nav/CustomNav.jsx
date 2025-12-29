import { useState } from "react";
import Nav from "react-bootstrap/Nav";

function CustomNav() {
  const [link, setLink] = useState('home');

  return (
    <>
      <Nav
        defaultActiveKey="home"
        activeKey={link}
        variant="underline"
        onSelect={setLink}
      >
        <Nav.Item>
          <Nav.Link eventKey="home">Home page</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">About page</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Contact us page</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default CustomNav;
