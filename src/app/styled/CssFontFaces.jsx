import { css } from 'styled-components';

import light from '../fonts/Exo-Regular.ttf';
import medium from '../fonts/Exo-Medium.ttf';
import bold from '../fonts/Exo-Bold.ttf';

export const CssFontFaces = css`
  @font-face {
    font-family: 'Exo';
    src: url(${light}) format('truetype');
    font-style: normal;
    font-weight: 400;
  }
  @font-face {
    font-family: 'Exo';
    src: url(${medium}) format('truetype');
    font-style: normal;
    font-weight: 500;
  }
  @font-face {
    font-family: 'Exo';
    src: url(${bold}) format('truetype');
    font-style: normal;
    font-weight: 600;
  }
`;
