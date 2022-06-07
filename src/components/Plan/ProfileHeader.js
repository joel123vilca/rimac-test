import React, { useState } from "react";
import man from "../../assets/images/image_3.png";
import chevrot from "../../assets/images/chevrot.png";
import group from "../../assets/images/Group.png";
import group1 from "../../assets/images/Group1.png";
import group2 from "../../assets/images/Group2.png";
import chevrot1 from "../../assets/images/chevrot2.png";
import chevrot2 from "../../assets/images/chevrot3.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ProfileHeader = (props) => {
  const {
    tab,
    cents,
    activeTab,
    toMoney,
    increment,
    decrement,
    changePrice,
    user,
  } = props;
  const navigate = useNavigate();
  const StyledButton = styled.button`
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    color: ${(props) => props.theme.main};
    background-color: #ffffff;
    border: 1px solid #ffffff;
    border-bottom: 1px solid ${(props) => props.theme.main};
    height: 50px;
    cursor: pointer;
  `;

  const [llanta, setLlanta] = useState(false);
  const [choque, setChoque] = useState(false);
  const [atropello, setAtropello] = useState(false);
  const [showLlanta, setShowLlanta] = useState(false);
  const [showChoque, setShowChoque] = useState(false);
  const [showAtropello, setShowAtropello] = useState(false);

  return (
    <div className="profile">
      <div className="back__btn" onClick={() => navigate(-1)}>
        <button>
          <img src={chevrot} alt="icon"></img>
        </button>{" "}
        <span>VOLVER</span>
      </div>
      <div className="profile__body">
        <div className="profile__name">
          <span className="greeting">!Hola,</span>{" "}
          <span className="first__name">Juan!</span>
        </div>
        <span className="coverage">Mira las coberturas</span>
        <div className="profile__description">
          Conoce las coberturas para tu plan
        </div>
        <div className="profile__car">
          <div className="car__content">
            <div className="placa">Placa: {user?.placa} </div>
            <div className="car__name">Wolkswagen 2019 Gollf </div>
          </div>
          <img src={man} alt="man" className="man__image"></img>
        </div>
      </div>
      <div className="profile__range">
        <div className="range__description">
          <div className="title">Indica la suma asegurada</div>
          <div className="count">MIN $12.500 | MAX $16.500</div>
        </div>
        <div className="increment">
          <button onClick={decrement} disabled={cents < 12600}>
            -
          </button>
          <input type="text" className="number" value={toMoney(cents)}></input>
          <button onClick={increment} disabled={cents > 16400}>
            +
          </button>
        </div>
      </div>
      <hr></hr>
      <div className="profile__content">Agrega o quita coberturas</div>
      <div className="profile__tabs">
        <div className="tabs__btns">
          <StyledButton
            theme={{ main: tab === "pt" ? "#ef3340" : "#494f66" }}
            onClick={() => activeTab("pt")}
          >
            PROTEGE TU AUTO
          </StyledButton>
          <StyledButton
            theme={{ main: tab === "pr" ? "#ef3340" : "#494f66" }}
            onClick={() => activeTab("pr")}
          >
            PROTEGE A LOS QUE TE RODEAN
          </StyledButton>
          <StyledButton
            theme={{ main: tab === "mp" ? "#ef3340" : "#494f66" }}
            onClick={() => activeTab("mp")}
          >
            MEJORA TU PLAN
          </StyledButton>
        </div>
        <div className="tabs__content">
          <div className="tab">
            <div className="tab__header">
              <div className="avatar">
                <img src={group} alt="dadad" />
              </div>
              <div className="name">Llanta robada</div>
              <div
                className="action"
                onClick={() => {
                  setShowLlanta(!showLlanta);
                }}
              >
                <img src={showLlanta ? chevrot1 : chevrot2} alt="dada" />
              </div>
            </div>
            <div className="tab__body">
              <div
                className="options"
                onClick={() => {
                  changePrice("llanta", !llanta);
                  setLlanta(!llanta);
                }}
              >
                <button className="button__ad">{!llanta ? "+" : "-"} </button>
                <span>{!llanta ? "AGREGAR" : "QUITAR"}</span>
              </div>
              {showLlanta ? (
                <div className="description">
                  He salido de casa a las cuatro menos cinco para ir a la
                  academia de ingles de mi pueblo (Sant Cugat, al lado de
                  Barcelona) con mi bici, na llego a la academia que está en el
                  centro del pueblo en una plaza medio-grande y dejo donde
                  siempre la bici atada con una pitón a un sitio de esos de
                  poner las bicis y mucho más
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          {cents > 16000 ? (
            ""
          ) : (
            <div className="tab">
              <div className="tab__header">
                <div className="avatar">
                  <img src={group1} alt="dadad" />
                </div>
                <div className="name">Choque y/o pasarte la luz roja</div>
                <div
                  className="action"
                  onClick={() => {
                    setShowChoque(!showChoque);
                  }}
                >
                  <img src={showChoque ? chevrot1 : chevrot2} alt="dada" />
                </div>
              </div>
              <div className="tab__body">
                <div
                  className="options"
                  onClick={() => {
                    changePrice("choque", !choque);
                    setChoque(!choque);
                  }}
                >
                  <button className="button__ad">{!choque ? "+" : "-"} </button>
                  <span>{!choque ? "AGREGAR" : "QUITAR"} </span>
                </div>
                {showChoque ? <div className="description">choqueeee</div> : ""}
              </div>
            </div>
          )}
          <div className="tab">
            <div className="tab__header">
              <div className="avatar">
                <img src={group2} alt="dadad" />
              </div>
              <div className="name">atropello en la via evitamiento</div>
              <div
                className="action"
                onClick={() => {
                  setShowAtropello(!showAtropello);
                }}
              >
                <img src={showAtropello ? chevrot1 : chevrot2} alt="dada" />
              </div>
            </div>
            <div className="tab__body">
              <div
                className="options"
                onClick={() => {
                  changePrice("atropello", !atropello);
                  setAtropello(!atropello);
                }}
              >
                <button className="button__ad">
                  {!atropello ? "+" : "-"}{" "}
                </button>
                <span>{!atropello ? "AGREGAR" : "QUITAR"} </span>
              </div>
              {showAtropello ? (
                <div className="description">atropello</div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileHeader;
