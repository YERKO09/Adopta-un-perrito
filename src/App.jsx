import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MyCard from "./Components/MyCards";
import img1 from "./assets/Larry.jpg";
import img2 from "./assets/Rocke.jpg";
import img3 from "./assets/Lola.jpg";
import img4 from "./assets/Jerry.jpg";
import CardGroup from "react-bootstrap/CardGroup";

function App() {
  return (
    <>
      <Header title="¡Adopta un perrito! 🐶" />
      <CardGroup className="CardGroup">
        <MyCard 
        img={img1} 
        name="Larry" 
        desc="Larry, con su pelaje suave y ojos llenos de curiosidad, es un verdadero explorador. Su pelaje de tonalidades cálidas resalta su naturaleza amigable."
        color="warning"
        texto="Ver más" 
        />

        <MyCard 
        img={img2} 
        name="Rocke" 
        desc="Rocke, un impresionante Rhodesian Ridgeback, irradia nobleza y fuerza. Su pelaje corto y lustroso resalta la musculatura poderosa de esta raza."
        color="success"
        texto="Ver más" 
        />

        <MyCard 
        img={img3} 
        name="Lola"
        desc="Lola, con su pelaje esponjoso y expresivos ojos, es una adorable compañera que irradia ternura. Su mezcla de colores y las manchas en su hocico añaden un toque único a su belleza canina."
        color="primary"
        texto="Ver más" 
        />

        <MyCard 
        img={img4} 
        name="Jerry"
        desc="Jerry, con su pelaje suave y expresión vivaz, es un auténtico aventurero. Sus orejas levantadas y ojos brillantes revelan su naturaleza curiosa y llena de energía."
        color="info"
        texto="Ver más" 
        />
      </CardGroup>
      <Footer />
    </>
  );
}

export default App;
