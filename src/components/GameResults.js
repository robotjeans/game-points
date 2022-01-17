import React from 'react';
import PropTypes from 'prop-types';
import { SubHeading } from './common/Typography';
import ResultsList from './ResultsList';
import Button from './common/Button';
import Container from './layouts/Container';
import styled from '../utils/styled';
import colors from '../styles/colors';

const GameResults = ({ total, state, reset }) => (
  <Container style={{ flexDirection: 'column' }}>
    <Header>
      <SubHeading color={colors.gray50}>Player Items</SubHeading>
    </Header>
    <ResultsList items={state} />
    <Footer>
      <h1>{total}</h1>
      <Button variant="primary" disabled={total < 1} onClick={reset}>
        New Game
      </Button>
    </Footer>
  </Container>
);

GameResults.propTypes = {
  state: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.number,
      quantity: PropTypes.number,
      selected: PropTypes.bool,
      color: PropTypes.string,
    }),
  ),
  total: PropTypes.number,
  reset: PropTypes.func,
};

export default GameResults;

const Header = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.heights.header};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borders};
  background-color: ${({ theme }) => theme.colors.white};
  padding: 11px 25px;
  line-height: 2;
`;

const Footer = styled.div`
  position: absolute;
  width: 100%;
  min-height: ${({ theme }) => theme.heights.header};
  border-top: 1px solid ${({ theme }) => theme.colors.borders};
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
  bottom: 0;
  z-index: 4;
`;
