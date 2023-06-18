import { Static, Type } from '@sinclair/typebox'

export const User = Type.Object({
  name: Type.String(),
  email: Type.String({ format: 'email' }),
  password: Type.String()
})

export type UserType = Static<typeof User>