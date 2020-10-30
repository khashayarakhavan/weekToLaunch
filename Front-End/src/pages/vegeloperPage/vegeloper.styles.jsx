import styled from 'styled-components';

export const LandingPageContainer = styled.div`
  ${'' /* display: grid;
  grid-template-rows: 80vh min-content min-content minmax(40rem, min-content) repeat(
      4,
      min-content
    );
  ${"" /* grid-template-rows: 80vh 100rem; */}
  ${'' /* grid-template-columns: [leftMargin-start] 100rem [leftMargin-end full-start] minmax(
             6rem,
             1fr
           ) [center-start] repeat(
             8,
             [col-start] minmax(min-content, 12rem) [col-end]
           ) [center-end] minmax(6rem, 1fr) [full-end]
           [rightMargin-start] 10rem [rightMargin-end]; */} */}
`;
export const LeftSide = styled.div`
  grid-column: leftSide-start / leftSide-end;
 
  grid-row-start: first-line;
  grid-row-end: last-line;
  background-color: lightblue;
`;

export const RightSide = styled.div`
  grid-column: rightSide-start / rightSide-end;
  grid-row: first-line / last-line;
  background-color: pink;
`;

export const SampleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(10rem, 1fr)) [last-col] 35%;
  grid-template-rows: [first-line] repeat(10, auto) [last-line];
`;

export const VegeloperContainer = styled.div`
  display: grid;
  grid-template-rows: [first-line] repeat(10, auto) [last-line];
  ${"" /* grid-template-columns: [sidebar-start] 8rem [sidebar-end full-start] minmax( */}
  grid-template-columns: [leftSide-start] minmax(5rem, 1fr) [leftSide-end full-start] 5vw [center-start] repeat(8, [col-start] minmax(min-content, 12rem) [col-end]) [center-end] 5vw [full-end rightSide-start]
      minmax(5rem, 1fr) 
      [rightSide-end];

  background: linear-gradient(
    -180deg,
    rgb(242, 243, 247),
    rgb(234, 241, 249),
    rgb(234, 241, 249),
    rgb(242, 143, 247),
    rgb(242, 143, 147),
    rgb(242, 243, 147),
    rgb(234, 241, 249)
  );
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