//Basics
import { Link } from "react-router-dom";
//Libraries
import styled from "styled-components";
//Mixins
import { mix_containers, mix_flex } from "../../../design/mixins.styles";
//Responsive
import { respond } from "../../../design/responsive";
//Design
import colors from "../../../design/colors";
import sizes from "../../../design/sizes";
import shadows from "../../../design/shadows.styles";
import fonts from '../../../design/fonts.styles';
import margins from '../../../design/margins.styles';
import { PrussianBlue_To_Orange } from '../../../design/effects.styles';
//Assets
import { ReactComponent as VegeloperLogo } from "../../../assets/SVG/Vegeloper.svg";
import { ReactComponent as WebWeaverLine } from "../../../assets/SVG/WebWeaver-Line.svg";


//Code
export const HeaderContainer = styled.div`
  grid-column: cover-start / cover-end;
  grid-column: center-start / center-end;
  grid-row: 1 / span 1;
  width: 100%;
  z-index: 10000000;

  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: rgb(242, 243, 247);
  transition: height 0.3s ease-in, opacity 0.1s ease-out;

  //Hiding menu before reaching tablet viewport.
  height: 0vh;
  opacity: 0;

  ${respond.mobile.max`
    height: 10vh;
    opacity: 1;
  `};
  ${respond.pc.min`
    ${'' /* grid-column: full-start / full-end; */}
  `};
`;

export const LogoContainer = styled(Link)`
  ${mix_containers.logo};
  margin-right: auto;

  margin-left: clamp(-2rem, -3.33333vw, -3.33333vw);
  ${"" /* margin-left: 2.6rem; */}
  ${"" /* margin-left: clamp(2.6rem, 4.33333vw, 4.33333vw); */}
  ${"" /* margin-left: -5vw; */}
`;

export const LogoSVG = styled(VegeloperLogo)`
  width: 7rem;
  height: 7rem;
  ${"" /* margin-left: clamp(2.6rem, 4.33333vw, 4.33333vw); */}
`;

export const LogoText = styled.p`
  ${fonts.mixins.logo};
  font-size: 3rem;
  color: ${colors.primary};
  margin-left: ${sizes.margin.small};
  margin-left: 0.7rem;
`;

export const LogoLine = styled(WebWeaverLine)`
  width: 1rem;
  height: 3rem;
  fill: ${colors.primary};
  ${'' /* margin-left: 1rem; */}
  margin-top: .5rem;
`;

export const MenuButtonsContainer = styled.div`
  ${mix_containers.menuButton}
  ${"" /* margin-right: ${sizes.margin.larger}; */}
  ${"" /* width: 50%; */}
  height: 100%;  
  ${'' /* margin-right: 10vw; */}
`;


export const MenuButton = styled(Link)`
  ${shadows.mixins.neumorphic.button};
  ${shadows.mixins.neumorphic.original};
  ${fonts.mixins.menuButton}
  ${'' /* font-family: "Rubik Mono One",  Cambria, "Times New Roman", Times, sans-serif;
  font-weight: 400; */}
  font-size: 1.2rem;
  ${'' /* font-size: 1rem; */}
  ${"" /* font-family: "Poppins", sans-serif;
  
  font-weight: 400;
  font-size: clamp(15px, 1.66666vw, 1.66666vw); */}
  ${mix_flex.center};
  color: ${colors.primary};

  ${"" /* margin-right: ${sizes.margin.small}; */}
  height: 4.2rem;
  width: 7rem;
  cursor: pointer;

  transition: background-color 0.3s ease;
  border-radius: 15px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  position: relative;
  vertical-align: middle;
  overflow: hidden;

  :not(:last-of-type) {
    margin-right: clamp(5px, 1.66666vw, 1.66666vw);
    ${"" /* background: red !important; */}
  }

  &:hover ${PrussianBlue_To_Orange} {
    color: ${colors.accent.lightest};
  }

  &::before {
    bottom: 0;
    right: 0;
  }

  &::after {
    top: 0;
    left: 0;
  }

  &::before,
  &::after {
    border: ${({ variant }) =>
      variant === "active" ? "5px solid transparent" : "none"};
    border-radius: 1px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    width: 0;
    height: 0;
  }
  ${"" /* 
  &:hover::before,
  &:hover::after {
    width: 100%;
    height: 100%;
  }

  &:hover::before {
    border-top-color: ${colors.accent.lightest};
    border-right-color: ${colors.accent.lightest};
    transition: 
      // Height expands first
      height 0.5s ease,
      // 0.5s Delay, then width and borderColor
      width 0.5s ease 0.5s,
      border-top-color 0s 0.5s;
  }

  &:hover::after {
    border-bottom-color: ${colors.accent.lightest}; // Make borders visible
    border-left-color: ${colors.accent.lightest};
    transition: 
      // 1s Wait for ::before
      height 0.5s ease 1s, border-left-color 0s 1s,
      // 0.5s Wait for height
      border-bottom-color 0s 1.5s,
      width 0.5s ease 1.5s; // And then exanding width
  } */}
  ${"" /* border-radius: 5px; */}
  &:hover {
    background-color: white;
  }

  &:active {
    transform: translateY(2px);
    transition: transform 0.25s ease;
  }
`;

export const MenuButtonOrange = styled(MenuButton)`
  ${shadows.mixins.neumorphic.onActive_orange};
  transition: box-shadow 0.2s linear;
  &:hover {
    box-shadow: ${shadows.neumorphic.orange2};
  }

  

  background-color: #fff !important;
`;

MenuButton.displayName = "OptionLink";
