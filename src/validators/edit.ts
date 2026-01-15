import { z } from "zod"

export const editFormSchema = z.object({
  email: z.email('Digite um email válido.').optional().or(z.literal('')),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres.').optional().or(z.literal('')),
})

export type EditFormData = z.infer<typeof editFormSchema>