import "./App.scss";
import axios from "axios";
import Header from "./components/Header";
import Categories from "./components/Categories";
import { useState, useEffect } from "react";
import logo from "./images/Deliveroo_logo.svg.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";

library.add(faStar);

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(" https://deliveroo-chris.herokuapp.com/");
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <>
      <Header data={data} logo={logo} />
      <Categories data={data.categories} />
    </>
  );
}

export default App;
