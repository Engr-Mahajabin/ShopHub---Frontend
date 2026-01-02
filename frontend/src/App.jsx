import React, { useEffect, useState } from "react";
import PublicRoutes from "./routes/PublicRoutes";
import { Route } from "react-router-dom";
import { getRoutes } from "./routes";

function App() {
  const [allRoutes, setAllRoutes] = useState([...PublicRoutes]);
  // console.log("All Routes:", allRoutes);

  useEffect(() => {
    const routes = getRoutes();
    console.log(routes);
    setAllRoutes([...allRoutes, routes]);
  }, []);

  return <Route allRoutes={allRoutes} />;
}

export default App;
