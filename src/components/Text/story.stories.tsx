import React from 'react'
import { Story } from '@storybook/react'
import { Text, TextProps } from '.'

export default {
  title: 'Components/Text',
  component: Text,
}

const children = 'テキスト入ります'
const Template: Story<TextProps> = (args) => <Text {...args} />

const X3L = Template.bind({})
X3L.args = { size: 'X3L', children }

const X2L = Template.bind({})
X2L.args = { size: 'X2L', children }

const XL = Template.bind({})
XL.args = { size: 'XL', children }

const L = Template.bind({})
L.args = { size: 'L', children }

const M = Template.bind({})
M.args = { size: 'M', children }

const S = Template.bind({})
S.args = { size: 'S', children }

const XS = Template.bind({})
XS.args = { size: 'XS', children }

export { XS, S, M, L, XL, X2L, X3L }
