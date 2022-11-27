// Button.stories.ts|tsx

import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProfileLayout from '../components/ProfileLayout';

export default {
  title: 'Profile Layout',
  component: ProfileLayout,
} as ComponentMeta<typeof ProfileLayout>;

const Template: ComponentStory<typeof ProfileLayout> = (args) => (
  <ProfileLayout {...args} />
);
export const Primary = Template.bind({});
