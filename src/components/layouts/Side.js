/** @jsx jsx */
import PropTypes from 'prop-types';
import styled, { jsx, css } from '../../utils/styled';

const Side = ({ children, gridArea }) => (
  <StyledSide
    css={css`
      grid-area: ${gridArea};
    `}
  >
    {children}
  </StyledSide>
);

Side.propTypes = {
  children: PropTypes.node,
  gridArea: PropTypes.string,
};

export default Side;

const StyledSide = styled.div`
  overflow-y: hidden;
  height: 100%;
  z-index: 1;
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  border-left: 1px solid ${({ theme }) => theme.colors.borders};
`;
