import styled from '../../utils/styled';

export const Cannon = styled.h1`
  font-size: calc(${({ theme }) => theme.fontSizes.h1} * 2);
  font-family: inherit;
  color: ${({ color, theme }) => (color ? color : theme.colors.black)};
  line-height: 1.125em;
  font-weight: 600;
  text-transform: capitalize;
  margin: 0;
`;

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.h1};
  font-family: inherit;
  color: ${({ color, theme }) => (color ? color : theme.colors.black)};
  line-height: 1.125em;
  font-weight: 600;
  text-transform: capitalize;
  margin: 0;
`;

export const SubHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-family: inherit;
  color: ${({ color, theme }) => (color ? color : theme.colors.black)};
  line-height: 1.25em;
  font-weight: 600;
  text-transform: capitalize;
  margin: 0;
`;

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-family: inherit;
  color: ${({ color, theme }) => (color ? color : theme.colors.black)};
  line-height: 1.5em;
  font-weight: 400;
  margin: 0;
`;
