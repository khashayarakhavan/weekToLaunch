// Library: Styled-components 
// Example: Using static and dynamic props.
// Use-Case: Creating styles using JS instead of SASS.
// Edge: Dynamically scalable, Create re-usable components with files.

// Beginning of Styled-components example:
const Constant = styled.div.attrs((props) => ({
  localShadow: "grey", // Define static props.
  size: props.size || "1em",
  foreground: props.theme.foreground || "green", // Define dynamic props.
}))`
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background-color: ${(props) => props.localShadow}; /* Static props */
  color: ${(props) => props.foreground}; /* Dynamic props */
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;
// Here is the End of Styled-component example.

// NOTE: PURE CSS device detect 
/* smartphones, touchscreens */
@media (hover: none) and (pointer: coarse) {
    /* ... */
}/* stylus-based screens */
@media (hover: none) and (pointer: fine) {
    /* ... */
}/* Nintendo Wii controller, Microsoft Kinect */
@media (hover: hover) and (pointer: coarse) {
    /* ... */
}/* mouse, touch pad */
@media (hover: hover) and (pointer: fine) {
    /* ... */
}

// Responsive growth Rate using VW and VH css units.
html {
  // Minimum 16x, and grows more slowly 
  // (half the rate of screen growth)
  font-size: calc(1em + 0.5vw);
  
  // Line-height based on font-size,
  // with addition viewport-relative growth
  line-height: calc(1.1em + 0.5vw);
  margin: 0.5em;
}

h1 {
  // Grows more quickly, 
  // allowing for wider variation on larger screens
  font-size: calc(1.5rem + 1.5vw);
}

h2 {
  // Based on the root text-size,
  // and therefor growing at the same rate
  font-size: 1.25rem;
}


h1, h2 {
  font-weight: bold;
}

h1, h2, p {
  margin: .5em 0;
}


    &__text {
      font-size: 1.7rem;
     
      ${'' /* line-height: 0.8em; */}
      ${'' /* NOTE: justify text options */}
      text-align: justify;
      text-align-last: center;
      text-justify: inter-character;
      ${'' /* text-justify: inter-character; */}
      
      ${'' /* align-self: start; */}
    }


// 
$colors: rgb(248, 248, 248), rgb(238, 238, 238), rgb(250, 250, 250), rgb(207, 207, 207), rgb(245, 245, 245), rgb(212, 212, 212);

body, html {
    height: 100%;
}

body {
    margin: 0;
    font-family: 'Montserrat';
}

h1 {
    margin: 5rem;
}

main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
    //grid-gap: 1rem;
    cursor: pointer;

    .card {
        
        transition: transform 1s;
        
        @for $i from 1 through 6 {
            &hover:nth-of-type(#{$i}) {
                background: nth($colors, $i);
            }  
        }

        &:hover {
            transform: translateY(-10px);
        } 

        .info {
            padding: 1rem;
            //display: none;
        }
    
        img {
            width: 100%;
        }

        .desc {
            color: gray;
        }
    }
}



/* 
* how to import SVG in React.js
*/
export const SearchBox = ({ toggleCartHidden, itemCount }) => (
         <SearchContainer>
           {/* -- Style 1 how to import SVG: direct SVG file & edit partly using Sass -- */}
           <CrownIcon className="nanai-icon" onClick={toggleCartHidden} />

           {/* -- Style 2 to import SVG: SVG file inside StyledComponents -- */}
           <StarIcon />

           {/* -- Style 3 to import SVG: using Sprite bundle + StyledComponents "Recommended Method" -- */}
           <SVG onClick={toggleCartHidden}>
             <use href={sprite + "#icon-trophy"} />
           </SVG>
         </SearchContainer>
       );



       //TODO: Golden effect
       background-image: linear-gradient(to right, #f7bf7b, #b28451);