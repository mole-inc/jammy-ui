import React from 'react'
import { Story } from '@storybook/react'
import { Inline, InlineProps } from '.'

export default {
  title: 'Components/Text',
  component: Text,
}

const text = 'テキスト入ります'
const Template: Story<InlineProps> = (args) => <Inline {...args} />

const X3L = Template.bind({})
X3L.args = { size: '3XL', text }

const X2L = Template.bind({})
X2L.args = { size: '2XL', text }

const XL = Template.bind({})
XL.args = { size: 'XL', text }

const L = Template.bind({})
L.args = { size: 'L', text }

const M = Template.bind({})
M.args = { size: 'M', text }

const S = Template.bind({})
S.args = { size: 'S', text }

const XS = Template.bind({})
XS.args = { size: 'XS', text }

export { XS, S, M, L, XL, X2L, X3L }
