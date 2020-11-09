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

export const H1 = styled.div`
  ${fonts.mixins.heroHeader};
  font-size: 4vmax;
  width: 100%;
  color: ${colors.primary};
  display: block;
  line-height: 4vmax;
  position: relative;

  ${'' /* p {
    z-index: 20;
    
  }

  p > span {
    color: green !important;
    z-index: 5 !important;
    position: relative;
    display: inline-block;
  } */}

  ${respond.mobile.small`
  font-size: 5vmax;
  line-height: 5vmax;
  `}
  ${respond.pc.min`
  font-size: 4vmax;
  line-height: 4vmax;
  `}
  ${respond.pc.large`
  font-size: 3vmax;
  line-height: 3vmax;
  `}
`;


export const HeroHeaderLeft = styled.div`
  position: relative;
  ${"" /* z-index: 100  !important; */}
  height: 50vh;
  ${'' /* background: red; */}
  max-width: 100%;
  padding-top: 15vh;
  padding-left: 2rem;
  overflow: visible !important;
  grid-column: center-start / center-end;
  grid-row: 2 / 3;

  ${respond.mobile.large`
    grid-row: 3 / 4;
  `}
  ${respond.pc.min`
    grid-column: center-start / col-end 4;
    grid-row: 2 / 3;
    height: 70vh;
    margin-left: 6rem !important;
    
  `}
`;









export const HeroHeaderRight = styled.div`
  grid-column: center-start / center-end;
  ${"" /* background-color: pink; */}
  grid-row: 1 / 2;
  height: min-content;
  ${"" /* margin-top: 5vh; */}
  ${"" /* margin-top:  */}
  ${"" /* width: 60vw; */}
  position: relative;
  z-index: 10 !important;

  ${"" /* width: content; */}
  ${"" /* background: blue; */}
  ${"" /* padding-top: 5vh; */}
  ${"" /* padding-top: 20vh; */}
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  ${"" /* background: blue; */}

  & > * {
    justify-self: flex-start;
    align-self: flex-start;
    overflow: visible !important ;
    z-index: 100 !important;
    position: relative;
  }
  svg {
    overflow: visible !important;
  }

  ${respond.mobile.medium`
    ${"" /* height: 50vh; */}
  `}

  ${respond.mobile.large`
    height: min-content;
    grid-row: 2/3;
    padding-top: 0vh;
  `}
  ${respond.pc.min`
    grid-row: 2 / 3;
    grid-column: col-start 5 / center-end;
    height: 70vh;
    padding-top: 0vh;    
    margin-left: -80px !important;
  `}

 
  ${respond.pc.small`
    
    margin-left: -100px !important;
    
  `}
`;
export const HeroHeaderLottie = styled(Lottie)`
  background-color: lightgreen;
`;

export const TEXT = styled.span`
  ${fonts.mixins.text};
  color: ${colors.primary};
  max-width: 95%;
  margin-left: ${sizes.margin.smaller};
  ${'' /* margin-top: ${sizes.margin.largest} ; */}
  ${'' /* margin-top: 6vw; */}
  ${'' /* margin-bottom: ${sizes.margin.large}; */}
  line-height: ${sizes.lineHeight.large} ;
  display:block;
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
  animation: ${background_change(colors.palePink)} 3s 2s infinite;
  width: 60px;
  height: 50px;

  &:hover {
    background-color: ${colors.palePink};
  }
`;

export const Skill_2 = styled.span`
  ${events.mixins.onHover.palePink};
  ${mixins.flex.inlineCenter};
  animation: ${background_change(colors.paleYellow)} 3s 3.5s infinite;
  width: 60px;
  height: 50px;

  &:hover {
    background-color: ${colors.paleYellow};
  }
`;
export const Skill_3 = styled.span`
  ${events.mixins.onHover.palePink};
  ${mixins.flex.inlineCenter};
  animation: ${background_change(colors.paleBlue)} 3s 5s infinite;
  width: 60px;
  height: 50px;

  &:hover {
    background-color: ${colors.paleBlue};
  }
`;
export const SkillTotal = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  ${'' /* align-content: flex-end; */}
  align-items: center;
  ${'' /* wrap: none; */}
`;

export const Button = styled.div`
  align-self: flex-start;

  &,
  &:link,
  &:visited {
    ${fonts.mixins.CTA.visitProfile}};
    display: block;
    ${'' /* line-height: 2.5rem !important; */}
    ${'' /* margin-top: 2rem !important; */}
    margin-bottom: 10rem !important;
    margin-right: 2rem !important;
    margin-block-end: 2rem !important;
    text-transform: uppercase;
    text-decoration: none;
    padding: 0rem 3rem;
    display: inline-block;
    border-radius: 1rem;
    transition: all 0.4s;
    position: relative;
    border: none;
    cursor: pointer;
    color: #094e7c;
    ${shadows.mixins.neumorphic.original};
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