import { ApiProperty } from "@nestjs/swagger";
import { Column, Model, DataType, Table } from "sequelize-typescript";

interface StudentCreationAttrs {
  firstName: string;
  lastName: string;
  middleName: string;
  isAbsent: boolean;
  reasonForAbsence: string;
  dateOfAbsence: string;
  attendance: string;
}

@Table({ tableName: "students" })
export class Student extends Model<Student, StudentCreationAttrs> {
  @ApiProperty({ example: "1", description: "Unique ID of the student" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "Abylai",
    description: "Name of a student",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  firstName: string;

  @ApiProperty({
    example: "Muratbayev",
    description: "Lastname of a student",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  lastName: string;

  @ApiProperty({
    example: "Ashatovich",
    description: "Middlename of a student",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  middleName: string;
}
