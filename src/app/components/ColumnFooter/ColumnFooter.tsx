import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js'; 
import * as CF from './ColumnFooter.stylle';
import Heading from '../Typography/Heading';

export interface ColumnFooterProps {

    label: string

}

export default function ColumnFooter ( { label }: ColumnFooterProps ) {

    return <CF.Wrapper>

            <Icon 
                
                size = "32px"
                path = {mdiPlus} 

            />

            <Heading
            
                level = {3}

            >

                { label }
            
            </Heading>

    </CF.Wrapper>

}