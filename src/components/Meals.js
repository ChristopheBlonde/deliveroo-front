import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Meals = (props) => {
  const { category } = props;
  return (
    <div className="tabMeals">
      {category.map((meals, index) => {
        return (
          <div className="meal" key={index}>
            <div className="descrip">
              <h4>{meals.title}</h4>
              <p>{meals.description}</p>
              <div className="price">
                <span>{meals.price} €</span>
                {meals.popular ? (
                  <span>
                    <FontAwesomeIcon icon="star" /> Populaire
                  </span>
                ) : (
                  <span></span>
                )}
              </div>
            </div>
            <img src={meals.picture} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Meals;
