import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Meals = (props) => {
  const { category, dishSelected } = props;
  return (
    <div className="tabMeals">
      {category.map((meal) => {
        return (
          <div
            className="meal"
            key={meal.id}
            onClick={() => dishSelected(meal)}
          >
            <div className="descrip">
              <h4>{meal.title}</h4>
              <p>{meal.description}</p>
              <div className="price">
                <span>{meal.price} €</span>
                {meal.popular ? (
                  <span>
                    <FontAwesomeIcon icon="star" /> Populaire
                  </span>
                ) : (
                  <span></span>
                )}
              </div>
            </div>
            {meal.picture && <img src={meal.picture} alt={`${meal.title}`} />}
          </div>
        );
      })}
    </div>
  );
};

export default Meals;
