import React from "react";
import "./Styles/Section.css";
import Styled from "styled-components";
import styled from "styled-components";
import arrow from "./images/down-arrow.svg";
import Fade from 'react-reveal'

const Section = ({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) => {
  return (
    <div
      className="wrapper__section"
      style={{ backgroundImage: `url( ${require(`${backgroundImg}`)})` }}
    >
        <div className="Item__text">
        <Fade bottom>
          <h1>{title}</h1>
          <p>{description}</p>
          </Fade>
        </div>
      <Buttons>
      <Fade bottom>
        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>
          {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
        </ButtonGroup>
        </Fade>
        <DownArrow src={arrow} />
      </Buttons>
    </div>
  );
};

export default Section;

const ButtonGroup = Styled.div`
display:flex;
margin-bottom:2rem;
@media screen and (max-width:768px){
    flex-direction:column;
}

`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 13px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  color: black;
  opacity: 0.65;
`;
const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;
