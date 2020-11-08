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
  ${mix_containers.header};
display: none;
  margin-top: -10px;
  height: 10vh;
  grid-column: cover-start / cover-end;
  grid-row: 1 / span 1;
  top: 0;
  left: 0;
  z-index: 1000;

  ${respond.mobile.large`
    display: flex;
  `};
  background-color: rgb(242, 243, 247);
`;

export const LogoContainer = styled(Link)`
  ${mix_containers.logo};
  height: 5rem;
  margin-left: 3rem;
  
`;

export const LogoSVG = styled(VegeloperLogo)`
  width: 6rem;
  height: 6rem;
  padding: 0.1vw;
  ${'' /* ${respond.tablet_medium`
    display: none;
  `}; */}
`;

export const LogoText = styled.p`
  ${fonts.mixins.logo};
  color: ${colors.primary};
  margin-left: ${sizes.margin.small};
`;

export const LogoLine = styled(WebWeaverLine)`
  width: 1rem;
  height: 3rem;
  fill: ${colors.primary};
  margin-left: 1rem;
  margin-top: -0.5rem;
`;

export const MenuButtonsContainer = styled.div`
  ${mix_containers.menuButton}
  margin-right: ${sizes.margin.larger};
  width: 50%;
  height: 100%;
`;


export const MenuButton = styled(Link)`
  ${shadows.mixins.neumorphic.button};
  ${fonts.mixins.menuButton}
  ${mix_flex.center};
  color: ${colors.primary};
  margin-right: ${sizes.margin.small};
  height: 4rem;
  width: 8rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 1px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  position: relative;
  vertical-align: middle;
  overflow: hidden;

  &:hover ${PrussianBlue_To_Orange} {
    color: ${colors.accent};
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
      variant === "active" ? "3px solid transparent" : "none"};
    border-radius: 1px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    width: 0;
    height: 0;
  }

  &:hover::before,
  &:hover::after {
    width: 100%;
    height: 100%;
  }

  &:hover::before {
    border-top-color: ${colors.accent};
    border-right-color: ${colors.accent};
    transition: 
      // Height expands first
      height 0.5s ease,
      // 0.5s Delay, then width and borderColor
      width 0.5s ease 0.5s,
      border-top-color 0s 0.5s;
  }

  &:hover::after {
    border-bottom-color: ${colors.accent}; // Make borders visible
    border-left-color: ${colors.accent};
    transition: 
      // 1s Wait for ::before
      height 0.5s ease 1s, border-left-color 0s 1s,
      // 0.5s Wait for height
      border-bottom-color 0s 1.5s,
      width 0.5s ease 1.5s; // And then exanding width
  }

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
  background-color: #fff !important;
`;

MenuButton.displayName = "OptionLink";
