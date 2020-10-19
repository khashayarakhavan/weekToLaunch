//Basics
import React from 'react';
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
import CartDropdown from '../../complex/cart-dropdown/cart-dropdown.component';
//Assets
import meSVG from '../../../assets/SVG/me.svg'
import meDev from '../../../assets/SVG/me-dev.svg'
//Design
import { PrussianBlue_To_Orange } from '../../../design/effects.styles';
import {
  InheritedBody,
  WhatIDo,
  SkillsContainer,
  Row,
  ColMd12,
  Article,
  DesignRow,
  ColMd4,
  HomeDesign,
  Figure,
  BubbleRight,
  DesignIconVert,
  Image,
  ColMd6,
  Deets,
  Develop,
  MdPush7,
  Image2,
  HomeDev,
  BubbleLeft,
  DevIconVert,
  ColMd6_Pull3,
} from "./skills.styles";


//Code
export const Header = (props) => {
  const { hidden } = props;

  return (
    <InheritedBody>
      <WhatIDo>
        <SkillsContainer>
          <Row>
            <ColMd12>
              <Article>
                <header class="">
                  <h2>What I can do.</h2>
                </header>

                <DesignRow>
                  <ColMd4>
                    <HomeDesign>
                      <Figure>
                        <Image src={meSVG} />
                      </Figure>
                      <BubbleRight>
                        <DesignIconVert></DesignIconVert>
                      </BubbleRight>
                    </HomeDesign>
                  </ColMd4>
                  {/* <!-- 4 --> */}
                  <ColMd6>
                    <Deets>
                      <h3>Design what you want.</h3>
                      <p>
                        I like to keep it simple. My goals are to focus on
                        typography, content and conveying the message that you
                        want to send.
                      </p>
                    </Deets>
                  </ColMd6>
                </DesignRow>
                {/* <!-- /row --> */}
                <Develop>
                  <MdPush7>
                    <HomeDev>
                      <Figure>
                        <Image2 src={meDev} />
                      </Figure>
                      <BubbleLeft>
                        <DevIconVert></DevIconVert>
                      </BubbleLeft>
                    </HomeDev>
                  </MdPush7>
                  {/* <!-- col --> */}
                  <ColMd6_Pull3>
                    <Deets>
                      <h3>Develop what you need.</h3>
                      <p>
                        I'm a developer, so I know how to create your website to
                        run across devices using the latest technologies
                        available.
                      </p>
                    </Deets>
                  </ColMd6_Pull3>
                  {/* <!-- col --> */}
                </Develop>
                {/* <!-- /row --> */}
              </Article>
            </ColMd12>
          </Row>
        </SkillsContainer>
      </WhatIDo>
    </InheritedBody>
  );
};

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
