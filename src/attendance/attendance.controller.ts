import { Body, Controller, Get, Post } from "@nestjs/common";
import { AttendanceService } from "./attendance.service";
import { CreateAttendanceDto } from "./Dto/create-attendance-dto";

@Controller("attendance")
export class AttendanceController {
  constructor(private attendanceService: AttendanceService) {}

  @Get()
  getAttendance() {
    return this.attendanceService.getAttendance();
  }

  @Post()
  addAttendance(@Body() dto: CreateAttendanceDto) {
    return this.attendanceService.addAttendance(dto);
  }
}
