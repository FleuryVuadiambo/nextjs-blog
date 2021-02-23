import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import styles from "../styles.module.css";

function Card() {
  return (
    <div>
      <Container>
        <Row className={styles.rangee}>
          <Col md>
            <div className={styles.card}>
              <Image
                src="/naples.jpg"
                className="card-img-top"
                width={300}
                height={300}
              />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <div className="card-body">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
              </div>
            </div>
          </Col>
          <Col>
            <div className={styles.card}>
              <Image
                src="/naples.jpg"
                className="card-img-top"
                width={300}
                height={300}
              />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <div class="card-body">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
              </div>
            </div>
          </Col>
          <Col>
            <div className={styles.card}>
              <Image
                src="/naples.jpg"
                className="card-img-top"
                width={300}
                height={300}
              />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <div className="card-body">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Card; 