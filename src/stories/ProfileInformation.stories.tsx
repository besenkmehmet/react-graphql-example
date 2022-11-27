// Button.stories.ts|tsx

import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProfileInformation from '../components/ProfileInformation';

export default {
  title: 'Profile Information',
  component: ProfileInformation,
} as ComponentMeta<typeof ProfileInformation>;

const Template: ComponentStory<typeof ProfileInformation> = (args) => (
  <ProfileInformation {...args} />
);
export const Primary = Template.bind({});
