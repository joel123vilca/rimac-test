import headerImage from "../../assets/images/image_1.png";
import woman from "../../assets/images/image_2.svg";
import womanr from "../../assets/images/woman_r.svg";
import logo from "../../assets/images/logo.png";
import "./login.scss";
import useForm from "../../Hooks/useForm";
import classNames from "classnames";
const Login = () => {
  //Custom hook call
  const { handleChange, errors, handleSubmit } = useForm();

  return (
    <div className="login">
      <div className="login__header">
        <img src={headerImage} className="header__image" alt="first "></img>
        <div className="logo">
          <img src={logo} className="logo__image" alt="logo"></img>
        </div>
        <div className="logo__call">llamanos</div>
        <div className="header__body">
          <div className="body__one">
            <img src={woman} className="d__image" alt="woman"></img>
            <img src={womanr} className="r__image" alt=" woman r"></img>
          </div>
          <div className="body__two">
            <div className="body__title">NUEVO!</div>
            <div className="body__subtitle">
              Seguro <span className="first__text">Vehicular</span>
              <span className="sec__text"> Tracking</span>
            </div>
            <div className="body__description">
              Cuentanos donde lo haras seguimiento a tu seguro
            </div>
          </div>
        </div>
        <div class="footer">2022 | Rimac Seguros y Reaseguros</div>
      </div>
      <div className="login__body">
        <form onSubmit={handleSubmit} className="login__content">
          <div className="login__title">Déjanos tus datos</div>
          <div className="container__select">
            <select
              className={classNames("custom__select", {
                is_error: errors?.documentId,
              })}
              name="selected"
            >
              <option value="1" text="DNI">
                DNI
              </option>
              <option value="2" text="C.E">
                C.E
              </option>
            </select>
            <input
              type="number"
              name="documentId"
              placeholder="Nro. de doc"
              className={classNames("login__select", {
                is_error: errors?.documentId,
              })}
              onChange={handleChange}
            ></input>
          </div>
          <input
            type="tel"
            className={classNames("login__input", {
              is_error: errors?.tel,
            })}
            name="tel"
            placeholder="Celular"
            onChange={handleChange}
          ></input>
          <input
            type="number"
            placeholder="Placa"
            name="placa"
            className={classNames("login__input", {
              is_error: errors?.placa,
            })}
            onChange={handleChange}
          ></input>
          {errors?.placa?.type === "required" && <p>This field is required</p>}
          <div className="terms">
            <input type="checkbox" className="checkbox"></input>
            <div className="terms__conditions">
              Acepto la{" "}
              <a href="/">Politica de Protección de Datos Personales</a> y los{" "}
              <a href="/">Términos y Condiciones</a>
            </div>
          </div>
          <button type="submit" className="button">
            COTÍZALO
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
