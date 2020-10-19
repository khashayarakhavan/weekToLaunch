//Basics
import { Link } from "react-router-dom";
//Libraries
import styled , {css , keyframes} from "styled-components";
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

//Assets



//Code


export const InheritedBody = styled.div`
  font-family: brandon-grotesque, HelveticaNeue-Light, "Helvetica Neue Light",
    "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #545454;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
      margin: 0;
`;
export const inheritedHtml = styled.div`
    font-size: 62.5%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;
export const Article = styled.article`
  display: block;

  header {
    background: 0 0;

    h2 {
      color: #1e836c;
      text-align: center;
      font-size: 3.8em;
      font-weight: 400;
    }
  }
`;
export const Figure = styled.figure`
  display: block;
  max-width: 150px;
  margin: 0;
`;

export const WhatIDo = styled.section`
  //What_I_Do
  z-index: 980;
  position: relative;
  background: #fff;
  padding: 0;
  @media (min-width: 992px) {
    padding: 3em 0;
  }
`;
export const SkillsContainer = styled.div`
  //Container
  transition: all 0.5s ease-in-out;
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;

  @media (min-width: 768px) {
    max-width: 750px;
  }
  @media (min-width: 992px) {
    max-width: 970px;
  }

  &::before,
  &::after {
    content: " ";
    display: table;
    box-sizing: border-box;
  }
  
  &::after {
    clear: both;
  }
  
  &::selection {
    background: #e0ebe8;
    color: #545454;
    text-shadow: none;
  }
`;

export const Row = styled.div`
  margin-left: -15px;
  margin-right: -15px;

  &::before,
  &::after {
    content: " ";
    display: table;
    box-sizing: border-box;
  }

  &::after {
    clear: both;
  }

  @media (min-width: 992px) #what-i-do #design {
    text-align: left;
    margin: 3em 0 6em;
  }
`;
export const ColMd12 = styled.div`
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;

  @media (min-width: 992px) {
    width: 100%;
  }

`;
export const ColMd4 = styled.div`
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;

  @media (min-width: 992px) {
    width: 33.33333333%;
    margin-left: 8.33333333%;
  }
`;
export const ColMd6 = styled.div`
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;

  @media (min-width: 992px) {
    float: left;
    width: 50%;
  }
`;
export const ColMd6_Pull3 = styled(ColMd6)`
  right: 25%;
`;


export const DesignRow = styled(Row)`
  text-align: left;
  margin: 3em 0 6em;
`;

export const HomeDesign = styled.div`
  margin: 0 auto;
  ${'' /* background-image: url(../../../assets/icon/line-bg.png); */}
  background-image: url("../../../assets/icon/line-bg.png");
  

  background-position: center center;
  background-repeat: repeat-x;
  position: relative;
`;

export const Image = styled.img`
  vertical-align: middle;
  border: 0;
  width: 100%;
`;
export const Image2 = styled(Image)`
  @media (min-width: 992px) {
    margin-right: -30px;
  }
  float: right;
  max-width: 180px;
`;
export const BubbleRight = styled.div`
  background: #f3f2f1;
  width: 77px;
  height: 77px;
  -webkit-border-radius: 60px;
  -moz-border-radius: 60px;
  border-radius: 60px;
  position: absolute;
  overflow: hidden;
  top: 2.6em;
  right: 0;
`;
export const BubbleLeft = styled.div`
  background: #f3f2f1;
  width: 77px;
  height: 77px;
  -webkit-border-radius: 60px;
  -moz-border-radius: 60px;
  border-radius: 60px;
  position: absolute;
  overflow: hidden;
  top: 2.6em;
  left: 0;
`;


export const Bubblinger = css`
  -webkit-animation-duration: 20s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: cubic-bezier(1, 0, 0, 1);
  -moz-animation-duration: 20s;
  -moz-animation-iteration-count: infinite;
  -moz-animation-timing-function: cubic-bezier(1, 0, 0, 1);
  animation-name: bubblinger-vert-down;
  animation-duration: 20s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(1, 0, 0, 1);
