import { ApiProperty } from "@nestjs/swagger";
import { Column, Model, DataType, Table } from "sequelize-typescript";

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: "1", description: "Unique ID of the user" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({
    example: "user@gmail.com",
    description: "Unique e-mail of the user",
  })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;
  @ApiProperty({
    example: "123456",
    description: "Password of the user",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  // @Column({type: DataType.BOOLEAN, defaultValue: false})
  // banned: boolean;
  // @Column({type: DataType.STRING, allowNull: true})
  // banReason: string;
}
