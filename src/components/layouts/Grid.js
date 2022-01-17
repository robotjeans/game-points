import styled from '../../utils/styled';

export const GridArea = {
  HEADER: 'HEADER',
  MAIN: 'MAIN',
  SIDE: 'SIDE',
};

const Grid = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr ${({ theme }) => theme.widths.sm};
  grid-template-rows: ${({ theme }) => theme.heights.header} 1fr;
  grid-template-areas:
    "${GridArea.HEADER} ${GridArea.SIDE}"
    "${GridArea.MAIN} ${GridArea.SIDE}";

    & * {
      position: relative;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
`;

export default Grid;
