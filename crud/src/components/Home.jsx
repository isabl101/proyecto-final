import { Link } from "react-router-dom"
import BarraNav from "./BarraNav"
import Galeria from "./Galeria"
import ImagenEntrada from "./ImagenEntrada"
import Info from "./Info"

const Home = () => {
  return (
    <section>
      <BarraNav />
      <ImagenEntrada />
      <Info />
      <Galeria />
    </section>
  )
}

export default Home