import { Story, Meta } from '@storybook/react';
import UserIcon, { UserIconProps } from '../app/components/Users/UserIcon/UserIcon';

export default {
  title: 'Example/UserIcon',
  component: UserIcon,
  argTypes: {
    onLogout: {
      action: 'logout'
    }
  }
} as Meta;

const Template: Story<UserIconProps> = (args) =>
  <div>
    <UserIcon {...args} />
  </div>

export const Default = Template.bind({})
Default.args = {
  id: 1
}