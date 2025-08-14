import { z } from 'zod'

export const schema = z.object({
  email: z.string().min(1, 'Поле не может быть пустым').email('Невереный формат email')
})
