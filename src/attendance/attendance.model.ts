import { ApiProperty } from "@nestjs/swagger";
import { Column, Model, DataType, Table } from "sequelize-typescript";

interface AttendanceCreationAttrs {
  scheduleId: number;
  studentId: number;
  absence_date: Date;
  reason_for_absence: string;
  attendance_status: string;
}

@Table({ tableName: "attendance" })
export class Attendance extends Model<Attendance, AttendanceCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  scheduleId: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  studentId: number;

  @Column({ type: DataType.DATE, allowNull: true })
  absence_date: Date;

  @Column({ type: DataType.STRING, allowNull: false })
  reason_for_absence: string;

  @Column({ type: DataType.STRING, allowNull: false })
  attendance_status: string;
}
