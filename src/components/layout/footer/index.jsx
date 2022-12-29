import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import './index.css'

function ColMd2({title, link1, link2, link3}) {
    var P = ({hr, text}) => {
        return (
            <p>
				<a href={hr} className="underline-hover-effect">
					{text}
				</a>
			</p>
        )
    }

	return (
		<Col md={2} className="mx-auto mt-3">
			<h5 className="mb-4">{title}</h5>
			<P hr="#who-we-are" text={link1}/>
			<P hr="#time" text={link2}/>
			<P hr="#products" text={link3}/>
		</Col>
	);
}

function Footer() {
	return (
		<footer className="bg-dark text-white pt-5 pb-4">
			<Container>
				<Row className="text-center text-md-start">
					<Col md={3} className="mx-auto mt-3">
						<a href="" className="footer-brand h4">
							Online Shop
						</a>
						<p className="fs-6 mt-4 text-md-justify who-we-are-text">
							Somos uma empresa de jogos eletrónicos e oferecemos
							os melhores jogos existentes no mercado
						</p>

						<ul className="list-inline social-medias">
							<li className="list-inline-item">
								<a href="#" target="_blank">
									<i className="fa-brands fa-facebook"></i>
								</a>
							</li>
							<li className="list-inline-item">
								<a href="#" target="_blank">
									<i className="fa-brands fa-whatsapp"></i>
								</a>
							</li>
							<li className="list-inline-item">
								<a href="#" target="_blank">
									<i className="fa-brands fa-instagram"></i>
								</a>
							</li>
						</ul>
					</Col>

                    <ColMd2 title="Inicio" link1="Quem somos?" link2="Nosso time" link3="Produtos" />

					<Col md={2} className="mx-auto mt-3">
                    <h5 className="mb-4">Contactos</h5>
						<address>
							<p>
								<a
									href="tel:+244935599857"
									className="underline-hover-effect"
								>
									(414) 774-2800
								</a>
							</p>
							<p>
								<a
									href="mailto:noteukubico11@gmail.com"
									className="underline-hover-effect"
								>
									onlineshop@gmail.com
								</a>
							</p>
							<p>
								<a href="" className="underline-hover-effect">
									Milwaukee, 11017 W Blue Mound Rd
								</a>
							</p>
						</address>
					</Col>
				</Row>

				<Row className="text-center">
					<p className="text-light mt-4">
						Copyright © 2022. Todos os direitos reservados
					</p>
				</Row>
			</Container>
		</footer>
	);
}

export default Footer;
