import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Attendance } from "./attendance.model";
import { CreateAttendanceDto } from "./Dto/create-attendance-dto";

@Injectable()
export class AttendanceService {
  constructor(
    @InjectModel(Attendance) private attRepository: typeof Attendance
  ) {}

  async getAttendance() {
    const data = await this.attRepository.findAll();
    return data;
  }

  async addAttendance(dto: CreateAttendanceDto) {
    const data = await this.attRepository.create(dto);
    return data;
  }
}
