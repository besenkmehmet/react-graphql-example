// Button.stories.ts|tsx

import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProfileTabs from '../components/ProfileTabs';

export default {
  title: 'Profile Tabs',
  component: ProfileTabs,
} as ComponentMeta<typeof ProfileTabs>;

const Template: ComponentStory<typeof ProfileTabs> = (args) => (
  <ProfileTabs {...args} />
);
export const Primary = Template.bind({});
