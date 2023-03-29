import { useState } from "react";
import "./App.css";
import HomeView from "./components/Views/Home/HomeView";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HomeView />
    </>
  );
}

export default App;
