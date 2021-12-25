import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from '../../components/MyLabel';

export default {
  title: 'UI/MyLabel',
  component: MyLabel,
  argTypes: {
    size: { control: 'select' },
    fontColor: { control: 'color' },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = args => <MyLabel {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: 'Best label',
  size: 'h1',
  allCaps: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Best label',
  size: 'h1',
  allCaps: false,
  color: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'Tertiary',
  size: 'h1',
  allCaps: false,
  color: 'tertiary',
};

export const AllCaps = Template.bind({});
AllCaps.args = {
  label: 'AllCaps',
  size: 'h1',
  allCaps: true,
};

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  label: 'Custom font color',
  size: 'h1',
  fontColor: '#9dff00',
};
