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



//Code

export const HeroHeaderLeft = styled.div`
  grid-row: 2 / span 1;
  position: relative;
  text-rendering: optimizeLegibility;
  overflow-wrap: break-word;
  height: 50vh;
  max-width: 100%;
  z-index: 100;
  ${'' /* background: blue; */}
  grid-column: center-start / center-end;
  display: grid;
  grid-template-rows: min-content min-content minmax(min-content, 1fr);
  margin-top: clamp(50px, 16.6666vw, 16.6666vw);

  ${'' /* align-items: center; */}

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
  width: 70.5%;
  justify-content: flex-start;
  justify-content: space-between;
  align-items: center;
  ${"" /* width: 200px !important; */}
`;


export const Figure = styled.div`
  animation: ${hoverOff} 2.5s linear;
  position: absolute;
  transition: all 2.5s linear;
  @media (hover: none) {
    animation: ${bubbleGum} 2.5s infinite;
  };
  width: 100%;
  height: 100%;

  z-index: -1;
  background-color: ${colors.accent.lightest};
  ${"" /* background-color: red; */}
  ${"" /* z-index: 100000; */}
  border-top-right-radius: 130%;
  border-bottom-right-radius: 150%;
  border-top-left-radius: 180%;
  border-bottom-left-radius: 140%;
  ${"" /* ${shadows.mixins.neumorphic.original}; */}

  ${"" /* will-change: border-top-right-radius, border-bottom-right-radius,
    border-top-left-radius, border-bottom-left-radius; */}
   
    ${"" /* transition: all 3.4s; */}
  ${"" /* ${shadows.mixins.neumorphic.original}; */}
`;


export const Button = styled.div`
  margin-top: 1.5rem;
  transition: all 2.5s ease-out;
  border: none;
  justify-self: flex-start;
  align-self: center;
  margin-left: clamp(3.2rem, 10.666vw, 10.666vw);
  ${"" /* background-color: ${colors.accent.lightest}; */}
  display: flex;
  flex-direction: column;
  justify-content: center;
  letter-spacing: 0px;
  font-style: normal;
  font-size: clamp(0.9rem, 3vw, 3vw);
  overflow-wrap: break-word;
  word-break: break-word;
  text-rendering: optimizeLegibility;
  position: relative;
  width: 46%;
  height: clamp(5.6rem, 18.666vw, 18.666vw);
  border-top-right-radius: 130%;
  border-bottom-right-radius: 150%;
  border-top-left-radius: 180%;
  border-bottom-left-radius: 140%;
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  cursor: pointer;
  align-items: flex-start;
  align-items: center;
  padding-left: 1vw;
  ${"" /* background-color: ${colors.accent.lightest}; */}

  will-change: border-radius;

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
    ${"" /* background-color: ${colors.accent.lightest}; */}
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    ${"" /* opacity: 0; */}
  }
  &:hover {
    background: none;

    & ${Figure} {
      transition: height 2.5s ease-out;
      ${'' /* background-color: ${colors.accent.lightest}; */}
      animation: ${bubbleGum} 2.5s infinite linear;
    }
  }

  &:active {
    outline: none;
    background-color: ${colors.accent.darkest};
    ${"" /* color: rgba(252, 253, 253, 0.87); */}
    transform: translateY(5px);
    ${"" /* box-shadow: 4px 4px 15px 2px rgba(125, 126, 127, 0.42),
      -3px -3px 12px 2px rgba(255, 255, 255, 0.93); */}
  }
`;


export const HeroHeaderContainer = styled.header`
  grid-column: center-start / center-end;
  height: 90vh;
  justify-items: start;
  display: grid;
  grid-template-columns: repeat(2, [col-start] 1fr [col-end]);
`;