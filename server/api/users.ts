import { PrismaClient } from '@prisma/client'
import { defineEventHandler } from "h3";

const db = new PrismaClient({
  log: ['query'],
})

export default defineEventHandler(async (event) => {

  return {
    // users: await db.users.findMany()
    usersAlias: await db.users.findMany(),
  }

})
