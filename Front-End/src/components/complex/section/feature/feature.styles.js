import styled from "styled-components";


//Code
export const FeaturesContainer = styled.header`
  
  
  grid-column: center-start / center-end;
  margin: 15rem 0;

 
  @supports (display: grid) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem,auto));
    grid-gap: 1rem;
    align-items: start;
    justify-content: center;
  }
`;

export const Feature = styled.div`
  // reusable modular design
  align-self: stretch;
  font-size: 1.5rem;

  // Graceful degredation
  float: left;
  width: 33.33333%;
  margin-bottom: 6rem;

  @supports (display: grid) {
    width: auto;
    margin-bottom: 0;
  }

  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: minmax(6rem, min-content);
  align-items: start;
  justify-content: center;
  justify-items: center;

  background-color: rgba(182, 125, 144, 0.015);
  grid-row-gap: 0rem;
  grid-column-gap: 1rem;
  line-height: 1.5;

  .feature {
    &__icon {
      fill: $color-primary;
      background-color: green;
      width: 4.5rem;
      height: 4.5rem;
      grid-row: 1 / span 2;
      transform: translateY(-1rem);
      ${'' /* align-self: start; */}
    }

    &__text {
      font-size: 1.7rem;
      ${'' /* align-self: start; */}
    }
  }
`;