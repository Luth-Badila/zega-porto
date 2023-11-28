import { useState } from "react";
import { Navbar, NavItem, NavbarToggler, Collapse, NavLink, Nav, NavbarBrand } from "reactstrap";

export const NavbarFixed: React.FC = () => {
  // Collapse isOpen State
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <Navbar fixed="top" dark expand="md">
        <NavbarBrand href="/">Brand</NavbarBrand>
        <NavbarToggler
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#portofolio">Portofolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
