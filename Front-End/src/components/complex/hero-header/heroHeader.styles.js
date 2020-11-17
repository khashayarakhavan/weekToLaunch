//Libraries
import styled, {css} from "styled-components";
//Mixins
import mixins from '../../../design/mixins.styles';
//Designs
import fonts from '../../../design/fonts.styles';
import colors from '../../../design/colors';
import sizes from '../../../design/sizes';
import {bubbleGum, hoverOff} from '../../../design/motions.styles';
import {respond} from '../../../design/responsive';
import shadows from '../../../design/shadows.styles';
import events from '../../../design/events.styles';
import {background_change} from '../../../design/motions.styles';
import Lottie from "react-lottie";
//Assets
import {AnimationCreateRobot} from '../../../design/animations.styles';
// import heartSVG from '../../../assets/SVG/heart.svg';
import HeartSVG from '../../../assets/SVG/heart.svg';
import { ReactComponent as MyIcon } from "../../../assets/SVG/heart.svg";



//Code

export const HeroHeaderLeft = styled.div`
  grid-row: 2 / span 1;
  grid-column: center-start / center-end;
  position: relative;

  margin-top: clamp(50px, 16.6666vw, 16.6666vw);
  height: 50vh;
  max-width: 100%;
  z-index: 100;

  background: lightblue;
  text-rendering: optimizeLegibility;
  overflow-wrap: break-word;
  
  display: grid;
  grid-template-rows: min-content min-content minmax(min-content, 1fr);

  ${respond.mobile.large`
    height: 45vh;
     
  `}
  ${respond.mobile.max`
    
  `}
  ${respond.pc.min`
    grid-column: center-start / col-end 4;
    height: 90vh;
  `}
  ${respond.tablet.large`
    grid-column: center-start / center-end !important;
  `}
`;







export const HeroHeaderRight = styled.div`
  grid-column: center-start / center-end;
  grid-row: 3 / span 1;
  height: 50vh;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  overflow: hidden !important;
  ${'' /* background: red; */}

  & > * {
    justify-self: flex-start;
    align-self: center;
    overflow: visible !important ;
  }
  svg {
    overflow: visible !important;
  }

  ${respond.mobile.large`
    height: 45vh;
    padding-top: 0vh;
  `}
  ${respond.tablet.large`
    grid-column: center-start / center-end !important;
  `}
  ${respond.pc.min`
    grid-row: 2 / span 1;
    grid-column: col-start 5 / center-end;
    height: 90vh;
    padding-top: 0vh;   
  `}
`;

export const Heading = styled.div`
  ${fonts.mixins.heroHeader}
  color: ${colors.secondary.darkest};
  letter-spacing: 0px;
  font-style: normal;
  overflow-wrap: break-word;
  word-break: break-word;
  text-rendering: optimizeLegibility;
  
  padding-top: clamp(6rem, 20vw, 20vw);
  padding-left: clamp(3rem, 10vw, 10vw);
  font-size: clamp(2.5rem, 8.3vw, 8.3vw);
  line-height: clamp(3rem, 10vw, 10vw);
  width: 100%;
  display: block;
  position: relative;

  ${respond.mobile.large`
    padding-top: clamp(5.4rem, 10vw, 10vw);   
  `}
  ${respond.mobile.max`
    padding-left: 0; 
  `}
  ${respond.pc.min`
    font-size: clamp(4rem, 4vw, 4vw);
    line-height: clamp(5rem, 5vw, 5vw);
  `}
`;

export const TEXT = styled.span`
  display: block;
  ${'' /* height: clamp(40px, 6.666vw, 16.666vw); */}
  ${fonts.mixins.text};
  width: 100%;
  
  color: ${colors.neutrals.darkest};
  letter-spacing: 0px;
  font-style: normal;
  overflow-wrap: break-word;
  word-break: break-word;
  text-rendering: optimizeLegibility;
  line-height: ${sizes.lineHeight.large};
  font-family: "Lato", sans-serif;
  font-family: "Open Sans", sans-serif;
  font-family: "Roboto Condensed", sans-serif;
  font-family: "Open Sans Condensed", sans-serif;
  font-family: "EB Garamond", serif;
  font-family: "Cabin", sans-serif;
  font-family: "Roboto Slab", serif;
  font-family: "Poppins", sans-serif;

  font-weight: 200;
  font-size: clamp(10px, 3.333vw, 3.333vw);
  padding-left: clamp(32px, 10.666vw, 10.666vw);

  ${respond.mobile.max`
    padding-left: clamp(3px, 0.5vw, 0.5vw);
  `}
`;


export const HeroHeaderLottie = styled(Lottie)`
  background-color: lightgreen;
`;


export const Behind = styled.span`
  z-index: 5 !important;
  position: relative;
  ${"" /* position: fixed; */}
  ${"" /* z-index: 100 !important; */}
  ${"" /* color: pink; */}
`;
export const Front = styled.span`
  z-index: 15 !important;
  position: relative;
  ${"" /* position: fixed; */}
  ${"" /* z-index: 100 !important; */}
  ${"" /* color: pink; */}
`;

