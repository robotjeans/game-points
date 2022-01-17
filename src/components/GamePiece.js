import React from 'react';
import PropTypes from 'prop-types';
import styled from '../utils/styled';
import { Heading } from './common/Typography';
import colors from '../styles/colors';

const GamePiece = ({ color, onClick, gameKey }) => (
  <StyledGamePiece onClick={onClick} color={color}>
    <Meta>
      <Heading color={colors.white}>{gameKey}</Heading>
    </Meta>
  </StyledGamePiece>
);

GamePiece.propTypes = {
  color: PropTypes.string,
  gameKey: PropTypes.string,
  onClick: PropTypes.func,
};

export default GamePiece;

const StyledGamePiece = styled.div`
  width: 100%;
  height: 12em;
  font-family: ${({ theme }) => theme.fonts.body};
  background-color: ${({ color }) => color};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.borders};
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  padding: 20px;

  &:hover {
    transform: scale(0.95);
  }
`;

const Meta = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.body};
`;
