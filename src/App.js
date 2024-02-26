import "./App.css";
import ButtonBlackArrow from "./components/Button/ButtonBlackArrow/ButtonBlackArrow";
import ButtonBlackBasket from "./components/Button/ButtonBlackBasket/ButtonBlackBasket";
import ButtonOrangArrow from "./components/Button/ButtonOrang/ButtonOrang";
import ButtonResponseWhite from "./components/Button/ButtonResponse/White/ButtonResponseWhite";
import SliderCircle from "./components/Button/SliderCircle/SliderCircle";
import Header from "./components/Header/Header"
import './App.css';
import Footer from './components/Footer/Footer';
import Banner from "./components/Banner/Banner";



function App() {
  return (
    <div className="App">
      <Header />
      <ButtonOrangArrow text="GO TO DIRECTORY"
      />
      <ButtonOrangArrow text="MORE DETAIL"/>
      <ButtonBlackArrow text="MORE DETAIL"/>
      <ButtonBlackBasket />
      <ButtonResponseWhite />
      <SliderCircle />
      
     <Banner />
      <Footer />
    </div>
  );
}

export default App;
