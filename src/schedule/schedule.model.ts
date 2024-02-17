import { ApiProperty } from "@nestjs/swagger";
import { Column, Model, DataType, Table } from "sequelize-typescript";

interface ScheduleCreationAttrs {
  subjectId: number;
  teacherName: string;
  lesson_date: string;
  start_of_lesson: string;
  end_of_lesson: string;
}

@Table({ tableName: "schedule" })
export class Schedule extends Model<Schedule, ScheduleCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  subjectId: number;

  @Column({ type: DataType.STRING, allowNull: false })
  teacherName: string;

  @Column({ type: DataType.STRING, allowNull: false })
  lesson_date: string;

  @Column({ type: DataType.STRING, allowNull: false })
  start_of_lesson: string;

  @Column({ type: DataType.STRING, allowNull: false })
  end_of_lesson: string;
}
