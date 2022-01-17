import React from 'react';
import { useHistory } from 'react-router-dom';
import { Cannon, SubHeading } from '../components/common/Typography';
import Button from '../components/common/Button';
import Container from '../components/layouts/Container';
import styled from '../utils/styled';
import colors from '../styles/colors';

const ErrorPage = () => {
  const history = useHistory();
  return (
    <Container flex>
      <ErrorBox>
        <Cannon color={colors.blue}>Oops!</Cannon>
        <SubHeading>404 - Page Not Found</SubHeading>
        <Button variant="secondary" onClick={() => history.push('/')}>
          Return Home
        </Button>
      </ErrorBox>
    </Container>
  );
};

export default ErrorPage;

const ErrorBox = styled.div`
  width: 24em;
  max-height: 24em;
  min-height: 20em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;
