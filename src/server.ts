import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient, prismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)

app.get('/', () => {
  const habits = prisma.habit.findMany({
    
  })


  return 'hello world'
})

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP Server running!');
})