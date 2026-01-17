import { defineUnoSetup } from '@slidev/types'

export default defineUnoSetup(() => ({
  theme: {
    colors: {
      primary: '#08B54D',
    },
  },
  shortcuts: {
    'bg-primary': 'bg-[#08B54D]',
    'text-primary': 'text-[#08B54D]',
    'border-primary': 'border-[#08B54D]',
  },
}))
