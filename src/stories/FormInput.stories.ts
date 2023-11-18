import type { Meta, StoryObj } from '@storybook/react'

import FormInput from '../components/FormInput'

const meta = {
  title: 'Form/Input',
  component: FormInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FormInput>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    label: 'Username',
  },
}

export const WithPlaceholder: Story = {
  args: {
    ...Base.args,
    placeholder: 'Enter Username',
  },
}

export const Valid: Story = {
  args: {
    ...Base.args,
    error: undefined,
  },
}

export const Invalid: Story = {
  args: {
    ...Base.args,
    error: 'invalid input',
    value: 'shahryar',
    touched: true,
  },
}

export const CustomizedStyle: Story = {
  args: {
    ...Invalid.args,
    containerClassName: 'text-grey-6',
    inputClassName: 'w-64 h-12 text-sm text-grey-4',
    labelClassName: 'text-center',
    errorClassName: 'mt-2',
  },
}

export const TextArea: Story = {
  args: {
    ...Base.args,
    resize: 'both',
    textarea: true,
  },
}
