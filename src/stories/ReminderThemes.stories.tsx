import { Story, Meta } from '@storybook/react';
import ReminderThemes, { ReminderThemesProps } from '../app/components/Reminder/ReminderThemes/ReminderThemes';

export default {
  title: 'Example/ReminderThemes',
  component: ReminderThemes,
} as Meta;

const Template: Story<ReminderThemesProps> = (args) => <ReminderThemes {...args} />;

export const ThemesImportant = Template.bind({})
ThemesImportant.args = {

  label: 'Important',
  classification: 'important'

}

export const ThemesUrgent = Template.bind({})
ThemesUrgent.args = {

  label: 'Urgent',
  classification: 'urgent'

}

export const ThemesNoImportant = Template.bind({})
ThemesNoImportant.args = {

  label: 'No Important',
  classification: 'noImportant'

}

export const ThemesNoUrgent = Template.bind({})
ThemesNoUrgent.args = {

  label: 'No Urgent',
  classification: 'noUrgent'

}