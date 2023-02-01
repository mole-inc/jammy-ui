import React from 'react'
import { Story } from '@storybook/react'
import { Button, ButtonProps } from '.'

export default {
  title: 'Components/Button',
  component: Button,
}

const label = 'Button'
const Template: Story<ButtonProps> = (args) => <Button {...args} />

const S = Template.bind({})
S.args = { size: 'S', label }

const M = Template.bind({})
M.args = { size: 'M', label }

const L = Template.bind({})
L.args = { size: 'L', label }

export { S, M, L }
