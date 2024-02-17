import { Module } from "@nestjs/common";
import { AttendanceController } from "./attendance.controller";
import { AttendanceService } from "./attendance.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Attendance } from "./attendance.model";

@Module({
  controllers: [AttendanceController],
  providers: [AttendanceService],
  imports: [SequelizeModule.forFeature([Attendance])],
  exports: [AttendanceService],
})
export class AttendanceModule {}
