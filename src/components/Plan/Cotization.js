const Cotization = (props) => {
  const formatPrice = (count) => {
    return "$" + (count / 10.0).toFixed(2);
  };

  return (
    <div className="cotization">
      <div className="cotization__title">MONTO</div>
      <div className="cotization__price">{formatPrice(props.price)}</div>
      <div className="cotization__time">Mensuales</div>
      <hr className="cotization__line"></hr>
      <div className="cotization__description">El precio incluye</div>
      <li className="cotization__list">Llanta de repuesto</li>
      <li className="cotization__list">Llanta de repuesto</li>
      <li className="cotization__list">Llanta de repuesto</li>
      <button>LO QUIERO</button>
    </div>
  );
};
export default Cotization;
