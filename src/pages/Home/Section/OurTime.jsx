import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import H2 from "./../../../components/layout/H2"

function CardTime({ src, name, occupation }) {
	return (
		<Col md={3}>
			<Card className="card">
				<Card.Img
					variant="top"
					src={src}
					className="card-img rounded-circle"
				/>
				<Card.Body>
					<Card.Title className="card-title">{name}</Card.Title>
					<Card.Text className="card-text">{occupation}</Card.Text>
				</Card.Body>
			</Card>
		</Col>
	);
}

function OurTime() {
	return (
		<Container className="my-5 time">
			<H2 text="Conheça nosso time"></H2>

			<Row className="justify-content-between mt-5">
				<CardTime
					src="./src/assets/images/man.jpg"
					name="Márcio André"
					occupation="Gestor de Vendas"
				/>
				<CardTime
					src="./src/assets/images/woman.jpg"
					name="Ana Maria"
					occupation="Contabilista"
				/>
				<CardTime
					src="./src/assets/images/man1.jpg"
					name="Cristiano Sousa"
					occupation="Gestor de Marketing"
				/>
			</Row>
		</Container>
	);
}

export default OurTime