import styled from '../../utils/styled';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;

  ${({ flex }) =>
    flex &&
    `
  display: flex;
  align-items: center;
  justify-content: center;
  `}
`;

export default Container;
