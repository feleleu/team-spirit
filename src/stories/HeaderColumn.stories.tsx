import { Story, Meta } from '@storybook/react';
import HeaderColumn, { HeaderColumnProps } from '../app/components/HeaderColumn/HeaderColumn';

export default {
  title: 'Example/HeaderColumn',
  component: HeaderColumn,
} as Meta;

const Template: Story<HeaderColumnProps> = (args) => <HeaderColumn {...args} />;

export const ToDo = Template.bind({})
ToDo.args = {

  title: 'To Do',

}

export const Doing = Template.bind({})
Doing.args = {

  title: 'Doing',

}

export const Done = Template.bind({})
Done.args = {

  title: 'Done',

}