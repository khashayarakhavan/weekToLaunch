import React from 'react';
import Hero from "../../components/atomic/hero/hero.component";
import SideNav from "../../components/atomic/side-nav/side-nav.component";
import TopRealtors from "../../components/atomic/top-realtors/top-realtors.component";
import SectionFeature from "../../components/complex/section/feature/feature.component";
import SectionFeatures from "../../components/complex/section/feature/sectionFeatures";
import SectionFooter from "../../components/complex/section/landing.footer/landing.footer.component";
import SectionHome from "../../components/complex/section/landing.home/landing.home.component";
import SectionCards from "../../components/Sections/Cards/Cards";
import SectionSkills from "../../components/Sections/skills/skills.component";
import SectionStoriesPicture from "../../components/complex/section/stories-picture/stories-picture.component";
import { LandingPageContainer } from "./vegeloper.styles";
import HeroHeader from '../../components/complex/hero-header/heroHeader.component';
//Design
import {VegeloperContainer} from './vegeloper.styles';

const LandingPage = () => (
  <VegeloperContainer>
    <HeroHeader />
    <SectionSkills />
    <SectionCards />
    <SectionFeatures />
    <SectionFeature />
  </VegeloperContainer>
);

export default LandingPage;
