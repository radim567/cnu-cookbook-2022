import { Navbar, Container, NavbarBrand } from 'reactstrap';

export function Header() {
  return (
    <Navbar color="warning">
      <Container>
        <NavbarBrand className="font-link ms-3" href="/">
          COOKBOOK
        </NavbarBrand>
      </Container>
    </Navbar>
  );
}
