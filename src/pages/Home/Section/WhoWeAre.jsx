import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import H2 from "./../../../components/layout/H2"

function WhoWeAre() {
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

export default WhoWeAre