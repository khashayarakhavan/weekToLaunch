import styled from "styled-components";
import {respond} from '../../../../design/responsive';
import shadows from '../../../../design/shadows.styles.jsx';
import colors from '../../../../design/colors';



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
    width: clamp(50vw, 50vw, 150px);
    width: 15rem;
    padding: 3rem 1rem;
    text-align: center;
    border-radius: 15px;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.22);
    ${shadows.mixins.neumorphic.original}
    ${"" /* background-color: rgba(255, 255, 255, 0.8); */}
    transition: transform 0.4s;
    transition: all 0.4s;
  }
  i {
    margin-bottom: .5rem;
    display: inline-block;
    background-image: linear-gradient(to right, #f7bf7b, #B28451);
    background-image: linear-gradient(to right, ${colors.accent.darkest}, ${
  colors.accent.darkest
});
    -webkit-background-clip: text;
    color: transparent;
  
  }
  h3 {
    font-size: clamp(10px, 3vw, 3vw);
    font-family: "Rubik Mono One",  Cambria, "Times New Roman", Times, sans-serif;
    font-size: 15px;
  }
  p {
     ${"" /* text-align: justify;
    text-justify: inter-word;  */}
    font-size: clamp(10px, 3vw, 30px);
    font-size: 10px;
      
  }
  ${
    "" /* @media only screen and (max-width: 56.25em) {
    & {
      padding: 2rem;
    }
  } */
  }
  &:hover {
    background: ${colors.neutrals.lighter};
    transform: translateY(-1rem) scale(1.05);
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.52);
    box-shadow: 4px 4px 10px 0px  ${colors.shadows.dark},
           -4px -4px 10px 0px ${colors.highlights.lightest};
  }
  &__icon {
    font-size: 4rem;
    margin-bottom: 0.5rem;
    display: inline-block;
    background-image: linear-gradient(to right, #6bb2db, #094e7c);
    -webkit-background-clip: text;
    color: transparent;
  }
  ${
    "" /* @media only screen and (max-width: 56.25em) {
    &__icon {
      margin-bottom: 0;
    } */
  }
`;