import {clsx} from 'clsx'
import{Slot} from '@radix-ui/react-slot'


import { InputHTMLAttributes, ReactNode } from 'react';


export interface textInputRootProps {
  children: ReactNode;

}

function textInputRoot(props: textInputRootProps){
  return(
    <div 
      className='py-4 flex items-center gap-3 h-12 w-full  px-3 rounded bg-gray-800  focus-within:ring-2 ring-cyan-300'
    > 
      {props.children}
    </div>
  )
}

textInputRoot.displayName = 'TextInput.Root'

export interface textInputIconProps {
  children: ReactNode;
} 

function textInputIcon(props: textInputIconProps){
  return(
    <Slot className='w-6 h-6 text-gray-400'>
      {props.children}
    </Slot>
  )
}

textInputIcon.displayName = 'TextInput.Icon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function TextInputInput(props: TextInputInputProps){
  return (
    <input
      className='bg-transparent outline-none flex-1 text-gray-100 text-xs placeholder:text-gray-400 '
      {...props}
    />

    
  )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: textInputRoot,
  Input: TextInputInput,
  Icon: textInputIcon,

}