import BasicInformation from '../BasicInformation/BasicInformation';
import Paragraph from '../Typography/Paragraph';
import UserIcon from '../Users/UserIcon';
import * as R from './Reminder.styles';
import ReminderThemes from './ReminderThemes/ReminderThemes'; 


export interface ReminderProps {

    label: string
    typeReminder: 'text' | 'default' | 'defaultThumbnail'

}

export default function Reminder ( { label, typeReminder }: ReminderProps ) {

    return <R.Wrapper>

        {
           
            typeReminder === "text"&&

            <R.ContainerParagraph>

                <Paragraph size = "default">

                    { label }

                </Paragraph>


            </R.ContainerParagraph>
            
            
        }

        {
                
                typeReminder === "default"&&

                <>

                <R.Header>

                    <ReminderThemes classification = { 'urgent' } />
                    <ReminderThemes classification = { 'important' }/>

                </R.Header>

                <R.ContainerParagraph>

                    <Paragraph size = "default">

                        { label }

                    </Paragraph>

                 </R.ContainerParagraph>

                    <R.Footer>

                    <R.PostInfo>
                        
                        <BasicInformation 
                        
                            attachments= { 1 } 
                            deadline= { '18 Jan' } 
                            checklist= { 3 }  
                            view= { false } 
                            description= { false } 
                        
                        />


                    </R.PostInfo>


                    <R.UserIcon>

                    <UserIcon id = {1}/>
                    <UserIcon id = {2}/>
                    <UserIcon id = {3}/>

                    </R.UserIcon>

                    


                    </R.Footer>
                
                  </>
            }

{
                
                typeReminder === "defaultThumbnail"&&

                <>

                <R.Thumbnail>

                <R.Header>

                    <ReminderThemes classification = { 'urgent' } />
                    <ReminderThemes classification = { 'important' }/>

                </R.Header>


                </R.Thumbnail>

                <R.ContainerParagraph>

                    <Paragraph size = "default">

                        { label }

                    </Paragraph>

                 </R.ContainerParagraph>

                    <R.Footer>

                    <R.PostInfo>
                        
                        <BasicInformation 
                        
                            attachments= { 1 } 
                            deadline= { '18 Jan' } 
                            checklist= { 3 }  
                            view= { false } 
                            description= { false } 
                        
                        />

                    </R.PostInfo>

                    <R.UserIcon>

                    <UserIcon id = {3}/>
                    <UserIcon id = {4}/>


                    </R.UserIcon>


                    </R.Footer>
                
                  </>
            }


    </R.Wrapper>

}