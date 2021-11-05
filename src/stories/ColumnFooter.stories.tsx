import { Story, Meta } from '@storybook/react';
import ColumnFooter, { ColumnFooterProps } from '../app/components/ColumnFooter/ColumnFooter';

export default {
  title: 'Example/ColumnFooter',
  component: ColumnFooter,
} as Meta;

const Template: Story<ColumnFooterProps> = (args) => <ColumnFooter {...args} />;

export const Default = Template.bind({})
Default.args = {

  label: 'Adicionar um cartão',

}