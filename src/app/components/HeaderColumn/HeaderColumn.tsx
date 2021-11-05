import Icon from '@mdi/react';
import { mdiDotsHorizontal } from '@mdi/js';
import Heading from '../Typography/Heading';
import * as hCol from './HeaderColumn.style';

export interface HeaderColumnProps {

    title: string

}

export default function HeaderColumn ( { title }: HeaderColumnProps ) {

    return <hCol.Wrapper>

        <hCol.InfoInnerContent >

            <Heading level = {1} >
                { title }
            </Heading>
        
        </hCol.InfoInnerContent>

            

        <hCol.InfoIcon>
            
            <Icon 
                
                size = "32px"
                path = {mdiDotsHorizontal}

            />

        </hCol.InfoIcon>

    </hCol.Wrapper>

}

