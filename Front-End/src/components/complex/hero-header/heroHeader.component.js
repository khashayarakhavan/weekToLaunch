//Baiscs
import React from 'react';
//Libraries
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
//Components
// import SectionFeatures from '../../../components/Sections/Features/feature.component';
import SectionFeatures from '../../../components/Sections/Features/sectionFeatures';
//Assets
import {AnimationCreateRobot} from '../../../design/animations.styles';
//Design
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



const HeroHeaderComponent = (props) => {
  const { width , height} = useViewport();
  const mobileBreak = 500;
  const tabletBreak = 1000;
  const desktopBreak = 1300;
  console.log('this is width: ',width);
  console.log('this is height: ',height);


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
            width={50}
            height={50}
          />
        ) : (
          <HeroHeaderLottie
            options={AnimationCreateRobot}
            resizeMode="cover"
            width={400}
            height={400}
          />
        )}
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
export default connect(mapStateToProps, mapDispatchToProps)(HeroHeaderComponent);



export const HeroHeaderLeftContainer = (props) => {
  const { width, height } = useViewport();
  const mobileBreak = 500;
  const tabletBreak = 1000;
  const desktopBreak = 1300;
  console.log("this is width: ", width);
  console.log("this is height: ", height);

  return (
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
    
  );
};


export const HeroHeaderRightContainer = (props) => {
  const { width, height } = useViewport();
  const mobileBreak = 600;
  const tabletBreak = 1000;
  const desktopBreak = 1300;
  console.log("this is width: ", width);
  console.log("this is height: ", height);
  let robotAnimation = <HeroHeaderLottie
          options={AnimationCreateRobot}
          width= {400}
          height={400}
        />;
  if ( width <= 600 && width > 500) {
      robotAnimation = <HeroHeaderLottie
          options={AnimationCreateRobot}
          resizeMode="cover"
          height={350}

        />;
    } else if ( width <= 500 && width > 450) {
      robotAnimation = <HeroHeaderLottie
          options={AnimationCreateRobot}
          resizeMode="cover"
          height={300}
        />;
    } else if ( width <= 450) {
      robotAnimation = <HeroHeaderLottie
          options={AnimationCreateRobot}
          resizeMode="cover"
          height={300}
        />;
    } 

  return <HeroHeaderRight>{robotAnimation}</HeroHeaderRight>;
};


        // width < mobileBreak ? (
        // <HeroHeaderLottie
        //   options={AnimationCreateRobot}
        //   resizeMode="cover"
        //   width={300}
        //   height={300}
        // />
      // ) :  (
      //   <HeroHeaderLottie
      //     options={AnimationCreateRobot}
      //     resizeMode="cover"
      //     width={400}
      //     height={400}
      //   />
      // )