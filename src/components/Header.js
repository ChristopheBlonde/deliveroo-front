const Header = (props) => {
  const { logo, data } = props;
  return (
    <header>
      <div className="logo">
        <div className="contain">
          <img className="logo-img" src={logo} alt="logo-deliveroo" />
        </div>
      </div>
      <div className="restaurant contain">
        <div className="description">
          <h2>{data.restaurant.name}</h2>
          <p>{data.restaurant.description}</p>
        </div>
        <img src={data.restaurant.picture} alt="Table de présentation" />
      </div>
    </header>
  );
};

export default Header;
