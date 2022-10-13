import {Meta, StoryObj} from '@storybook/react';

import { Button, ButtonsProps } from "./Button";


export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Create account',
  },
  argTypes: {
 
  }
} as Meta<ButtonsProps>

export const Default: StoryObj<ButtonsProps> = {}

      