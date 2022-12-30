import { useState } from "react";
import Header from "./../../components/layout/header/index";
import ControlledCarousel from "./../../components/layout/carousel/index";
import "./index.css";
import WhoWeAre from "./Section/WhoWeAre";
import OurTime from "./Section/OurTime";
import Products from "./Section/Products";
import Cards from "../../components/layout/Cards-Product";
import Footer from "../../components/layout/footer";
import Cart from "../../components/layout/Cart";
import products from "../../data/data-products";

function ListCard({ handleClick, cart }) {
	return (
		<section className="container p-lg-0">
			<div className="row">
				{products.map((item) => (
					<Cards
						key={item.id}
						item={item}
						handleClick={handleClick}
					/>
				))}
			</div>
		</section>
	);
}

function Home() {
	const [show, setShow] = useState(true);
	const [cart, setCart] = useState([]);

	const handleClick = (item) => {
		if (cart.indexOf(item) !== -1) return;
		setCart([...cart, item]);
	};
	
	localStorage.setItem('carrinho', JSON.stringify(cart));
	let data = JSON.parse(localStorage.getItem('carrinho' ));


	const handleChange = (item, d) => {
		const ind = data.indexOf(item);
		const arr = data;
		arr[ind].amount += d;

		if (arr.amount === 1) arr[ind].amount = 1;
		setCart([...arr]);
	};

	return (
		<div>
			<Header />
			<ControlledCarousel />
			<WhoWeAre />
			<OurTime />
			<Products />
			<ListCard handleClick={handleClick} />
			{show ? (
			<p></p>
			) : (
				<Cart
					cart={data}
					setCart={setCart}
					handleChange={handleChange}
				/>
			)}
			<Footer setShow={setShow} size={cart.length} />
		</div>
	);
}

export default Home;