`;
export const Translate = keyframes`
  0% {
    transform: translateY(-300px);
    
  }
  25% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(250px);
  }
  75% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-250px);
  }
`;

export const DesignIconVert = styled.div`
  ${"" /* ${Bubblinger};  */}
  ${"" /* animation:  ${Translate} 5s ease infinite; */}
  ${
    "" /* &:active {
    transform: translateY(50px);
    transition: transform 0.25s ease; */
  }
  }
  animation: fourSkills 7s cubic-bezier(1, 0, 0, 1) infinite ; // steps(50)
  border-radius: 60px;
  -webkit-border-radius: 60px;
  -moz-border-radius: 60px;
  width: 77px;
  height: 77px;

  background-image: url(https://res.cloudinary.com/khashi-dev/image/upload/v1603146036/react-style-firebase_qyez2a.png);
  background-image: url(https://res.cloudinary.com/khashi-dev/image/upload/v1603146749/4-skills_fz1ley.png);
  background-repeat: no-repeat;
  ${"" /* background-position: center; */}

  @keyframes cyclist {
    0% {
      background-position: 0 0px;
    }
    25% {
      background-position: 0 -160px; //this should be cleaned up, my sprite sheet is 202px by accident, it should be 200px
    }
    50% {
      background-position: 0 0px;
    }
    75% {
      background-position: 0 -80px;
    }
    100% {
      background-position: 0 0px;
    }
  };

  @keyframes fourSkills {
    0% {
      background-position: 0 0px;
    }
    25% {
      background-position: 0 -75px; //this should be cleaned up, my sprite sheet is 202px by accident, it should be 200px
    }
    50% {
      background-position: 0 -150px;
    }
    75% {
      background-position: 0 -225px;
    }
    80% {
      background-position: 0 0px;
    }
    100% {
      background-position: 0 0px;
    }
  }
  
`;

export const DevIconVert = styled.div`
  border-radius: 60px;
  -webkit-border-radius: 60px;
  -moz-border-radius: 60px;
  width: 77px;
  height: 77px;
  animation: fourSkills 7s cubic-bezier(1, 0, 0, 1) infinite; // steps(50)

  background-image: url(https://res.cloudinary.com/khashi-dev/image/upload/v1603150550/GCP-AWS-Heroku-DO2_eogbkt.png);

  @keyframes threeSkills {
    0% {
      background-position: 0 0px;
    }
    25% {
      background-position: 0 -75px; //this should be cleaned up, my sprite sheet is 202px by accident, it should be 200px
    }
    50% {
      background-position: 0 -150px;
    }
    75% {
      background-position: 0 0px;
    }
  }

  @keyframes fourSkills {
    0% {
      background-position: 0 0px;
    }
    25% {
      background-position: 0 -75px; //this should be cleaned up, my sprite sheet is 202px by accident, it should be 200px
    }
    50% {
      background-position: 0 -150px;
    }
    75% {
      background-position: 0 -225px;
    }
    80% {
      background-position: 0 0px;
    }
    100% {
      background-position: 0 0px;
    }
  }
`;
export const Deets = styled.div`
  padding: 0 0 0 2em;

  h3 {
    padding: 0 0 1em;
    margin: 0;
    font-size: 2em;
    color: #45b29a;
  }

  p {
    margin: 0 0 10px;
    font-family: adobe-garamond-pro, HelveticaNeue-Light, "Helvetica Neue Light",
      "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-weight: 300;
    font-size: 1.5em;
  }
`;
export const Develop = styled(Row)`
  text-align: left;
  margin: 3em 0;
`;
export const MdPush7 = styled(ColMd4)`
  @media (min-width: 992px) {
    left: 58.33333333%;
  }
`;
export const HomeDev = styled.div`
  margin: 0 auto;
  background-image: url(../../../assets/icon/line-bg.png);
  background-position: center center;
  background-repeat: repeat-x;
  position: relative;
  min-height: 155px;
  float: right;
  width: 100%;
  max-width: 180px;
`;









