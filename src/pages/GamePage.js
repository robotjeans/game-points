import React, { useState, useEffect, useCallback } from 'react';

import Grid, { GridArea } from '../components/layouts/Grid';
import Header from '../components/Header';
import Main from '../components/layouts/Main';
import Side from '../components/layouts/Side';
import GameArea from '../components/GameArea';
import GameResults from '../components/GameResults';
import Spinner from '../components/common/Spinner';
import { useGame } from '../context';
import { groupBy } from '../utils/helpers';

const GamePage = () => {
  const [gameData, setGameData] = useState([]);
  const [state, setState] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { data, selectPiece, gameState, resetGame, gameTotal } = useGame();

  // mock api request
  const fetchData = useCallback(() => {
    let fetch = setTimeout(() => {
      setIsLoading(false);
      data && setGameData(data);
    }, 2000);
    return () => {
      clearTimeout(fetch);
    };
  }, [data]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // merge and sort alikes
  useEffect(() => {
    const grouped = groupBy(gameState).sort((a, b) => (a.value < b.value ? 1 : -1));
    setState(grouped);
  }, [gameState]);

  // select game tile
  const handleSelect = (i) => selectPiece(i);

  // reset game
  const handleReset = () => resetGame();

  return (
    <Grid>
      <Header gridArea={GridArea.HEADER} />
      <Main gridArea={GridArea.MAIN}>
        {isLoading ? (
          <Spinner />
        ) : (
          <GameArea isLoading={isLoading} state={gameData} onSelect={handleSelect} />
        )}
      </Main>
      <Side gridArea={GridArea.SIDE}>
        <GameResults state={state} reset={handleReset} total={gameTotal} />
      </Side>
    </Grid>
  );
};

export default GamePage;
