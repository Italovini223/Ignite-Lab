import {Meta, StoryObj} from '@storybook/react';
import {Envelope} from 'phosphor-react'
import { TextInput, textInputRootProps } from "./TextInput";


export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
   children: (
    [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder='Type your email'/>
    ]
    
   ),
  }, 
  argTypes: {
    children:{
      table: {
        disable: true
      }
    }
  }
} as Meta<textInputRootProps>

export const Default: StoryObj<textInputRootProps> = {}
export const WithoutIcon: StoryObj<textInputRootProps> = {
  args: {
    children: (
      <TextInput.Input placeholder='Type your email'/>
    )
  }
}
 
  
    