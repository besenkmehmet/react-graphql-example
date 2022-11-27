// Button.stories.ts|tsx

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Logo from '../components/Logo';

export default {
  title: 'Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;
export const Primary = Template.bind({});
