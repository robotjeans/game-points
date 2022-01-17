/** @jsx jsx */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { SubHeading } from './common/Typography';
import styled, { css, jsx } from '../utils/styled';
import colors from '../styles/colors';

const Header = ({ children, gridArea }) => (
  <StyledHeader
    css={css`
      grid-area: ${gridArea};
    `}
  >
    <Navbar>
      <Link to="/">
        <Item>
          <SubHeading color={colors.red}>Kahoot! Points</SubHeading>
        </Item>
      </Link>
      {children}
    </Navbar>
  </StyledHeader>
);

Header.propTypes = {
  gridArea: PropTypes.string,
  children: PropTypes.node,
};

export default Header;

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borders};
  z-index: 2;
`;

const Navbar = styled.nav`
  padding: 11px 25px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.headings};
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
`;
