import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  // use cors
  const app = await NestFactory.create(AppModule, { cors: true })
  await app.listen(3000)
}
bootstrap()
