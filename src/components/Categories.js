import Meals from "../components/Meals";

const Categories = (props) => {
  const { data, dishSelected } = props;
  return data.map((category, index) => {
    let result;
    if (category.meals.length !== 0) {
      result = (
        <section className="contain" key={index}>
          <h3>{category.name} </h3>
          <Meals category={category.meals} dishSelected={dishSelected} />
        </section>
      );
    }
    return result;
  });
};

export default Categories;
