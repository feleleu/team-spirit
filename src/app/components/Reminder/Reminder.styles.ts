import styled from "styled-components";

export const Wrapper = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #f1f1f1;
    border-radius: 8px;
    overflow: hidden;

    width: 100%;
    max-width: 400px;
    flex-direction: column;


    box-shadow: 0px 2px 0px #B1B1B1;
    position: relative;

    margin: 15px 0px;

`

export const ContainerParagraph = styled.div`

    text-align: left;
    display: flex;
    align-items: flex-start;
    top: 0;
    width: 100%;
    padding: 16px;

`

export const Header = styled.div`

    width: 100%;
    padding-bottom: 8px;
    gap: 8px;
    padding: 14px;
    display: flex;


`

export const Thumbnail = styled.div`

    width: 100%;
    height: 150px;
    background-color: yellow;
    

`

export const Footer = styled.div`

    width: 100%;
    padding-top: 8px;
    padding: 16px;

`

export const PostInfo = styled.div`

    float: left;
    display: flex;

`


export const UserIcon = styled.div`

    float: right;
    display: flex;

    gap: 8px;


`