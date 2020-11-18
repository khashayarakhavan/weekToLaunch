//Libraries
import styled from 'styled-components';
import colors from '../../design/colors';

//Design
import {respond} from '../../design/responsive';



//Code
export const VegeloperContainer = styled.div`
  position: relative;
  display: grid;
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

  grid-template-rows:
    [first-line] repeat(10, [row-start] min-content [row-end])
    [last-line];
  
  ${'' /* grid-auto-rows: min-content; */}

  grid-template-columns:
    [cover-start leftSide-start] 1vw [leftSide-end full-start] 1vw [center-start] repeat(
      8,
      [col-start] minmax(min-content, 1fr) [col-end]
    )
    [center-end] 1vw [full-end rightSide-start]
    1vw
    [rightSide-end cover-end];

  ${respond.mobile.max`
    grid-template-columns: [cover-start leftSide-start] 1vw [leftSide-end full-start] 9vw [center-start] repeat(
      8,
      [col-start] minmax(min-content, 1fr) [col-end]
    ) [center-end] 9vw [full-end rightSide-start]
    1vw
    [rightSide-end cover-end];
  `}

  ${respond.pc.min`
    grid-template-columns: [cover-start leftSide-start] minmax(1vw, 1fr) [leftSide-end full-start] 9vw [center-start] repeat(8, [col-start] minmax(min-content, 1fr) [col-end]) [center-end] 9vw [full-end rightSide-start]
     minmax(1vw, 1fr)
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



export const ScrollContainerFlex = styled.div`
  margin: 5px;
  width: 300px;
  width: 100vw;
  height: 100px;
  border: 2px solid #341c09;
  white-space: nowrap;
  grid-column: full-start/ full-end;
  font-size: 20px;
  background-color: lime;

  display: flex;
  flex-wrap: nowrap;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 20px;
    height: 20px;
  }

  &::-webkit-scrollbar-button {
    width: 20px;
    height: 20px;
  }
`;

export const ScrollItemFlex = styled.div`
  border: 2px solid #b85b14;
  background-color: #fc7307;
  width: 120px;

  flex: 0 0 auto;
`;

























































export const ScrollContainer = styled.div`
  ${"" /* display: flex;
  grid-row: 5 / span 1; */}

  grid-column: full-start/ full-end;
  font-size: 20px;
  background-color: lime;

  position: relative;
  top: -30px; // Hide the horizontal scrollbar.
  left: 0;
  width: 1000px;
  ${"" /* width: 10vw; */}
  height: calc(100vw);
  height: calc(30vh);
  ${"" /* height: calc(10vh); */}

  overflow: scroll;
  transform: rotate(-90deg);
  transform-origin: center calc(50vh);

  &::-webkit-scrollbar {
    width: $scrollBarHeight;
    height: $scrollBarHeight;
  }

  &::-webkit-scrollbar-button {
    width: $scrollBarHeight;
    height: $scrollBarHeight;
  }
`;

export const Child = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em auto;
  padding: 2em;
  width: 100px;
  height: 50px;
  transform: rotate(90deg);
  border: 1px solid #333;
  box-shadow: 3px 3px 6px rgba(#333, 0.3);
  text-align: center;
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



export const HorizontalScroll = styled.div`
  $finalHeight: 50px;
  $finalWidth: 3 * $finalHeight;
  $scrollBarHeight: 10px;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: calc(#{$finalHeight} + #{$scrollBarHeight});
  max-height: $finalWidth;
  margin: 0;
  padding-top: $scrollBarHeight;
  background: #abc;
  overflow-y: hidden;
  overflow-x: auto;
  transform: rotate(90deg) translateY(-$finalHeight);
  transform-origin: right top;
  & > div {
    display: block;
    padding: 5px;
    background: #cab;
    transform: rotate(90deg);
    transform-origin: right top;
  }

  padding: $finalHeight 0 0 0;
  & > div {
    width: $finalHeight;
    height: $finalHeight;
    margin: 10px 0;
  }
`;