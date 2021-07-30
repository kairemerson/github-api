import style from "styled-components"

export const Wrapper = style.div`
    display: flex;
    align-items: flex-start;
`

export const WrapperInfoUser = style.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: auto;
    margin-left: 8px;
`

export const WrapperStatusCounter = style.div`
    display: flex;
    align-items: center;
`

export const WrapperUsername = style.div`
    display: flex;
    align-items: center;
    h3{
        margin-right: 8px;
    }
`

export const WrapperImage = style.img`
    border-radius: 50%;
    width: 200px;
    margin: 8px;
`