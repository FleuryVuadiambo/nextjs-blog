import Navbar from "./navbar";
import Card from "./card";
import ControlledCarousel from "./ControlledCarousel";
import Footer from "./footer";
import styles from "../styles.module.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 className={styles.title}>Bienvenue dans mon blog </h1>
      <ControlledCarousel />
      <Card />
      <Footer />
    </div>
  )
}