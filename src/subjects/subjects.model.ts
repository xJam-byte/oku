import { ApiProperty } from "@nestjs/swagger";
import { Column, Model, DataType, Table } from "sequelize-typescript";

interface SubjectCreationAttrs {
  subjectName: string;
}

@Table({ tableName: "subjects" })
export class Subject extends Model<Subject, SubjectCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  subjectName: string;
}
