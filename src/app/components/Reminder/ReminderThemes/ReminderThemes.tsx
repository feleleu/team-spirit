import Heading from '../../Typography/Heading';
import * as RT from './ReminderThemes.style';

export interface ReminderThemesProps {

    label?: string
    classification: 'important' | 'urgent' | 'noImportant' | 'noUrgent' 

    
}

export default function ReminderThemes ( { label, classification }: ReminderThemesProps ) {

    return <RT.Wrapper>
        <RT.ContainerThemes
        
            classification = {classification}
        
        >
            <Heading level = {4}> 

                {label}

            </Heading>
        </RT.ContainerThemes>

    </RT.Wrapper>

}