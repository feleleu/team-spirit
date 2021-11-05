import ColumnFooter from '../../components/ColumnFooter/ColumnFooter';
import HeaderColumn from '../../components/HeaderColumn/HeaderColumn';
import Reminder from '../../components/Reminder/Reminder';
import * as DL from './Default.layout.style';


interface DefaultLayoutProps {

    children: React.ReactNode

}

function DefaultLayout ( props: DefaultLayoutProps){

    return <DL.Wrapper>

        <DL.Main>
            <DL.Columns>

                <DL.ColumnsHeader>
                    
                    <HeaderColumn title = {'To Do'} />

                </DL.ColumnsHeader>

                <DL.ContainerToDo>
                    
                    <Reminder label = {'Lorem Ipsum text dolor'} typeReminder = {'default'}/>
                    <Reminder label = {'Lorem Ipsum text dolor'} typeReminder = {'text'}/>


                </DL.ContainerToDo>
                
                <DL.ColumnsFooter>
                    
                    <ColumnFooter 
                    
                        label = {'Adicionar um cartão'}
                    
                    />

                </DL.ColumnsFooter>

            </DL.Columns>

            <DL.Columns>

                <DL.ColumnsHeader>
                    
                    <HeaderColumn title = {'Doing'} />

                </DL.ColumnsHeader>

                <DL.ContainerDoing>
                    
                    <Reminder label = {'Lorem Ipsum text dolor'} typeReminder = {'default'}/>
                    <Reminder label = {'Lorem Ipsum text dolor'} typeReminder = {'text'}/>
                    <Reminder label = {'Lorem Ipsum text dolor'} typeReminder = {'defaultThumbnail'}/>

                </DL.ContainerDoing>
                
                <DL.ColumnsFooter>
                    
                    <ColumnFooter 
                    
                        label = {'Adicionar um cartão'}
                    
                    />

                </DL.ColumnsFooter>

            </DL.Columns>

            <DL.Columns>

                <DL.ColumnsHeader>
                    
                    <HeaderColumn title = {'Done'} />

                </DL.ColumnsHeader>

                <DL.ContainerDone>
                    
                    <Reminder label = {'Lorem Ipsum text dolor'} typeReminder = {'text'}/>
                    <Reminder label = {'Lorem Ipsum text dolor'} typeReminder = {'default'}/>
                    <Reminder label = {'Lorem Ipsum text dolor'} typeReminder = {'default'}/>
                    <Reminder label = {'Lorem Ipsum text dolor'} typeReminder = {'defaultThumbnail'}/>
                    <Reminder label = {'Lorem Ipsum text dolor'} typeReminder = {'text'}/>
    

                </DL.ContainerDone>
                
                <DL.ColumnsFooter>
                    
                    <ColumnFooter 
                    
                        label = {'Adicionar um cartão'}
                    
                    />

                </DL.ColumnsFooter>

            </DL.Columns>
        </DL.Main>

        { props.children }

    </DL.Wrapper>

}

export default DefaultLayout
