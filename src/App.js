import React, { useEffect, useState } from "react";
import { Grid, CssBaseline } from "@material-ui/core";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getPlacesData } from "./api";
const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState( {lat:0 , lng:0} );
  const [bounds, setBounds] = useState({});

  const [childClicked,setChildClicked] = useState(null);

  const [isLoading,setIsLoading] = useState(false)
  useEffect(() => {
   navigator.geolocation.getCurrentPosition(({ coordinates: {  longitude , latitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, [] );

  useEffect(() => {
    setIsLoading(true)
    getPlacesData(bounds.sw, bounds.ne).then((data) => {
      setPlaces(data);
      setIsLoading(false)
    });
  }, [coordinates, bounds]);
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List 
          places={places}
          childClicked={childClicked} 
          isLoading={isLoading}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            places={places}
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
};
export default App;
