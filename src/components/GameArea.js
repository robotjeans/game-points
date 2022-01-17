import React from 'react';
import PropTypes from 'prop-types';
import GamePiece from './GamePiece';
import Scrollable from './layouts/Scrollable';
import styled from '../utils/styled';

const GameArea = ({ onSelect, isLoading, state }) => (
  <Scrollable scrollBarPos={3}>
    <GameAreaContainer>
      {!isLoading &&
        state.map((piece, i) => (
          <GamePiece key={i} onClick={() => onSelect(i)} gameKey={piece.key} color={piece.color} />
        ))}
    </GameAreaContainer>
  </Scrollable>
);

GameArea.propTypes = {
  state: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
  onSelect: PropTypes.func,
};

export default GameArea;

const tileSize = '200px';

const GameAreaContainer = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(auto-fill, minmax(${tileSize}, 1fr));
  padding: 25px;
`;
