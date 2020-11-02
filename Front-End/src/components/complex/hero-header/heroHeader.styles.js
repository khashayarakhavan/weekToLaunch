//Libraries
import styled, {css} from "styled-components";
//Mixins
import mixins from '../../../design/mixins.styles';
//Designs
import fonts from '../../../design/fonts.styles';
import colors from '../../../design/colors';
import sizes from '../../../design/sizes';
import shadows from '../../../design/shadows.styles';
import events from '../../../design/events.styles';
import {background_change} from '../../../design/motions.styles';

import Lottie from "react-lottie";
//Assets
import {AnimationCreateRobot} from '../../../design/animations.styles';



//Code
export const HeroHeaderContainer = styled.header`
  grid-column: center-start / center-end;
  height: 90vh;  
  justify-items: start;
  display: grid;
  grid-template-columns: repeat(2, [col-start] 1fr [col-end]);

  @media (max-width: 1100px) {
    
  }

`;

export const HeroHeaderLeft = styled.div`
  grid-column: center-start / col-end 4;
  height: 80vh;
  padding-top: 10vh;
  ${"" /* max-height: 90vh; */}
  max-width: 100%;
  ${"" /* background-color: lightblue; */}
    background-color: red;

  @media (max-width: 1100px) {
    grid-column: center-start / center-end;
    height: 80vh;
    padding-top: 10vh;
    ${"" /* padding: 3rem; */}
  }

  ${"" /* padding-top: 30vh; */}
  ${"" /* @media (max-width: 1100px) {
    grid-row-start: 2;
    max-height: 50rem;
  } */}
`;
export const HeroHeaderRight = styled.div`
  grid-column: col-start 5 / center-end;
  background-color: blue;
  height: 80vh;
  ${"" /* max-height: 90vh; */}
  padding-top: 10vh;
  max-width: 100%;
  ${"" /* background-color: red; */}

  @media (max-width: 1100px) {
    grid-column: center-start / center-end;
    grid-row: 2 / 3;
    height: 80vh;
    padding-top: 5vh;
  }

  ${"" /* padding-top: 20rem; */}
  ${"" /* @media (max-width: 1100px) {
    grid-row-start: 1;
    max-height: 50rem;
  } */}
`;
export const HeroHeaderLottie = styled(Lottie)`


  ${'' /* margin-top: 10vw; */}
  background-color: lightgreen;
 
  ${"" /* padding-right: 5rem; */}
`;

export const TEXT = styled.span`
  ${fonts.mixins.text};
  color: ${colors.primary};
  margin-left: ${sizes.margin.smaller};
  ${'' /* margin-top: ${sizes.margin.largest} ; */}
  ${'' /* margin-top: 6vw; */}
  ${'' /* margin-bottom: ${sizes.margin.large}; */}
  line-height: ${sizes.lineHeight.large} ;
  display:block;
`;

export const H1 = styled.span`
  ${fonts.mixins.heroHeader};
  font-size-adjust: 0.9; 
  color: ${colors.primary};
  ${'' /* line-height: ${sizes.lineHeight.extraLarge}; */}
  line-height: 8vw;
  ${'' /* margin-bottom: ${sizes.margin.large};
  margin-block-end: ${sizes.margin.large}; */}
  ${'' /* margin-bottom: 3vw; */}
  display: block;

  @media (max-width: 500px) {
    font-size: 4.25rem;
  };
  @media (max-width: 400px) {
    font-size: 3.75rem;
  };
  @media (max-width: 350px) {
    font-size: 3.25rem;
  };
  @media (max-width: 300px) {
    font-size: 2.75rem;
  };
  @media (max-width: 250px) {
    font-size: 2.25rem;
  };
  @media (max-width: 200px) {
    font-size: 1.75rem;
  };
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

export const Button = styled.div`
  align-self: flex-start;

  &,
  &:link,
  &:visited {
    ${fonts.mixins.CTA.visitProfile}};
    display: block;
    ${'' /* line-height: 2.5rem !important; */}
    ${'' /* margin-top: 2rem !important; */}
    margin-bottom: 5rem !important;
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