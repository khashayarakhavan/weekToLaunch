import { css } from "styled-components";

//Code
export const respond = {
  handheld: (...args) => css`
    @media (max-width: 520px) {
      ${css(...args)};
    }
  `,
  mobile: {
    max: (...args) => css`
      @media (max-width: 640px) {
        ${css(...args)};
      }
    `,
    large: (...args) => css`
      @media (max-width: 540px) {
        ${css(...args)};
      }
    `,
    medium: (...args) => css`
      @media (max-width: 480px) {
        ${css(...args)};
      }
    `,
    small: (...args) => css`
      @media (max-width: 414px) {
        ${css(...args)};
      }
    `,
    min: (...args) => css`
      @media (max-width: 320px) {
        ${css(...args)};
      }
    `,
  },
  tablet: {
    max: (...args) => css`
      @media (max-width: 1080px) {
        ${css(...args)};
      }
    `,
    large: (...args) => css`
      @media (max-width: 960px) {
        ${css(...args)};
      }
    `,
    medium: (...args) => css`
      @media (max-width: 828px) {
        ${css(...args)};
      }
    `,
    small: (...args) => css`
      @media (max-width: 768px) {
        ${css(...args)};
      }
    `,
    min: (...args) => css`
      @media (max-width: 720px) {
        ${css(...args)};
      }
    `,
  },
  tablet_medium: (...args) => css`
    @media (max-width: 700px) {
      ${css(...args)};
    }
  `,
  tablet_large: (...args) => css`
    @media (max-width: 900px) {
      ${css(...args)};
    }
  `,
  desktop_medium: (...args) => css`
    @media (max-width: 1200px) {
      ${css(...args)};
    }
  `,
  desktop_large: (...args) => css`
    @media (max-width: 1600px) {
      ${css(...args)};
    }
  `,
};


