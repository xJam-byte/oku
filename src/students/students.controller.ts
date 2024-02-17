import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { StudentsService } from "./students.service";
import { CreateStudentDto } from "./Dto/create-student.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Student } from "./students.model";

@ApiTags("Students")
@Controller("students")
export class StudentsController {
  constructor(private studentsService: StudentsService) {}

  @ApiOperation({ summary: "Creating a new student" })
  @ApiResponse({ status: 200, type: Student })
  @Post()
  create(@Body() dto: CreateStudentDto) {
    return this.studentsService.createStudent(dto);
  }

  @ApiOperation({ summary: "Getting all students" })
  @ApiResponse({ status: 200, type: Student })
  @Get("/:name")
  getByName(@Param("firstName") name: string) {
    return this.studentsService.getStudentByName(name);
  }

  @ApiOperation({ summary: "Getting a student by name" })
  @ApiResponse({ status: 200, type: Student })
  @Get()
  getAll() {
    return this.studentsService.getAllStudents();
  }
}
