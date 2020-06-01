import styled from 'styled-components';

export const FooterTag = styled.section`
    float: left;
    width: 100%;
    background-color: #292929;
    padding: 80px 15px;
`;

export const Container = styled.div`
    max-width: 1170px;
    margin: auto;

    @media (max-width: 991px) {
        max-width: 750px;
    }
`;

export const FooterContent = styled.div`
    float: left;
    width: 100%;
`;

export const Social = styled.div`
    float: left;
    width: 100%;
    text-align: center;
    border-top: 1px solid #353535;
    padding-top: 15px;

    ul {
        padding: 0;
        list-style: none;
        margin: 0;

        li {
            display: inline;

            a {
                display: inline-block;
                padding: 15px 15px;

                span {
                    display: inlin-block;
                    height: 40px;
                    width: 40px;
                    border-radius: 50%;
                    border: 1px solid #f3971b;
                    color: #f3971b;
                    line-height: 38px;
                    text-align: center;
                    font-size: 16px;
                    transition: all .5s ease;

                    &:hover {
                        background-color: #f3971b;
                        color: #ffffff;
                    }
                }
            }
        }
    }
`;

export const Box = styled.div`
    width: 33.33%;
    float: left;
    padding: 15px;
    text-align: center;

    @media (max-width: 500px) {
        width: 100%;
    }
`;

export const Icon = styled.div`

    span {
        color: #f3971b;
        font-size: 30px;
    }

`;

export const H4 = styled.h4`
    font-size: 16px;
    color: #ffffff;
    margin: 0;
    font-weight: 600;
    text-transform: uppercase;
    padding: 20px 0 0px;
`;

export const Paragraph = styled.p`
    color: #c2c0c3;
    font-size: 16px;
    line-height: 25px;
    letter-spacing: .5px;
    font-weight: 400;
    padding: 10px 0;
    margin: 0px;
`;