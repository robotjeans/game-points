import React from 'react';
import PropTypes from 'prop-types';
import Scrollable from './layouts/Scrollable';
import Container from './layouts/Container';
import ListItem from './ResultsListItem';
import { Paragraph } from './common/Typography';
import styled from '../utils/styled';
import colors from '../styles/colors';

const ResultsList = ({ items }) => {
  const isEmpty = !items.length;
  return (
    <Container style={{ display: 'flex', flexDirection: 'column' }}>
      <ListHeader>
        <li>Item</li>
        <li>Qty</li>
        <li>Score</li>
      </ListHeader>
      <Scrollable scrollBarPos={3}>
        <List isEmpty={isEmpty}>
          {!isEmpty ? (
            items.map((item, i) => <ListItem key={i} item={item} />)
          ) : (
            <li>
              <Paragraph color={colors.blue}>Choose A Game Piece...</Paragraph>
            </li>
          )}
        </List>
      </Scrollable>
    </Container>
  );
};

ResultsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default ResultsList;

const List = styled.ul`
  height: auto;
  margin: 0 auto;
  list-style: none;

  ${({ isEmpty }) =>
    isEmpty &&
    `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%:
  `}
`;

const ListHeader = styled.ul`
  padding: 15px;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.white};
  list-style: none;
  width: 100%;
  height: 55px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borders};

  li {
    display: flex;
    flex: 1;
    text-align: left;
    align-items: center;
    justify-content: flex-start;
  }
`;
