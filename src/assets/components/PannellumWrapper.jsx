import React from "react";
import ReactDOM from "react-dom";
import { Pannellum } from "pannellum-react";
import { Link, useNavigate } from 'react-router-dom';


export default function PannellumWrapper(props) {
  var img = props.src;
  var yaw = props.yaw;
  var navTo = props.navTo;
  const navigate = useNavigate();

  const handleHotspotClick = () => {
    navigate(navTo);
  };
  return (
    <div className="App">
      <Pannellum
        width="100%"
        height="100vh"
        image={img}
        pitch={-15}
        yaw={yaw}
        hfov={90}
        autoLoad
        autoRotate={-5}
        showFullscreenCtrl={false}
        showZoomCtrl={false}
        onLoad={() => {
          console.log("panorama loaded");
        }}
      >
        <Pannellum.Hotspot
          type="custom"
          pitch={31}
          yaw={150}
          handleClick={handleHotspotClick}
          name="hs1"
        />
      </Pannellum>
    </div>
  );
}
