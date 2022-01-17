/** @jsx jsx */
import PropTypes from 'prop-types';
import styled, { jsx, css } from '../../utils/styled';

const Main = ({ children, gridArea }) => (
  <StyledMain
    css={css`
      grid-area: ${gridArea};
    `}
  >
    {children}
  </StyledMain>
);

Main.propTypes = {
  children: PropTypes.node,
  gridArea: PropTypes.string,
};

export default Main;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  z-index: 1;
  position: relative;
  overflow: hidden;
`;
