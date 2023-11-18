import type { Meta, StoryObj } from '@storybook/react'

import FormSubmitButton from '../components/FormSubmitButton'

const meta = {
  title: 'Form/SubmitButton',
  component: FormSubmitButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FormSubmitButton>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    label: 'Submit',
    inputClassName: 'w-24 py-2',
  },
}

export const Valid: Story = {
  args: {
    ...Base.args,
  },
}

export const Disabled: Story = {
  args: {
    ...Base.args,
    disabled: true,
  },
}

export const Loading: Story = {
  args: {
    ...Base.args,
    loading: true,
  },
}
