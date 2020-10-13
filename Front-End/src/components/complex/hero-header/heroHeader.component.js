//Baiscs
import React , {useState, useEffect} from 'react';
import {css} from 'styled-components';
//Libraries
import Lottie from "react-lottie";
import  {useViewport} from "../../../design/viewPort";
//State
import { connect } from 'react-redux';
//Selectors
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../../redux/cart/cart.selectors';
import { selectDarkMode } from "../../../redux/themes/themes.selectors";
import { selectCurrentUser } from '../../../redux/user/user.selectors';
//Actions
import { toggleCartHidden } from "../../../redux/cart/cart.actions";
import { toggleDarkMode } from "../../../redux/themes/themes.actions";
import { signOutStart } from "../../../redux/user/user.actions";

//Assets
import {AnimationCreateRobot} from '../../../design/animations.styles';
//Styles
import {
  OnHover_palePink,
  OnHover_paleYellow,
  OnHover_Green,
} from "../../../design/events.styles";
import { Accent_fireOrange , Accent_mateBlue } from '../../../design/effects.styles';
import {
  Button,
  TEXT,
  H1,
  HeroHeaderContainer,
  HeroHeaderLeft,
  HeroHeaderRight,
  HeroHeaderLottie,
  Skill_1,
  Skill_2,
  Skill_3,
} from "./heroHeader.styles";


//Code
// const useViewport = () => {
//   const [widthLottie, setWidthLottie] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleWindowResize = () => setWidthLottie(window.innerWidth);
//     window.addEventListener("resize", handleWindowResize);
//     return () => window.removeEventListener("resize", handleWindowResize);
//   }, []);

//   // Return the width so we can use it in our components
//   return { widthLottie };
// };



const HeroHeaderComponent = (props) => {
  const { width , height} = useViewport();
  const mobileBreak = 500;
  const tabletBreak = 1000;
  const desktopBreak = 1300;
  console.log('this is width: ',width);
  console.log('this is height: ',height);



  // Return the width so we can use it in our components
  const h = `15rem`;
  const w = `150px`;

  var lottieAnimation;

  // if (width < tabletBreak) {
  //   lottieAnimation = (
  //     <HeroHeaderLottie
  //       options={AnimationCreateRobot}
  //       resizeMode="contain"
  //       width={50}
  //       height={50}
  //     />
  //   );
  // } else {
  //   lottieAnimation = (
  //     <HeroHeaderLottie
  //       options={AnimationCreateRobot}
  //       resizeMode="contain"
  //       width={100}
  //       height={100}
  //     />
  //   );
  // }

  return (
    <HeroHeaderContainer id="header">
      <HeroHeaderLeft>
        <H1>
          <p>
            Hi<Accent_fireOrange>.</Accent_fireOrange>
          </p>
          <p>
            I<Accent_mateBlue>’</Accent_mateBlue>m
            <Accent_fireOrange>&nbsp;K</Accent_fireOrange>hashi
          </p>
        </H1>
        <TEXT>
          a full stack web developer and I love &nbsp;
          <Skill_1>coding</Skill_1>, &nbsp;
          <Skill_2>science</Skill_2> &&nbsp;
          <Skill_3>French</Skill_3>
          &nbsp;language!
        </TEXT>
        <Button>
          Pleased to meet you 😊 <br />
          <span>tea or coffee ? </span>
        </Button>
      </HeroHeaderLeft>
      <HeroHeaderRight>
        
          {width < mobileBreak ? (
            <HeroHeaderLottie
              options={AnimationCreateRobot}
              resizeMode="cover"
              width={200}
              height={200}
            />
          ) : (
            <HeroHeaderLottie
              options={AnimationCreateRobot}
              resizeMode="cover"
              width={400}
              height={400}
            />
          )}
        
        {/* {(width < tabletBreak && width > mobileBreak) ? (
          <HeroHeaderLottie
            options={AnimationCreateRobot}
            resizeMode="contain"
            width={300}
            height={300}
          />
        ) : (
          null
        )} */}
        {/* {lottieAnimation} */}
        {/* {width < mobileBreak ? (
          <HeroHeaderLottie
            options={AnimationCreateRobot}
            resizeMode="contain"
            width={50}
            height={50}
          />
        ) : (
          <HeroHeaderLottie
            options={AnimationCreateRobot}
            resizeMode="contain"
            width={1400}
            height={1400}
          />
        )} */}

        {/* height={440} width={440} */}
        {/* <H1>
        <p>
          Hi<Accent_fireOrange>.</Accent_fireOrange>
        </p>
        <p>
          I<Accent_mateBlue>’</Accent_mateBlue>m
          <Accent_fireOrange>&nbsp;K</Accent_fireOrange>hashi
        </p>
      </H1>
      <TEXT>
        a full stack web developer and I love &nbsp;
        <Skill_1>coding</Skill_1>, &nbsp;
        <Skill_2>science</Skill_2> &&nbsp;
        <Skill_3>French</Skill_3>
        &nbsp;language!
      </TEXT>
      <Button>
        Pleased to meet you 😊 <br />
        <span>tea or coffee ? </span>
      </Button> */}
      </HeroHeaderRight>
    </HeroHeaderContainer>
  );}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
  darkMode: selectDarkMode,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
  toggleDarkMode: () => dispatch(toggleDarkMode()),
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(HeroHeaderComponent);
export default (HeroHeaderComponent)
