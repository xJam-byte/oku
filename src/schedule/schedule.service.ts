import { Injectable } from "@nestjs/common";
import { Schedule } from "./schedule.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreateScheduleDto } from "./Dto/create-schedule-dto";
import { Repository, Between } from "typeorm";

@Injectable()
export class ScheduleService {
  constructor(
    @InjectModel(Schedule) private scheduleRepository: typeof Schedule
  ) {}

  async getDaySchedule(date: string) {
    const schedule = await this.scheduleRepository.findAll({
      where: { lesson_date: date },
    });
    console.log(schedule);

    return schedule;
  }

  async createSchedule(dto: CreateScheduleDto) {
    const schedule = await this.scheduleRepository.create(dto);
    return schedule;
  }

  async getAllSchedule() {
    const schedule = await this.scheduleRepository.findAll();
    return schedule;
  }

  async getMonthSchedule(month: string, year: string) {
    const schedule = await this.scheduleRepository.findAll();
    const newschedule = schedule.filter((one) => {
      return (
        one.lesson_date.split("-")[1] == month &&
        one.lesson_date.split("-")[0] == year
      );
    });
    return newschedule;
  }
}
