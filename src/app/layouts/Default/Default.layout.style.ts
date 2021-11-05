import styled from "styled-components";

export const Wrapper = styled.div`

 
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
 
    padding: 50px 25px;
    display: flex;

    justify-content: center;
    align-items: center;

`

export const Main = styled.main`

    display: grid;
    grid-template-columns: 400px 400px 400px;
    gap: 16px;
    position: relative;
    

`

export const Columns = styled.div`

    background-color: #ddd;
    border-radius: 5px;
    height: auto;

    justify-content: center;
    align-items: center;

    flex-direction: column;
    
    overflow: hidden;

    max-height: 570px;


`


export const ColumnsHeader = styled.div`



    width: 100%;
    height: auto;
    padding: 15px 15px;
    


`

export const ColumnsFooter = styled.div`

    width: 100%;
    padding: 25px 15px; 

`

export const ContainerToDo = styled.div`

    overflow-y: scroll;
    height: auto;
    max-height: 450px;
    padding: 15px;
    width: 100%;

`

export const ContainerDoing = styled.div`

    overflow-y: scroll;
    height: auto;
    max-height: 450px;
    padding: 15px;
    width: 100%;

`

export const ContainerDone = styled.section`

    overflow-y: scroll;
    height: auto;
    max-height: 450px;
    padding: 15px;
    width: 100%;

`
