import styled from "styled-components";
import {respond} from '../../../../design/responsive';
import shadows from '../../../../design/shadows.styles.jsx';
import colors from '../../../../design/colors';
import {bubbleGumScale, MiniCardHover, neon} from '../../../../design/motions.styles';



//Code
export const MiniCardsContainer = styled.header`
  grid-column: full-start / full-end;
  padding: 5rem 1rem; 
  ${'' /* background-color: red; */}
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${respond.mobile.max`
  ${'' /* flex-wrap: nowrap; */}
  `}
`;

export const MiniCardContainer = styled.div`
  margin: 4rem 2rem;
  transition: all 0.4s;
`;
export const MiniCard = styled.div`
  display: flex;
  ${"" /* font-family: 'Poppins', sans-serif; 
   font-weight: 400; */}
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
  flex-direction: column;
  justify-items: flex-start;
  overflow-wrap: normal;
  word-wrap: normal;
  word-break: keep-all;
  ${"" /* width: clamp(50vw, 50vw, 150px); */}
  width: 12rem;
  width: 33.33333vw;
  padding: 2rem 1rem 3rem;
  padding: 5.5555555vw 2.7777777vw 8.3333333vw;
  ${"" /* text-align: center; */}
  border-radius: 15px;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.22);
  ${shadows.mixins.neumorphic.original}
  ${"" /* background-color: rgba(255, 255, 255, 0.8); */}
    ${"" /* transition: transform 0.4s; */}
  transition: all 0.4s;
  ${"" /* transition: box-shadow 2.5s; */}
  box-sizing: content-box;

  i {
    ${"" /* margin-bottom: 0.5rem;
    margin-right: 0.5rem; */}
    font-size: 4rem;
    font-size: 11.1111111vw;
    ${"" /* font-size: 11.1111111vw; */}
    line-height: 100%;
    margin-right: 0.5rem;
    display: inline-block;
    background-image: linear-gradient(to right, #f7bf7b, #b28451);
    background-image: linear-gradient(
      to right,
      ${colors.accent.lightest},
      ${colors.accent.darkest}
    );
    -webkit-background-clip: text;
    color: transparent;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    background: ${colors.accent.darkest};
    height: 4px;
    height: 1.1111111vw;
    border: none;
    width: 50%;
    ${'' /* transform: translateX(2px); */}
    ${"" /* transform: translateX(-1rem); */}
    left: 0;
  }
  h3 {
    font-size: clamp(10px, 3vw, 3vw);
    font-size: 15px;
    font-size: 3vw;
    font-family: "Rubik Mono One", Cambria, "Times New Roman", Times, sans-serif;
    line-height: 1.5;
    margin-bottom: 0.4rem;
  }
  p {
    ${"" /* text-align: justify;
    text-justify: inter-word;  */}
    font-size: clamp(10px, 3vw, 30px);
    font-size: 10px;
    font-size: 2.77777777vw;
    text-align: justify;
  }
  ${
    "" /* @media only screen and (max-width: 56.25em) {
    & {
      padding: 2rem;
    }
  } */
  }
  &:hover {
    ${"" /* animation: ${MiniCardHover} 0.5s infinite;  */}
    background: ${colors.neutrals.lighter};
    ${"" /* transform: translateY(-1rem) scale(1.05); */}
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.52);
    box-shadow: 4px 4px 10px 0px ${colors.shadows.dark},
      -4px -4px 10px 0px ${colors.highlights.lightest};
  }
  &:active {
    ${"" /* transition: all 0.4s ; */}
    transition: all 0.4s;
    box-shadow: 4px 4px 10px 0px ${colors.shadows.dark},
      -4px -4px 10px 0px ${colors.accent.lightest};

    box-shadow: ${shadows.neumorphic.original};

    ${"" /* box-shadow: 0px 0px 0px 0px grey; */}
    ${"" /* background: ${colors.neutrals.light}; */}
  }
`;