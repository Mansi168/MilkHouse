import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? '#4b2820' : '#010606')};
    white-space: nowrap;
    color: ${({ dark }) => (dark ? '#fff' : '#fff')};
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    font-size: ${({ fontBig }) => (fontBig ? '28px' : '28px')};
    outline: none;
    border: 2px solid #EF6C00;
    box-shadow: 0 3px 0 black, 0px 3px 6px #fff;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    margin-left:0;
    width: 391px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate3d(0, 0.75em, -1em);
    transition: all 175ms cubic-bezier(0, 0, 1, 1);transition: 0.7s;

    &:hover {
        background: #fff;
        border: 2px solid #01BF71, 0px 4px 6px #fff; 
        background: ${({ primary }) => (primary ? '#fff' : '#01BF71')};
        box-shadow: 0 0 #01BF71;
    }
`