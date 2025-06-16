import { z } from 'zod'

export const schema = z
  .object({
    url: z.string().min(1, 'Поле не может быть пустым').url('Невереный формат url'),
    skipValidation: z.boolean().default(false)
  })
  .superRefine(data => {
    if (data.skipValidation) return
  })
