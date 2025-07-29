/*
  Copyright (C), 2025, Lavínia Ferraz Nogueira (v1ih)
    @author Lavínia Ferraz Nogueira
    FileName: index.html
    @version: I
    Creation: 05/07/2025
    Last modification: -
*/

import React from "react";

const Loader = () => {
  return (
    <div className="w-screen h-screen overflow-hidden bg-grayscale-950 flex items-center justify-center relative">
      <span
        style={{ fontFamily: "SuperMario" }}
        className="absolute text-primary-400 text-xl"
      >
        v1ih
      </span>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
