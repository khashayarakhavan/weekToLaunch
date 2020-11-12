//Libraries
import styled, {css} from "styled-components";
//Mixins
import mixins from '../../../design/mixins.styles';
//Designs
import fonts from '../../../design/fonts.styles';
import colors from '../../../design/colors';
import sizes from '../../../design/sizes';
import {respond} from '../../../design/responsive';
import shadows from '../../../design/shadows.styles';
import events from '../../../design/events.styles';
import {background_change} from '../../../design/motions.styles';
import Lottie from "react-lottie";
//Assets
import {AnimationCreateRobot} from '../../../design/animations.styles';



//Code

export const HeroHeaderLeft = styled.div`
  position: relative;
  text-rendering: optimizeLegibility;
  overflow-wrap: break-word;
  height: 50vh;
  max-width: 100%;
  z-index: 100;
  ${'' /* background: blue; */}
  grid-column: center-start / center-end;
  grid-row: 2 / span 1;
  display: grid;

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
  padding-top: clamp(60px, 20vw, 20vw);
  padding-left: clamp(30px, 10vw, 10vw);
  font-size: clamp(25px, 8.3vw, 8.3vw);
  line-height: clamp(30px, 10vw, 10vw);

  width: 100%;
  display: block;

  position: relative;
  ${respond.mobile.large`
    padding-top: clamp(54px, 10vw, 10vw);   
  `}
  ${respond.mobile.max`
    padding-left: 0; 
  `}
  ${respond.pc.min`
    font-size: clamp(40px, 4vw, 4vw);
    line-height: clamp(50px, 5vw, 5vw);
  `}
`;

export const TEXT = styled.span`
  ${fonts.mixins.text};
  width: 100%;
  color: ${colors.neutrals.darkest};
  letter-spacing: 0px;
  font-style: normal;
  overflow-wrap: break-word;
  word-break: break-word;
  text-rendering: optimizeLegibility;
  line-height: ${sizes.lineHeight.large};
  display: block;
  font-family: "Lato", sans-serif;
  font-family: "Open Sans", sans-serif;
  font-family: "Roboto Condensed", sans-serif;
  font-family: "Open Sans Condensed", sans-serif;
  font-family: "EB Garamond", serif;
  font-family: "Cabin", sans-serif;
  font-family: "Roboto Slab", serif;
  font-family: "Poppins", sans-serif;

  font-weight: 200;
  font-size: clamp(9px, 3vw, 3vw);
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
  width: 63%;
  justify-content: flex-start;
  justify-content: space-between;
  align-items: center;
  ${"" /* width: 200px !important; */}
`;

export const Button = styled.div`

      display: flex;
      flex-direction: column;
    justify-content: center;
    align-items: center;
 letter-spacing: 0px;
  font-style: normal;
  overflow-wrap: break-word;
  word-break: break-word;
  text-rendering: optimizeLegibility;
  position: relative;
  width: 50%;
  justify-self: center;
  
  background-color: ${colors.neutrals.light};
  background-color: ${colors.highlights.lighter};
  background-color: ${colors.accent.darkest};
  margin-top: 1rem;
  padding: 0rem 1rem;
  ${shadows.mixins.neumorphic.original};
  ${"" /* ${fonts.mixins.CTA.visitProfile};  */}
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  
  span {
font-family: "Rubik Mono One",  Cambria, "Times New Roman", Times, sans-serif;
      font-weight: 400;
      color: ${colors.secondary.lighter};
      color: ${colors.shadows.light};
      color: ${colors.neutrals.light};
  }
  font-size: clamp(9px, 3vw, 3vw);
  ${"" /* font-size: clamp(8px, 2.6vw, 2.6vw); */}
  border: none;
  border-radius: 1rem;
  transition: all 0.4s;
  cursor: pointer;

  &,
  &:link,
  &:visited {
     color: ${colors.neutrals.lighter};
    text-transform: uppercase; 
    text-decoration: none;
  }

  &:hover {
    transform: translateY(-8px);
    background-color:  #F8F8F9;
    box-shadow:  4px 4px 15px 2px rgba(125, 126, 127, 0.42),
           -3px -3px 12px 2px rgba(255, 255, 255, 0.93); 

  &:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  }

  &:active {
    outline: none;
    background-color: #094e7c;
    color: rgba(252, 253, 253, 0.87);
    transform: translateY(-2px);
    box-shadow:  4px 4px 15px 2px rgba(125, 126, 127, 0.42),
           -3px -3px 12px 2px rgba(255, 255, 255, 0.93);
  }
`;





export const HeroHeaderContainer = styled.header`
  grid-column: center-start / center-end;
  height: 90vh;
  justify-items: start;
  display: grid;
  grid-template-columns: repeat(2, [col-start] 1fr [col-end]);
`;