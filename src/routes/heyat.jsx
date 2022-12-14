import React from "react";
import About from "../components/Sections/About";
import { useLocation } from "react-router-dom";
import AboutParagraph from "../components/RouteComponents/AboutParagraph";

function heyat() {
  const location = useLocation();
  const lightMode = location.state;

  return (
    <div
      className={`text-white overflow-y-scroll h-screen ${
        !lightMode && "dark-scrollbar"
      }  `}
    >
      {/* routed prop will be useful when u go to the about component and see all the ternaries */}
      <About
        routed
        lightMode={lightMode}
        name="Həyatı"
        paragraph={<AboutParagraph />}
      />
    </div>
  );
}

export default heyat;
