import React, { useEffect, useState } from "react";
import { Grid, CssBaseline } from "@material-ui/core";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getPlacesData } from "./api";
const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState( {lat:0 , lng:0} );
  const [bounds, setBounds] = useState('');

  useEffect(() => {
   navigator.geolocation.getCurrentPosition(({ coordinates: {  longitude , latitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, [] );

  useEffect(() => {
    getPlacesData(bounds.sw, bounds.ne).then((data) => {
      setPlaces(data);
    });
  }, [coordinates, bounds]);
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </Grid>
      </Grid>
    </>
  );
};
export default App;
