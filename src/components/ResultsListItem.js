import React from 'react';
import PropTypes from 'prop-types';
import { SubHeading } from './common/Typography';
import styled from '../utils/styled';
import color from '../styles/colors';

const ResultsListItem = ({ item }) => (
  <ListItem>
    <div>
      <Tile color={item.color}>
        <SubHeading color={color.white}>{item.key}</SubHeading>
      </Tile>
    </div>
    <div>{item.quantity}</div>
    <div>{item.value}</div>
  </ListItem>
);

ResultsListItem.propTypes = {
  item: PropTypes.object,
};

export default ResultsListItem;

const ListItem = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.colors.borders};
  padding: 15px;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.white};

  div {
    display: flex;
    flex: 1;
    text-align: left;
    align-items: center;
    justify-content: flex-start;
  }
`;

const Tile = styled.span`
  width: 55px;
  height: 55px;
  border-radius: 8px;
  background-color: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
`;