export const Skill_1 = styled.span`
  ${events.mixins.onHover.palePink};
  ${mixins.flex.inlineCenter};
  flex: 0 0 20%;
  animation: ${background_change(colors.palePink)} 3s 2s infinite;
  ${'' /* width: 60px;
  height: 50px; */}

  &:hover {
    background-color: ${colors.palePink};
  }
`;

export const Skill_2 = styled.span`
  ${events.mixins.onHover.palePink};
  ${mixins.flex.inlineCenter};
  flex: 0 0 25%;
  animation: ${background_change(colors.paleYellow)} 3s 3.5s infinite;
  ${"" /* width: 60px;
  height: 50px; */}

  &:hover {
    background-color: ${colors.paleYellow};
  }
`;
export const Skill_3 = styled.span`
  ${events.mixins.onHover.palePink};
  ${mixins.flex.inlineCenter};
  flex: 0 0 19.75%;
  animation: ${background_change(colors.paleBlue)} 3s 5s infinite;
  ${"" /* width: 60px;
  height: 50px; */}

  &:hover {
    background-color: ${colors.paleBlue};
  }
`;
export const SkillTotal = styled.div`
  display: flex;
  flex-wrap: nowrap;
  ${"" /* overflow-wrap: break-word; */}
  overflow-wrap: normal;
  ${"" /* word-break: keep-all;
  word-break: break-word; */}
  word-break: normal;
  width: clamp(180.467px, 60.155666vw, 60.155666vw);
  justify-content: flex-start;
  justify-content: space-between;
  align-items: center;
  ${"" /* width: 200px !important; */}
`;




export const BackgroundFigure = styled.div`
  transition: all 1s ;
  animation: ${hoverOff} 1s infinite linear;
  position: absolute;
  height: clamp(5.6rem, 18.333vw, 18.333vw);
  width: 100%;
  z-index: -1;
  background-color: ${colors.accent.lightest};
  border-top-right-radius: 130%;
  border-bottom-right-radius: 150%;
  border-top-left-radius: 180%;
  border-bottom-left-radius: 140%;
`;

export const Button = styled.div`
  justify-self: flex-start;
  align-self: flex-start;

  position: relative;
  width: clamp(129.467px, 43.155666vw, 43.155666vw);
  height: clamp(5.6rem, 18.666vw, 18.666vw);

  ${'' /* margin-top: 1.5rem; */}
  margin-top: clamp(15px, 5vw, 5vw);
  margin-left: clamp(32px, 10.666vw, 10.666vw);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: none;
  background: transparent;
  transition: transform 1s;

  padding-left: 1vw;
  font-family: "Poppins", sans-serif;
  font-size: clamp(0.9rem, 3vw, 3vw);
  font-weight: 200;
  font-style: normal;
  letter-spacing: 0px;
  overflow-wrap: break-word;
  word-break: break-word;
  text-rendering: optimizeLegibility;

  border-top-right-radius: 130%;
  border-bottom-right-radius: 150%;
  border-top-left-radius: 180%;
  border-bottom-left-radius: 140%;

  cursor: pointer;

  p {
    padding-left: clamp(0.9rem, 3vw, 3vw);
    align-self: flex-start;
    background: transparent;
  }

  &:hover {
    & ${BackgroundFigure} {
      animation: ${bubbleGum} 2.5s infinite linear;
    }
  }

  &:active {
    & ${BackgroundFigure} {
      animation: ${bubbleGum} 2.5s infinite linear;
      background-color: ${colors.neutrals.darkest};
      background-color: ${colors.secondary.darkest};
    }

    transform: translateY(1.666666vw);
    outline: none;
  }

  ${respond.mobile.max`
    margin-left: clamp(3px, 0.5vw, 0.5vw);
  `}
  span {
    font-family: "Rubik Mono One", Cambria, "Times New Roman", Times, sans-serif;
    font-weight: 400;
    color: ${colors.secondary.lighter};
    color: ${colors.shadows.light};
    color: ${colors.neutrals.light};
  }
  &,
  &:link,
  &:visited {
    color: ${colors.neutrals.lighter};
    text-transform: uppercase;
    text-decoration: none;
  }
  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10px;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
  }
`;

export const HeroHeaderContainer = styled.header`
  grid-column: center-start / center-end;
  height: 90vh;
  justify-items: start;
  display: grid;
  grid-template-columns: repeat(2, [col-start] 1fr [col-end]);
`;


export const Heart = styled(HeartSVG)`
  width: 24px;
  height: 24px;
`;
export const SvgIcon = styled(MyIcon)`
  position: absolute;
  z-index: 10000000;
  width: clamp(1.8rem, 6vw, 6vw);
  height: clamp(1.8rem, 6vw, 6vw);
  top: clamp(1rem, 3.333vw, 3.333vw);
  right: clamp(0.9rem, 3vw, 3vw);
  right: clamp(0.7rem, 2.333333vw, 2.33333vw);
  fill: ${colors.neutrals.lightest};
`;

export const CustomSVG = styled.iframe`
  width: 7px;
  height: 7px;
  fill: ${colors.secondary.darkest};
  color: blue;
`;

export const NewSVG = styled.svg`
  width: 3px;
  height: 3px;
  fill: currentColor;
  fill: ${colors.secondary.darkest};
`;