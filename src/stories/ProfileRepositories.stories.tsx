// Button.stories.ts|tsx

import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProfileRepositories from '../components/ProfileRepositories';

export default {
  title: 'Profile Respositories',
  component: ProfileRepositories,
} as ComponentMeta<typeof ProfileRepositories>;

const Template: ComponentStory<typeof ProfileRepositories> = (args) => (
  <ProfileRepositories {...args} />
);
export const Primary = Template.bind({});
