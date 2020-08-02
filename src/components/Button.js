import React from 'react';
import styled, {css} from 'styled-components';
import { darken, lighten } from 'polished';

const colorStyles = css`
    ${({ theme, color }) => {
        const selected = theme.palette[color];
        return css`
            background: ${selected};
            &:hover {
                background: ${lighten(0.1, selected)}
            }
            &:active {
                background: ${darken(0.1, selected)}
            }
        `;
    }}
`;

const sizes = {
    large: {
        'line-height': '3rem',
        'font-size': '1.25rem',
    },
    medium: {
        'line-height': '2.25rem',
        'font-size': '1rem',
    },
    small: {
        'line-height': '1.75rem',
        'font-size': '0.875rem',
    }
};

const sizeStyles = css`
    ${({ size }) => css`
        line-height: ${sizes[size]['line-height']};
        font-size: ${sizes[size]['font-size']};
    `}
`;

const StyledButton = styled.button`
    display: inline-flex;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
    
    /* 크기 */
    ${sizeStyles}

    /* 색상 */
    ${colorStyles}

    /* 기타 */
    & + & {
        margin-left: 1rem;
    }
`;

const Button = ({ children, color, size, ...rest}) => {
  return <StyledButton color={color} size={size} {...rest}>{children}</StyledButton>;
};

Button.defaultProps = {
    color: 'blue',
    size: 'medium',
}

export default Button;