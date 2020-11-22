import styled from "styled-components";
import {respond} from '../../../../design/responsive';
import shadows from '../../../../design/shadows.styles.jsx';



//Code
export const MiniCardsContainer = styled.header`
  grid-column: full-start / full-end;
  padding: 10rem 1rem !important; 
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
  ${'' /* margin: 2rem 20rem; */}
  margin: 4rem 2rem;
  ${'' /* flex: 0 0 200px; */}
  
  ${'' /* height: 100vw; */}
  ${"" /* height: clamp(50px, 16.66666vw, 16.66666vw); */}
`;
export const MiniCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    background-color: rgba(255, 255, 255, 0.8);
    overflow-wrap: normal;
    word-wrap: normal;
    word-break: keep-all;   
    
    width: clamp(50vw, 50vw, 150px);
    
    padding: 3rem 1rem;
    text-align: center;
    border-radius: 15px;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.22);
    ${shadows.mixins.neumorphic.original}
    transition: transform 0.4s;
  }
  h3 {
    font-size: clamp(10px, 3vw, 3vw);
  }
  p {
     ${'' /* text-align: justify;
    text-justify: inter-word;  */}
    font-size: clamp(10px, 3vw, 30px);
      
  }
  ${
    "" /* @media only screen and (max-width: 56.25em) {
    & {
      padding: 2rem;
    }
  } */
  }
  &:hover {
    transform: translateY(-1rem) scale(1.05);
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.52);
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