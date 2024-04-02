import 'dotenv/config'
import { app } from "./app"
import 'reflect-metadata'
import { main as initializePrisma } from '../PrismaService'

initializePrisma()
  .then((): void => {
    console.log('Database connected')

    const PORT: number = Number(process.env.PORT) || 3000

    app.listen(PORT, (): void => console.log(`App is running at port ${PORT}`))
  })
  // .catch((error: unknown) => console.log(error))
