import { Module } from "@nestjs/common";
import { ScheduleController } from "./schedule.controller";
import { ScheduleService } from "./schedule.service";
import { Schedule } from "./schedule.model";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
  controllers: [ScheduleController],
  providers: [ScheduleService],
  imports: [SequelizeModule.forFeature([Schedule])],
  exports: [ScheduleService],
})
export class ScheduleModule {}
