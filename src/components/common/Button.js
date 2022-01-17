import React from 'react';
import PropTypes from 'prop-types';
import { SubHeading } from './Typography';
import styled from '../../utils/styled';
import colors from '../../styles/colors';

const Button = ({ onClick, variant, disabled, children }) => {
  const handleClick = () => {
    !disabled && onClick();
  };
  return (
    <RawButton variant={variant} disabled={disabled} onClick={handleClick}>
      <SubHeading color={colors.white}>{children}</SubHeading>
    </RawButton>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  variant: 'primary',
  onClick: () => {},
  disabled: false,
};

const RawButton = styled.button`
  border: none;
  border: none;
  padding: 10px 16px;
  cursor: pointer;
  border-radius: 8px;
  margin: 0 10px;
  transition: transform 80ms ease-in;
  max-height: 52px;

  &:active {
    opacity: 0.9;
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
  &:hover {
    transform: scale(0.95);
    opacity: 0.9;
  }

  ${({ variant, disabled, theme }) =>
    variant === 'primary' &&
    !disabled &&
    `
    background: ${theme.colors.red};
    color: ${theme.colors.white};
  `}

  ${({ variant, disabled, theme }) =>
    variant === 'secondary' &&
    !disabled &&
    `
  background: ${theme.colors.blue};
  color: ${theme.colors.white};
`}

  ${({ disabled, theme }) =>
    disabled &&
    `
    background: ${theme.colors.disabled};
    color: ${theme.colors.body};
  `}
`;

export default Button;
