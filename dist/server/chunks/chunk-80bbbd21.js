import { jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { A as API_URL } from "./chunk-6e20e889.js";
function formatDistance(distance) {
  if (distance < 1e3) {
    let arrDistance = distance.toLocaleString("ko-KR").split("");
    arrDistance.pop();
    return arrDistance.join("") + "m";
  } else {
    let arrDistance = (distance / 1e3).toLocaleString("ko-KR").split("");
    arrDistance.pop();
    return arrDistance.join("") + "km";
  }
}
function Distance({ location }) {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [distance, setDistance] = useState(0);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        setCurrentLocation([lng, lat]);
      });
    }
  }, []);
  useEffect(() => {
    if (currentLocation !== null && location.every((v) => v !== 0)) {
      getDistance().then((result) => {
        setDistance(result.distance);
      });
    }
    async function getDistance() {
      const res = await fetch(`${API_URL}/map/distance`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ currentLocation, targetLocation: location })
      });
      const data = await res.json();
      return data;
    }
  }, [currentLocation, location]);
  return /* @__PURE__ */ jsx("span", { className: "txt-distance", children: formatDistance(distance) });
}
export {
  Distance as D
};
