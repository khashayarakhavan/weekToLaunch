import styled from 'styled-components';

export const LandingPageContainer = styled.div`
         
         display: grid;
         grid-template-rows: 80vh min-content min-content minmax(40rem, min-content) repeat(
             4,
             min-content
           );
         ${'' /* grid-template-rows: 80vh 100rem; */}
         grid-template-columns: [sidebar-start] 8rem [sidebar-end full-start] minmax(
             6rem,
             1fr
           ) [center-start] repeat(
             8,
             [col-start] minmax(min-content, 12rem) [col-end]
           ) [center-end] minmax(6rem, 1fr) [full-end];
         
       `;

export const VegeloperContainer = styled.div`
  background: linear-gradient(
    -180deg,
    rgb(242, 243, 247),
    rgb(234, 241, 249),
    rgb(234, 241, 249),
    rgb(242, 143, 247),
    rgb(242, 243, 147),
    rgb(242, 143, 147)
  );
`;