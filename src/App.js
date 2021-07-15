import "./App.scss";
import axios from "axios";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import logo from "./images/Deliveroo_logo.svg.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      {data.categories.map((elem, index) => {
        let category;
        if (elem.meals.length !== 0) {
          category = (
            <section className="contain" key={index}>
              <h3>{elem.name} </h3>
              <div className="tabMeals">
                {elem.meals.map((elem, index) => {
                  return (
                    <div className="meal" key={index}>
                      <div className="descrip">
                        <h4>{elem.title}</h4>
                        <p>{elem.description}</p>
                        <div className="price">
                          <span>{elem.price} €</span>
                          {elem.popular ? (
                            <span>
                              <FontAwesomeIcon icon="star" /> Populaire
                            </span>
                          ) : (
                            <span></span>
                          )}
                        </div>
                      </div>
                      <img src={elem.picture} alt="" />
                    </div>
                  );
                })}
              </div>
            </section>
          );
        }
        return category;
      })}
    </>
  );
}

export default App;
