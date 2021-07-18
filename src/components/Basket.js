import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Basket = (props) => {
  const { meals, setCart } = props;
  let totalCart = 0;
  const transportPrice = 2.5;
  const cartMealIncrement = (mealId) => {
    const newCart = [...meals];

    for (let i = 0; i < meals.length; i++) {
      if (newCart[i].id === mealId) {
        newCart[i].quantity = newCart[i].quantity + 1;
        priceCart(newCart[i]);
      }
    }
    setCart(newCart);
  };

  const priceCart = (cart) => {
    let totalArticle = 0;
    const result = cart.quantity * cart.price;
    totalArticle += result;
    totalCart += result;
    return totalArticle;
  };

  const cartMealDecrement = (mealId) => {
    const newCart = [...meals];
    for (let i = 0; i < meals.length; i++) {
      if (mealId === newCart[i].id) {
        newCart[i].quantity = newCart[i].quantity - 1;
        if (newCart[i].quantity === 0) {
          newCart.splice(i, 1);
          break;
        }
      }
    }
    setCart(newCart);
  };

  return (
    <div className="basket">
      <form className="cart">
        <button
          classname={meals.length !== 0 ? "cartNotEmpty" : null}
          type="sumit"
        >
          Valider mon Panier
        </button>

        <div className="dishes">
          {meals.length !== 0 ? (
            <>
              {meals.map((meal) => (
                <div className="dish" key={meal.id}>
                  <div>
                    <FontAwesomeIcon
                      onClick={() => cartMealIncrement(meal.id)}
                      icon="plus-circle"
                    />{" "}
                    <span>{meal.quantity}</span>{" "}
                    <FontAwesomeIcon
                      onClick={() => cartMealDecrement(meal.id)}
                      icon="minus-circle"
                    />{" "}
                    {meal.title}
                  </div>
                  <span>
                    {Intl.NumberFormat("fr-Fr", {
                      style: "currency",
                      currency: "EUR",
                    }).format(priceCart(meal))}
                  </span>
                </div>
              ))}
              <div className="subTotal">
                <label htmlFor="sousTotal">
                  Sous-total
                  <span>
                    {Intl.NumberFormat("fr-Fr", {
                      style: "currency",
                      currency: "EUR",
                    }).format(totalCart)}
                  </span>
                </label>
                <label htmlFor="livraison">
                  Frais de livraison
                  <span>
                    {Intl.NumberFormat("fr-Fr", {
                      style: "currency",
                      currency: "EUR",
                    }).format(transportPrice)}
                  </span>
                </label>
              </div>
              <div className="totalPrices">
                <label htmlFor="total">
                  Total
                  <span>
                    {Intl.NumberFormat("fr-Fr", {
                      style: "currency",
                      currency: "EUR",
                    }).format(totalCart + transportPrice)}
                  </span>
                </label>
              </div>
            </>
          ) : (
            <div className="emptyCart">Votre panier est vide</div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Basket;
