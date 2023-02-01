import React from 'react'
import { Story } from '@storybook/react'
import { Heading, HeadingProps } from '.'

export default {
  title: 'Components/Heading',
  component: Heading,
}

const children = 'テキスト入ります'
const Template: Story<HeadingProps> = (args) => <Heading {...args} />

const H1 = Template.bind({})
H1.args = { tag: 'h1', children }

const H2 = Template.bind({})
H2.args = { tag: 'h2', children }

const H3 = Template.bind({})
H3.args = { tag: 'h3', children }

const H4 = Template.bind({})
H4.args = { tag: 'h4', children }

const H5 = Template.bind({})
H5.args = { tag: 'h5', children }

const H6 = Template.bind({})
H6.args = { tag: 'h6', children }

export { H1, H2, H3, H4, H5, H6 }
