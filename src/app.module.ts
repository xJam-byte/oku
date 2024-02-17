import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from "./users/users.module";
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/users.model";
import { StudentsModule } from "./students/students.module";
import { Student } from "./students/students.model";
import { AuthModule } from "./auth/auth.module";
import { ScheduleModule } from "./schedule/schedule.module";
import { AttendanceModule } from "./attendance/attendance.module";
import { SubjectsModule } from "./subjects/subjects.module";

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
    }),

    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Student],
      autoLoadModels: true,
    }),
    UsersModule,
    StudentsModule,
    AuthModule,
    ScheduleModule,
    AttendanceModule,
    SubjectsModule,
  ],
  exports: [],
})
export class AppModule {}
