//Libraries
import styled from 'styled-components';
import colors from '../../design/colors';

//Design
import {respond} from '../../design/responsive';



//Code
export const VegeloperContainer = styled.div`
  display: grid;
  position: relative;
  background-size: cover;
  background: linear-gradient(
    -180deg,
    rgb(242, 243, 247),
    rgb(242, 223, 247),
    rgb(234, 241, 249),
    rgb(242, 223, 247),
    rgb(242, 223, 237),
    rgb(234, 241, 249)
  ); 
  ${'' /* background: linear-gradient(
    -180deg,
    ${colors.highlights.lighter},
    ${colors.highlights.light},
    ${colors.highlights.dark},
    rgb(234, 241, 249),
    rgb(242, 223, 247),
    rgb(242, 223, 237),
    rgb(234, 241, 249)
  ); */}
  grid-template-columns:
    [cover-start full-start center-start] repeat(
      8,
      [col-start] minmax(min-content, 1fr) [col-end]
    )
    [center-end full-end cover-end];

  grid-template-columns:
    [cover-start leftSide-start] 1vw [leftSide-end full-start] 1vw [center-start] repeat(
      8,
      [col-start] minmax(min-content, 1fr) [col-end]
    )
    [center-end] 1vw [full-end rightSide-start]
    1vw
    [rightSide-end cover-end];

  grid-template-rows:
    [first-line] repeat(10, [row-start] min-content [row-end])
    [last-line];

  ${respond.mobile.max`
    grid-template-columns: [cover-start leftSide-start] 1vw [leftSide-end full-start] 9vw [center-start] repeat(
      8,
      [col-start] minmax(min-content, 1fr) [col-end]
    ) [center-end] 9vw [full-end rightSide-start]
    1vw
    [rightSide-end cover-end];
  `}
  ${respond.pc.min`
    grid-template-columns: [cover-start leftSide-start] minmax(2vw, 1fr) [leftSide-end full-start] 5vw [center-start] repeat(8, [col-start] minmax(min-content, 1fr) [col-end]) [center-end] 5vw [full-end rightSide-start]
     minmax(2vw, 1fr)
      [rightSide-end cover-end];
  `}
`;


export const LeftSide = styled.div`
  grid-column: leftSide-start / leftSide-end;
  grid-row: first-line / last-line;
  background: linear-gradient(
    -180deg,
    rgb(242, 243, 247),
    rgb(242, 223, 247),
    rgb(234, 241, 249),
    rgb(242, 223, 237),
    rgb(242, 223, 227),
    rgb(234, 241, 249)
  );
`;

export const RightSide = styled.div`
  grid-column: rightSide-start / rightSide-end;
  grid-row: first-line / last-line;
  background: linear-gradient(
    -180deg,
    rgb(242, 243, 247),
    rgb(242, 223, 247),
    rgb(234, 241, 249),
    rgb(242, 223, 237),
    rgb(242, 223, 227),
    rgb(234, 241, 249)
  );
`;






























export const LandingPageContainer = styled.div`
  display: grid;
  grid-template-rows: 80vh min-content min-content 40rem repeat(3, min-content);
  grid-template-columns:
    [sidebar-start] 8rem [sidebar-end full-start] minmax(6rem, 1fr)
    [center-start] repeat(
      8,
      [col-start] minmax(min-content, 12rem) [col-end]
    ) [center-end] minmax(6rem, 1fr)
    [full-end];

  @include respond(large-2) {
    grid-template-rows: 6rem 80vh min-content min-content 40rem repeat(
        3,
        min-content
      );
    grid-template-columns:
      [full-start] minmax(6rem, 1fr) [center-start] repeat(
        8,
        [col-start] minmax(min-content, 12rem) [col-end]
      )
      [center-end] minmax(6rem, 1fr) [full-end];
  }

  @include respond(medium-1) {
    grid-template-rows:
      6rem calc(100vh - 6rem) min-content min-content minmax(15rem, min-content)
      repeat(5, min-content);
  }
`;


export const SampleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(10rem, 1fr)) [last-col] 35%;
  grid-template-rows: [first-line] repeat(10, auto) [last-line];
`;