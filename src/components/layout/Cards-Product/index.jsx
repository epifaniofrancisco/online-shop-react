import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./index.css";
import addImage from "/src/assets/icons/add-outline.svg";

function Cards({ item, handleClick }) {
	const { id, title, image, price } = item;

	return (
		<Col md={3}>
			<Card>
				<div className="card-img-top">
					<Card.Img src={image} className="img-fluid" />
				</div>
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Text className="d-flex justify-content-between price-buy">
						<span className="price">{price} $</span>
						<button
							className="btn my-btn-primary"
							onClick={() => handleClick(item)}
						>
							<img
								src={addImage}
								alt="add outline icon"
								className="img-fluid"
							/>
						</button>
					</Card.Text>
				</Card.Body>
			</Card>
		</Col>
	);
}

export default Cards;
