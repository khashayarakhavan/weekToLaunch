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
import Header from '../../components/Sections/header/header.component';
import {
  HeroHeaderLeftContainer,
  HeroHeaderRightContainer,
} from "../../components/complex/hero-header/heroHeader.component";
import SideBar from '../../components/Sections/SideBar/SideBar.component';
// import { HeroLeftSide, HeroRightSide } from "./vegeloper.styles";
//Design
import {
  VegeloperContainer,
  LeftSide,
  RightSide,
  ScrollContainerFlex,
  ScrollCardContainer,
  ScrollCardItem
} from "./vegeloper.styles";

import ScrollDownCTA from '../../components/Sections/ScrollDown/ScrollDown.component';

const LandingPage = () => (
  <VegeloperContainer>
    <Header />
    {/* <LeftSide /> */}
    {/* <SideBar /> */}
    <HeroHeaderLeftContainer />
    <HeroHeaderRightContainer />
    <ScrollDownCTA />
    <ScrollContainerFlex>
      <ScrollCardContainer>
        <ScrollCardItem>
          {/* <figure /> */}
          <div className="iconTest">
            <i className=" icon-basic-heart"></i>
          </div>
          <h3 className="heading-tertiary ">Explore the world</h3>
          <span />
          <p className="feature-box__text">
            shaja baja much loven disch very guten disch shaja baja much loven
            disch very guten disch
          </p>
        </ScrollCardItem>
      </ScrollCardContainer>
      <ScrollCardContainer>
        <ScrollCardItem>
          
            <i className=" icon-basic-heart"></i>
          
          <h3 className="heading-tertiary ">Explore the world</h3>
          <span />
          <p className="feature-box__text">
            shaja baja much loven disch very guten disch shaja baja much loven
            disch very guten disch
          </p>
        </ScrollCardItem>
      </ScrollCardContainer>
      <ScrollCardContainer>
        <ScrollCardItem>
          <i className=" icon-basic-heart"></i>
          <h3 className="heading-tertiary ">Explore the world</h3>
          <span />
          <p className="feature-box__text">
            shaja baja much loven disch very guten disch shaja baja much loven
            disch very guten disch
          </p>
        </ScrollCardItem>
      </ScrollCardContainer>
      <ScrollCardContainer>
        <ScrollCardItem>
          <i className=" icon-basic-heart"></i>
          <h3 className="heading-tertiary ">Explore the world</h3>
          <span />
          <p className="feature-box__text">
            shaja baja much loven disch very guten disch shaja baja much loven
            disch very guten disch
          </p>
        </ScrollCardItem>
      </ScrollCardContainer>

      {/* <ScrollItemFlex></ScrollItemFlex>
      <ScrollItemFlex></ScrollItemFlex>
      <ScrollItemFlex></ScrollItemFlex>
      <ScrollItemFlex></ScrollItemFlex>
      <ScrollItemFlex></ScrollItemFlex> */}
    </ScrollContainerFlex>
    {/* <Skills /> */}

    {/* <Cards /> */}

    <MiniCards />
    {/* <Features /> */}
    {/* <RightSide /> */}
  </VegeloperContainer>
);

export default LandingPage;












































// <ScrollContainer>
//   <Child>
//     <h1>CSS-only horizontal scroll tentative</h1>
//     <p>
//       The idea is to create an horizontal scroll layout and to allow the user to
//       scroll up/down the mouse to scroll left/right.
//     </p>
//     <p>
//       So… please scroll <strong>down</strong> with your mouse.
//     </p>
//   </Child>
//   <Child>
//     <h1>CSS-only horizontal scroll tentative</h1>
//     <p>
//       The idea is to create an horizontal scroll layout and to allow the user to
//       scroll up/down the mouse to scroll left/right.
//     </p>
//     <p>
//       So… please scroll <strong>down</strong> with your mouse.
//     </p>
//   </Child>
//   <Child>
//     <h1>CSS-only horizontal scroll tentative</h1>
//     <p>
//       The idea is to create an horizontal scroll layout and to allow the user to
//       scroll up/down the mouse to scroll left/right.
//     </p>
//     <p>
//       So… please scroll <strong>down</strong> with your mouse.
//     </p>
//   </Child>
//   <Child>
//     <h1>CSS-only horizontal scroll tentative</h1>
//     <p>
//       The idea is to create an horizontal scroll layout and to allow the user to
//       scroll up/down the mouse to scroll left/right.
//     </p>
//     <p>
//       So… please scroll <strong>down</strong> with your mouse.
//     </p>
//   </Child>
// </ScrollContainer>;