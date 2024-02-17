import { Module } from "@nestjs/common";
import { SubjectsController } from "./subjects.controller";
import { SubjectsService } from "./subjects.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Subject } from "./subjects.model";

@Module({
  controllers: [SubjectsController],
  providers: [SubjectsService],
  imports: [SequelizeModule.forFeature([Subject])],
  exports: [SubjectsService],
})
export class SubjectsModule {}
