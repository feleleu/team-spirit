import * as Col from './Column.styles';

export interface ColumnProps {

    title: string

}

export default function Column ( { title }: ColumnProps ) {

    return <Col.Wrapper>
    
        { title }

     </Col.Wrapper>

}