import React, { useState } from "react";
import PublicRoutes from "./routes/PublicRoutes";
import { Route } from "react-router-dom";

function App() {
  const [allRoutes, setAllRoutes] = useState([...PublicRoutes]);

  useEffect(() => {
    const routes = getRoutes();
    setAllRoutes([...allRoutes, routes]);
  }, []);

  return <Route allRoutes={allRoutes} />;
}

export default App;
