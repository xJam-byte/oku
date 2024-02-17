import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Documentation of Oku.kz")
    .setDescription(
      "lorem ipsum dolor sit amet consectetur adip eu fugiat null a ante et dolore magna aliqu fugiat null"
    )
    .setVersion("1.0.0")
    .addTag("Oku.team")
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("/api/docs", app, document);

  await app.listen(PORT, () => console.log("Server listening on port" + PORT));
}
start();
