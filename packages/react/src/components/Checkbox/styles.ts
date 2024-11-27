import * as Checkbox from '@radix-ui/react-checkbox';
import { keyframes, styled } from '../../styles';

export const Container = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid $gray900',
  transition: 'background-color 200ms ease-out, border-color 200ms ease-out',

  '&[data-state="checked"]': {
    backgroundColor: '$brand300',
    border: '2px solid $brand300',
  },

  '&:focus': {
    border: '2px solid $brand300',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  }
})

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: { 
    transform: 'translateY(0)',
  }
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: { 
    transform: 'translateY(-100%)',
  }
})

export const Indicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`,
  }
})