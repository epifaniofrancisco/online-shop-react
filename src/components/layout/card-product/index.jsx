import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import './index.css'

function CardProduct({ src, title, price }) {
	return (
		<Card >
			<div className="card-img-top">
                <Card.Img
                    src={src}
                    className="img-fluid"
                    alt="Imagem de capa do jogo fifa 23"
                />
            </div>
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text className="d-flex justify-content-between price-buy">
					<span className="price">{price}</span>
					<a href="#" className="btn my-btn-primary">
						<img
							src="./src/assets/icons/add-outline.svg"
							alt="add outline icon"
							className="img-fluid"
						/>
					</a>
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default CardProduct