
import zod, { email } from "zod";

export const UserSchema = zod.object({
    username: zod.string().max(20),
    password: zod.string(),
    name: zod.string()
})

export const SigninSchema = zod.object({
    username: zod.string().max(20),
    password: zod.string()
})

export const RoomSchema = zod.object({
    name: zod.string().max(20)
})