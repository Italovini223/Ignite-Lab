import {Meta, StoryObj} from '@storybook/react';

import { Checkbox, CheckBoxProps } from "./Checkbox";
import { Text } from './Text';


export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (story)=> {
      return(
        <div className='flex items center gap-2'>
          {story()}
          <Text size='sm' asChild={false}>
            Lembrar de mim por 30 Dias
          </Text> 
        </div>
      )
    }
  ]
} as Meta<CheckBoxProps>

export const Default: StoryObj<CheckBoxProps> = {}
 
      