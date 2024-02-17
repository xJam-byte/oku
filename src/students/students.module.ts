import { Module } from "@nestjs/common";
import { StudentsController } from "./students.controller";
import { StudentsService } from "./students.service";
import { Student } from "./students.model";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
  controllers: [StudentsController],
  providers: [StudentsService],
  imports: [SequelizeModule.forFeature([Student])],
  exports: [StudentsService],
})
export class StudentsModule {}
