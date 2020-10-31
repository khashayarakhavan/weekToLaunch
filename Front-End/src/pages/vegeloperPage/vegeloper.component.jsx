import React from 'react';
import Hero from "../../components/atomic/hero/hero.component";
import SideNav from "../../components/atomic/side-nav/side-nav.component";
import TopRealtors from "../../components/atomic/top-realtors/top-realtors.component";
import Features from "../../components/complex/section/feature/feature.component";
import MiniCards from "../../components/complex/section/MiniCards/MiniCards.component";
import SectionFooter from "../../components/complex/section/landing.footer/landing.footer.component";
import SectionHome from "../../components/complex/section/landing.home/landing.home.component";
import Cards from "../../components/Sections/Cards/Cards.component";
import Skills from "../../components/Sections/skills/skills.component";
import SectionStoriesPicture from "../../components/complex/section/stories-picture/stories-picture.component";
import { LandingPageContainer } from "./vegeloper.styles";
import {
  HeroHeaderLeftContainer,
  HeroHeaderRightContainer,
} from "../../components/complex/hero-header/heroHeader.component";
// import { HeroLeftSide, HeroRightSide } from "./vegeloper.styles";
//Design
import {VegeloperContainer, LeftSide, RightSide} from './vegeloper.styles';

const LandingPage = () => (
  <VegeloperContainer>
    <RightSide />
    <HeroHeaderLeftContainer />
    <HeroHeaderRightContainer />
    <Skills />
    <Cards />
    <MiniCards />
    <Features />
    <LeftSide />
  </VegeloperContainer>
);

export default LandingPage;
