import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Header from "./../../components/layout/header/index";
import ControlledCarousel from "./../../components/layout/carousel/index";
import './index.css';
import Footer from "../../components/layout/footer";
import CardProduct from "../../components/layout/card-product";

function H2({ text }) {
	return <h2 className="text-center my-text-primary fw-bold">{text}</h2>;
}

function QuemSomosSection() {
	return (
		<section bg="light" className="p-5 who-we-are">
			<Container>
				<H2 text="Quem somos?" />
				<Row className="row justify-content-between mt-5">
					<Col md={6}>
						<h4 className="">Nossa história</h4>
						<p className="mt-4 lead text-justify">
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Dolore, sequi aliquam laudantium iure et
							laborum expedita molestiae repudiandae voluptas
							nesciunt atque deserunt eligendi omnis, inventore
							eveniet dolores animi, doloremque doloribus! Lorem
							ipsum dolor sit amet, consectetur adipisicing elit.
							Repudiandae fuga iusto, odio velit doloremque
							numquam aliquam voluptates deleniti assumenda
							perferendis laboriosam maiores soluta praesentium
							laudantium et? Natus excepturi temporibus quos.
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Dolor saepe veritatis veniam animi iusto
							impedit, tenetur ipsam et nisi aliquam consequatur
							ea aspernatur obcaecati ullam ad debitis vero minus
							repudiandae. Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Recusandae excepturi ad quos
							obcaecati, tempora perspiciatis officiis ab itaque
							fuga impedit, deserunt, et voluptatibus. Officiis
							non pariatur eaque officia voluptatibus
							necessitatibus.
						</p>
						<Button className="btn my-btn-primary mb-3 mb-lg-0">
							Ler mais
						</Button>
					</Col>
					<Col md={6}>
						<Image
							src="src/assets/images/company.jpg"
							alt="Imagem de vários computadores numa secretária e algumas pessoas mexendo neles"
							className="img-fluid"
						/>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

function CardTime({src, name, occupation}) {
	return (
		<Col md={3}>
			<Card className="card">
				<Card.Img variant="top" src={src} className="card-img rounded-circle" />
				<Card.Body>
					<Card.Title className="card-title">{name}</Card.Title>
					<Card.Text className="card-text">{occupation}
					</Card.Text>
				</Card.Body>
			</Card>
		</Col>
	);
}

function NossoTimeSection() {
	return (
		<Container className="my-5 time">
			<H2 text="Conheça nosso time"></H2>

			<Row className="justify-content-between mt-5">
				<CardTime src="./src/assets/images/man.jpg" name="Márcio André" occupation="Gestor de Vendas" />
				<CardTime src="./src/assets/images/woman.jpg" name="Ana Maria" occupation="Contabilista" />
				<CardTime src="./src/assets/images/man1.jpg" name="Cristiano Sousa" occupation="Gestor de Marketing" />
				
			</Row>
		</Container>
	);
}

function RowProducts({src1, title1, price1, src2, title2,   price2, src3, title3, price3, src4, title4, price4}) {
  return (
    <Row className="mt-5">
                    <Col md={3}>
                        <CardProduct src={src1} title={title1} price={price1}/>
                    </Col>
                    <Col md={3}>
                        <CardProduct src={src2} title={title2} price={price2}/>
                    </Col>
                    <Col md={3}>
                        <CardProduct src={src3} title={title3} price={price3}/>
                    </Col>
                    <Col md={3}>
                        <CardProduct src={src4} title={title4} price={price4}/>
                    </Col>
                </Row>
  )
}

function ProductsSection() {
  return (
    <section className="bg-light p-5 products">
            <Container>
                <H2 text="Nossos melhores produtos"></H2>

                <RowProducts src1="./src/assets/images/fifa.jpg" title1="FIFA 23" price1="65 $" src2="./src/assets/images/grand-turism.jpg" title2="Grand Turismo" price2="40 $" src3="./src/assets/images/god-war.jpg" title3="God of War" price3="50 $" src4="./src/assets/images/saint-row.jpg" title4="Saints Row" price4="55 $" />

                <RowProducts src1="./src/assets/images/red-dead.jpg" title1="Read Dead Redemption" price1="63 $" src2="./src/assets/images/the-last-of-us.jpg" title2="The Last of Us: Part II" price2="70 $" src3="./src/assets/images/uncharted.png" title3="Uncharted: The Lost Legacy" price3="40 $" src4="./src/assets/images/hitman.jpg" title4="HitMan" price4="35 $" />

            </Container>
        </section>
  )
}

function Home() {
	return (
		<div>
			<Header />
			<ControlledCarousel />
			<QuemSomosSection />
			<NossoTimeSection />
      <ProductsSection />
      <Footer/>
		</div>
	);
}

export default Home;
