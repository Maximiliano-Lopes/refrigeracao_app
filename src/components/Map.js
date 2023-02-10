
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";

export default function UseMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAqRyrkbxt31Ksh-kayxW6E8I12v7lYAZs",
  });
  var position = {lat: -30.0646983, lng:-51.1558845}

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap zoom={15} center={{lat: -30.0646983, lng:-51.1558845}} mapContainerStyle={{ width: "90%", height: "90%", borderRadius: "10px"}}>
      <MarkerF position={position} options={{
          label: {
            text: "Refrigeração Lopes",
            className: "markerStyle"
          }

      }}/>
    </GoogleMap>
  );
}
