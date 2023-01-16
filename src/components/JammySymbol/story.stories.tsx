import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import { JammySymbol, JammySymbolProps } from '.'

export default {
  title: 'Components/JammySymbol',
  component: JammySymbol,
}

const Template: Story<JammySymbolProps> = (args) => <JammySymbol {...args} />

const Large = Template.bind({ size: 'large' })
Large.args = { size: 'large' }

const Medium = Template.bind({ size: 'medium' })
Medium.args = { size: 'medium' }

const Small = Template.bind({ size: 'small' })
Small.args = { size: 'small' }

export { Large, Medium, Small }
