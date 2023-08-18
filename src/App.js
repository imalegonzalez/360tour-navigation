import { Component } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './app.styles.scss';
import PannellumWrapper  from './assets/components/PannellumWrapper.jsx';

import aThomas from "./assets/images/a-thomas.jpg"
import cabrera from "./assets/images/cabrera.jpg"
import cabrerabaño from "./assets/images/cabrerabaño.jpg"
import conesa from "./assets/images/conesa.jpg"
import cramer from "./assets/images/cramer.jpg"
import Goyena from "./assets/images/Goyena.jpg"
import pinzon from "./assets/images/pinzon-2.jpg"
import flashero from "./assets/images/flasheroAI.jpg"
import Navigation from './assets/components/Navigation.jsx';

class App extends Component {
  state = {
    imagesLoaded: false
  };

  componentDidMount() {
    const images = [aThomas, cabrera, cabrerabaño, conesa, cramer, Goyena, pinzon, flashero];
    let imagesLoadedCount = 0;

    images.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        imagesLoadedCount++;
        if (imagesLoadedCount === images.length) {
          this.setState({ imagesLoaded: true });
        }
      };
    });
  }

  render() {
    const { imagesLoaded } = this.state;
    return (
      <div className=' h-[100vh]'>
        {imagesLoaded ? (
          <Router>
          <Navigation className=" z-99"/>
            <Routes>
            <Route path="/"  element={<PannellumWrapper yaw={70} navTo="/cabrera" src={aThomas}/>} />
            <Route path="/cabrera" element={<PannellumWrapper navTo="/flashero" yaw={80} src={cabrera} />} />
            <Route path="/cabrerabaño" element={<PannellumWrapper  yaw={90} src={cabrerabaño} />} />
            <Route path="/conesa" element={<PannellumWrapper  yaw={90} src={conesa} />} />
            <Route path="/cramer" element={<PannellumWrapper  yaw={90} src={cramer} />} />
            <Route path="/goyena" element={<PannellumWrapper  yaw={90} src={Goyena} />} />
            <Route path="/pinzon" element={<PannellumWrapper  yaw={60} src={pinzon} />} />
            <Route path="/flashero" element={<PannellumWrapper  yaw={60} src={flashero} />} />
              
            </Routes>
          </Router>
        ) : (
          <div className="flex justify-center items-center h-full">
            Cargando imágenes...
          </div>
        )}
        
      </div>

      
    )
  }
}

export default App