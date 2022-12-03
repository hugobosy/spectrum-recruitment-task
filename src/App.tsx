import React from "react";
import { Routing } from "./components/routing/Routing";

function App() {
  const star_wars_data: any[] = [];
  return (
    <>
      <Routing tab={star_wars_data}/>
    </>
  );
}

export default App;
