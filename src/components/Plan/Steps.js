import chevrotW from "../../assets/images/chevrot__white.png";
import { useNavigate } from "react-router-dom";

const Steps = () => {
  const navigate = useNavigate();
  return (
    <div className="steps">
      <div className="step__one">
        <div className="one">1</div>
        <span>Datos</span>
      </div>
      <div className="step__two">
        <div className="two">2</div>
        <span>Arma tu plan</span>
      </div>
      <div className="step__content">
        <button onClick={() => navigate(-1)} className="btn__back">
          <img src={chevrotW} alt="chevrot white"></img>
        </button>
        <div className="step__text">PASO 2 DE 2</div>
        <div className="step__line">
          <div className="barra"></div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
