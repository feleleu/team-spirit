import { Story, Meta } from '@storybook/react';
import Column, { ColumnProps } from '../app/components/Column/Column';

export default {
  title: 'Example/Column',
  component: Column,
} as Meta;

const Template: Story<ColumnProps> = (args) => <Column {...args} />;

export const Default = Template.bind({})
Default.args = {

  title: 'Coluna',

}