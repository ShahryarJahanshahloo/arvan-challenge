import type { Meta, StoryObj } from '@storybook/react'

import FormCheckbox from '../components/FormCheckbox'

const meta = {
  title: 'Form/Checkbox',
  component: FormCheckbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FormCheckbox>

export default meta
type Story = StoryObj<typeof meta>

export const Checked: Story = {
  args: {
    label: 'Tag1',
    checked: true,
  },
}

export const Unchecked: Story = {
  args: {
    label: 'Tag1',
    checked: false,
  },
}
