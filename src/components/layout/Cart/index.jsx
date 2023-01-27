import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import H2 from "../H2";
import "./index.css";

function Cart({ cart, setCart, handleChange }) {
	const [price, setPrice] = useState(0);

	const handleRemove = (id) => {
		const arr = cart.filter((item) => item.id !== id);
		setCart(arr);
		handlePrice();
	};

	const handlePrice = () => {
		let ans = 0;
		cart.map((item) => (ans += item.amount * item.price));
		setPrice(ans);
	};

	useEffect(() => {
		handlePrice();
	});
	return (
		<article className="container my-5 cart-section">
			<H2 text="Carrinho" />
			<Row>
				{cart.map((item) => (
					<Card className="mt-4 col-md-3 h-25" key={item.id}>
						<div className="card-img-top">
							<Card.Img src={item.image} className="img-fluid" />
						</div>
						<Card.Body>
							<Card.Title>{item.title}</Card.Title>
							<Row className="quantity">
								<button
									onClick={() => handleChange(item, 1)}
									className="more"
								>
									+
								</button>
								<button>{item.amount}</button>
								<button onClick={() => handleChange(item, -1)}>
									-
								</button>
							</Row>
						</Card.Body>
						<Row>
							<Col md={6}>
								<span className="price">{item.price} - $</span>
							</Col>
							<Col md={6}>
								<button
									onClick={() => handleRemove(item.id)}
									className="remove"
								>
									Remover
								</button>
							</Col>
						</Row>
					</Card>
				))}
				<div className="total">
					<span className="total__text">Total = </span>
					<span >{price} $</span>
				</div>

				<button className="btn mt-4 my-btn-primary">Checkout</button>
			</Row>
		</article>
	);
}

export default Cart;
