import React from 'react';
import { keyframes } from '@emotion/core';
import styled from '../../utils/styled';
import theme from '../../styles/theme';
import Container from '../layouts/Container';

const Spinner = () => (
  <Container flex>
    <SpinnerSVG viewBox="0 0 200 200">
      <circle
        className="outer"
        cx="100"
        cy="100"
        r="50"
        fill="none"
        stroke={theme.colors.blue}
        strokeWidth="5"
      />
      <circle
        className="inner"
        cx="100"
        cy="100"
        r="35"
        fill="none"
        stroke={theme.colors.red}
        strokeWidth="5"
      />
    </SpinnerSVG>
  </Container>
);

export default Spinner;

const Spin = keyframes`
  from {
    transform: rotate(0) 
  }
  to {
    transform: rotate(360);
  }
`;

const Spin2 = keyframes`
  from {
    transform: rotate(360) 
  }
  to {
    transform: rotate(0);
  }
`;

const SpinnerSVG = styled('svg')`
  height: 200px;
  width: 200px;

  circle {
    stroke-dasharray: 339.292 339.292;
    stroke-dashoffset: 100;
    stroke-linecap: round;
    transform: rotate(-360deg);
    transform-origin: 50% 50%;
  }

  .outer {
    animation: ${Spin} 2s infinite linear;
  }

  .inner {
    stroke-dashoffset: 225;
    animation: ${Spin2} 1s infinite linear;
  }
`;
