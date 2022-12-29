import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./index.css";

function Header() {
	return (
		<Navbar bg="light" expand="lg" className="d-flex">
			<Container>
				<Navbar.Brand href="#">Online Shop</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="mx-auto my-2 my-lg-0"
						style={{ maxHeight: "100px" }}
						navbarScroll
					>
						<Nav.Link href="#">Inicio</Nav.Link>
						<Nav.Link href="#">Quem somos?</Nav.Link>
						<Nav.Link href="#">Nosso time</Nav.Link>
						<Nav.Link href="#">Produtos</Nav.Link>
					</Nav>
					<Form className="d-flex">
						<Form.Control
							type="search"
							placeholder="Pesquisar"
							className="me-2"
							aria-label="Search"
						/>
						<Button className="btn my-btn-primary">
							Pesquisar
						</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
