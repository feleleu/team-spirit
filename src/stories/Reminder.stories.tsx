import { Story, Meta } from '@storybook/react';
import Reminder, { ReminderProps } from '../app/components/Reminder/Reminder';

export default {
  title: 'Example/Reminder',
  component: Reminder,
} as Meta;

const Template: Story<ReminderProps> = (args) => <Reminder {...args} />;

export const Text = Template.bind({})
Text.args = {
  label: 'Lorem Ipsum text dolor', 
  typeReminder: 'text'
}

export const Default = Template.bind({})
Default.args = {
  label: 'Lorem Ipsum text dolor', 
  typeReminder: 'default'
}

export const DefaultThumbnail = Template.bind({})
DefaultThumbnail.args = {
  label: 'Lorem Ipsum text dolor', 
  typeReminder: 'defaultThumbnail'
}




