import styled, { keyframes } from 'styled-components';

export const HeaderTag = styled.header`
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    padding: 10px 15px;
    z-index: 100;

    @media (max-width: 991px) {
        position: fixed;
        background-color: #222222;
    }
`;

const appear = keyframes`
    0% {
        transform: translateY(-100%);
        opacity: 0;
    }
    100% {
        transform: translateY(0%);
    }
`;

export const Sticky = styled.div`
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    padding: 10px 15px;
    z-index: 10;
    background-color: #222222;
    animation: ${appear} .5s ease;
`;

export const Container = styled.div`
    max-width: 1170px;
    margin: auto;

    @media (max-width: 991px) {
        position: relative;
        max-width: 750px;
    }
`;

export const Logo = styled.div`
    float: left;

    a {
        font-size: 30px;
        display: inline-block;
        padding: 5px 0px;
        color: #ffffff;
        font-weight: 600;
        letter-spacing: 2px;
    }
`;

export const Trigger = styled.div`
    position: absolute;
    top: 15px;
    right: 0px;
    display: none;

    @media (max-width: 991px) {
        display: block;
    }

    a {
        display: inline-block;
        position: relative;
        z-index: 210;

        span {
            display: block;
            height: 2px;
            width: 30px;
            background-color: #ffffff;
            margin-bottom: 8px;
            transition: transform .5s ease;
            -webkit-transition: transform .5s ease;
        }
    }
`;

export const Span = styled.span`
    color: #f3971b;
`;

export const NavBar = styled.div`
    float: right;

    @media (max-width: 991px) {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        width: 180px;
        background-color: #222222;
        z-index: 200;
        padding-top: 80px;
        -webkit-transform: ${props => props.isClick ? props.trigger.closed : props.trigger.open };
        transform: ${props => props.isClick ? props.trigger.closed : props.trigger.open };
        transition: transform .5s ease;
        -webkit-transition: -webkit-transform .5s ease;
    }
`;

NavBar.defaultProps = {
    trigger: {
        open: 'translateX(100%)',
        closed: 'translateX(0)'
    }
}

export const Ul = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;

    li {
        display: inline;
        padding: 0 15px;

        @media (max-width: 991px) {
            display: block;
        }

        a {
            display: inline-block;
            padding: 10px 0px;
            font-size: 16px;
            text-transform: uppercase;
            color: #ffffff;
            position: relative;

            &:before {
                content: '';
                position: absolute;
                top: 100%;
                margin-top: -5px;
                height: 2px;
                left: 0px;
                width: 0;
                transition: width .5s ease;
                background-color: #f3971b;
            }

            &:hover:before {
                width: 100%;
            }
        }
    }
`;
