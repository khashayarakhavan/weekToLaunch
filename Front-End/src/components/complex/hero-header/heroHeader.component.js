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
  SkillTotal,
  Front,
  Behind,
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
          <Front>
            I<Accent_mateBlue>’</Accent_mateBlue>m
            <Accent_fireOrange>&nbsp;K</Accent_fireOrange>hash
          </Front>
          <Behind>i</Behind>
        </p>
      </H1>
      <TEXT>
        <Front>
          a full stack web developer and I love &nbsp;
          <SkillTotal>
            <Skill_1>coding</Skill_1>, &nbsp;
            <Skill_2>science</Skill_2> &&nbsp;
            <Skill_3>nature</Skill_3>
          </SkillTotal>
        </Front>
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
          width= {370}
          height={370}
        />;

  if ( width <= 450 && width > 400) {
    robotAnimation = (
      <HeroHeaderLottie
        options={AnimationCreateRobot}
        resizeMode="cover"
        height={340}
      />
    );
  } else if ( width <= 400 && width > 350) {
      robotAnimation = <HeroHeaderLottie
          options={AnimationCreateRobot}
          resizeMode="cover"
          height={300}
        />;
    } 
     else if ( width <= 350 && width > 300) {
      robotAnimation = <HeroHeaderLottie
          options={AnimationCreateRobot}
          resizeMode="cover"
          height={270}
        />;
    } else if ( width <= 300) {
      robotAnimation = <HeroHeaderLottie
          options={AnimationCreateRobot}
          resizeMode="cover"
          height={220}
        />;
    } else if (width >= 1024) {
      robotAnimation = <HeroHeaderLottie
        options={AnimationCreateRobot}
        resizeMode="cover"
        height={`90%`}
        
        
      />;
    }

  return <HeroHeaderRight>{robotAnimation}</HeroHeaderRight>;
};

