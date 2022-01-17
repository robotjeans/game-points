import React from 'react';
import PropTypes from 'prop-types';
import styled from '../../utils/styled';

const Scrollable = ({ children, scrollBarPos }) => (
  <StyledScrollable pr={scrollBarPos} mr={-scrollBarPos}>
    {children}
  </StyledScrollable>
);

Scrollable.propTypes = {
  children: PropTypes.node,
  scrollBarPos: PropTypes.number,
};

export default Scrollable;

const StyledScrollable = styled.div`
  width: 100%;
  height: 100%;
  padding-right: ${({ pr }) => (pr ? `${pr}px` : '0')};
  overflow: auto;
`;
