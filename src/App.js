import "./App.scss";
import axios from "axios";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Basket from "./components/Basket";
import { useState, useEffect } from "react";
import logo from "./images/Deliveroo_logo.svg.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faPlusCircle,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";

library.add(faStar, faPlusCircle, faMinusCircle);

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(" https://deliveroo-chris.herokuapp.com/");
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const dishSelected = (meal) => {
    const dishes = [...cart];
    let checkIsInCart = false;
    dishes.forEach((cartMeal) => {
      if (meal.id === cartMeal.id) {
        cartMeal.quantity++;
        checkIsInCart = true;
      }
    });

    if (!checkIsInCart) {
      meal.quantity = 1;
      dishes.push(meal);
    }

    setCart(dishes);
  };

  return isLoading ? (
    <span className="loading">En cours de chargement...</span>
  ) : (
    <>
      <Header data={data} logo={logo} />
      <div className="content contain">
        <div className="column1">
          <Categories data={data.categories} dishSelected={dishSelected} />
        </div>
        <div className="column2">
          <Basket meals={cart} setCart={setCart} />
        </div>
      </div>
    </>
  );
}

export default App;
