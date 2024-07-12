
import styled from '@emotion/styled'

export const PubHeader = styled.div`
    height: 49px;
    background: #f7f7f7;
    padding: 5px 20px;
    min-width: 1024px;
    border-bottom: 1px solid #aaa;
    position: relative;
    h1 {
        font-size: 16px;
        font-weight: 400;
    }
    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        position: absolute;
        left: 390px;
        top: 12px;
        li {
            display: inline-block;
            margin-left: 2px;
            button {
                width: 140px;
                height: 36px;
                border: 1px solid #aaa;
                border-bottom: 0;
                border-top-left-radius: 4px;
                border-top-right-radius: 4px;
                background: #e1e1e1;
                cursor: pointer;
                &.on {
                    background: #fff;
                    border-bottom: 1px solid #fff;
                    font-weight: 700;
                }
            }
        }
    }
`;
export const RedBox = styled.div`
    width: 300px;
    height: 300px;
    background: red;
`
export const BlueBox = styled.div`
    width: 300px;
    height: 300px;
    background: blue;
`

// 