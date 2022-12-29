import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import './index.css'

function ControlledCarousel() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel activeIndex={index} onSelect={handleSelect}>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="./src/assets/images/play-with-friends.jpg"
					alt="Jogue com amigos"
				/>
				<Carousel.Caption>
					<h5>Jogue com os seus amigos</h5>
					<p>
						Jogue os melhores jogos para duplas e junte aos seus
						amigos na diversão
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="./src/assets/images/the-best-games.jpg"
					alt="Second slide"
				/>

				<Carousel.Caption>
					<h5>Os melhores títulos do mercado</h5>
					<p>
						Temos os melhores e mais atualizados títulos para jogar
						e se divertir
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="./src/assets/images/play-xbox.jpg"
					alt="Third slide"
				/>

				<Carousel.Caption>
					<h5>Jogos para todas as consolas</h5>
					<p>
						Jogue onde quiser e nas melhores consolas do mercado
						(Xbox, PlayStation e Nintendo)
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="./src/assets/images/play-with-you-lo.jpg"
					alt="Um homem e uma mulher jogando"
				/>

				<Carousel.Caption>
					<h5>Jogue com quem você ama</h5>
					<p>
						A sua parceira amorosa pode ser a tua parceira nos jogos
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default ControlledCarousel;
