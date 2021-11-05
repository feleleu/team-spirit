import { Story, Meta } from '@storybook/react';
import BasicInformation, { BasicInformationProps } from '../app/components/BasicInformation/BasicInformation';

export default {
  title: 'Example/BasicInformation',
  component: BasicInformation,
} as Meta;

const Template: Story<BasicInformationProps> = (args) => <BasicInformation {...args} />;

export const attachments = Template.bind({})
attachments.args = {
  attachments: 1
} 

export const deadline = Template.bind({})
deadline.args = {
  deadline: '10 Mar'
} 

export const checklist = Template.bind({})
checklist.args = {
  checklist: 1
} 

export const view = Template.bind({})
view.args = {
  view: true
} 

export const description = Template.bind({})
description.args = {
  description: true
} 
  

  