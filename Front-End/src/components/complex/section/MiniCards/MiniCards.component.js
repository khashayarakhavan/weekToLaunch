import React, { Component } from 'react';
import {MiniCardsContainer, FlexContainer, MiniCardContainer, MiniCard} from './MiniCards.styles'

class Template extends Component {
    render() {

        return (
          <MiniCardsContainer>
            <FlexContainer>
              <MiniCardContainer>
                <MiniCard>
                  <span>
                    <h3 className="heading-tertiary">
                      React
                    </h3>
                    <i className=" icon-basic-world"></i>
                  </span>
                  <p className="feature-box__text">
                    is the most supported Framework worldwide.
                  </p>
                </MiniCard>
              </MiniCardContainer>

              <MiniCardContainer>
                <MiniCard>
                  <i className="feature-box__icon icon-basic-map"></i>
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Explore the world
                  </h3>
                  <p className="feature-box__text">
                    shaja baja much loven disch very guten disch shaja baja much
                    loven disch very guten disch
                  </p>
                </MiniCard>
              </MiniCardContainer>

              <MiniCardContainer>
                <MiniCard>
                  <i className="feature-box__icon icon-basic-heart"></i>
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Explore the world
                  </h3>
                  <p className="feature-box__text">
                    shaja baja much loven disch very guten disch shaja baja much
                    loven disch very guten disch
                  </p>
                </MiniCard>
              </MiniCardContainer>

              <MiniCardContainer>
                <MiniCard>
                  <i className="feature-box__icon icon-basic-compass"></i>
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Explore the world
                  </h3>
                  <p className="feature-box__text">
                    shaja baja much loven disch very guten disch shaja baja much
                    loven disch very guten disch
                  </p>
                </MiniCard>
              </MiniCardContainer>
            </FlexContainer>
          </MiniCardsContainer>
        );
    }
}

export default (Template);