import Icon from "@mdi/react"
import { mdiEyeOutline, mdiTextLong, mdiPaperclip, mdiCheckboxMarkedOutline, mdiClockOutline } from '@mdi/js'; 
import * as BF from './BasicInformation.style';
import Paragraph from "../Typography/Paragraph";

export interface BasicInformationProps {

    attachments?: number
    deadline?: string
    checklist?: number 
    view?: boolean
    description?: boolean
    
}

export default function BasicInformation ( props: BasicInformationProps ){

    return  <BF.Wrapper>

        {

        props.attachments &&
            <div className = "Container">
                <Icon  path= {mdiPaperclip} className = "icon" />  
                <Paragraph>
                    
                  {props.attachments}
                    
                </Paragraph>
            </div>
            
        }

        {

        props.deadline &&
            <div className = "Container">
                <Icon  path= {mdiClockOutline} className = "icon" />  
                <Paragraph>
                    
                    {props.deadline}
                    
                </Paragraph>
            </div>
            
        }

        {

        props.checklist &&
            <div className = "Container">
                <Icon  path= {mdiCheckboxMarkedOutline} className = "icon" />  
                <Paragraph>
                    
                    {props.checklist}/10
                    
                </Paragraph>
            </div>
            
        }

        {

        props.view === true &&
            <Icon  path= {mdiEyeOutline} className = "icon" />

        }

        {

        props.description === true &&
            <Icon  path= {mdiTextLong} className = "icon" />

        }

    </BF.Wrapper> 


}