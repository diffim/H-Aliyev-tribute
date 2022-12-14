import React from "react";
import AbideInfo from "../components/RouteComponents/AbideInfo";
import {
  IMGS_AIRPORT as imgs,
  PARAGRAPH_AIRPORT as paragraph,
} from "../consts";

function havaLimani() {
  //same comment as the one in politicalportrait
  return (
    <>
      <AbideInfo
        name="Heydər Əliyev Adına Hava Limanı"
        imgs={imgs}
        paragraph={paragraph}
      />
    </>
  );
}

export default havaLimani;
