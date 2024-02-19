import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { ScheduleService } from "./schedule.service";
import { CreateScheduleDto } from "./Dto/create-schedule-dto";

@Controller("schedule")
export class ScheduleController {
  constructor(private scheduleService: ScheduleService) {}

  @Post()
  addSchedule(@Body() dto: CreateScheduleDto) {
    return this.scheduleService.createSchedule(dto);
  }
  
  @Get()
  getAllShedule() {
    return this.scheduleService.getAllSchedule();
  }

  @Get("/day")
  getDayShedule(@Query("date") date: string) {
    return this.scheduleService.getDaySchedule(date);
  }

  @Get("/month")
  getMonthSchedule(@Query("month") month: string, @Query("year") year: string) {
    return this.scheduleService.getMonthSchedule(month, year);
  }

  @Get("/week")
  getWeekSchedule(@Query("date") date: string) {
    return this.scheduleService.getWeekSchedule(date);
  }
}
