import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BandInput from "./BandInput";
import { bandAdded } from "./bandsSlice";
import Band from "./Band";

function BandsContainer() {
  const dispatch = useDispatch();
  const bands = useSelector((state) => state.bands.entities);

  function handleBandSubmit(name) {
    dispatch(bandAdded(name));
  }

  const bandsDisplay= bands.map((band) => (
    <Band key={band.id} band={band}/>
 ));

  return (
    <div>
      <BandInput onBandSubmit={handleBandSubmit} />
      <ul>
        {bandsDisplay}
      </ul>
    </div>
  );
}

export default BandsContainer;
