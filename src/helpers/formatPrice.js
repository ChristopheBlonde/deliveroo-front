const formatPrice = (num) => {
  return Intl.NumberFormat("fr-Fr", {
    style: "currency",
    currency: "EUR",
  }).format(num);
};

export default formatPrice;
