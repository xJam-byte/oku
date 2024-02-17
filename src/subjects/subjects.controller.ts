import { Body, Controller, Get, Post } from "@nestjs/common";
import { SubjectsService } from "./subjects.service";
import { CreateSubjectDto } from "./Dto/create-subject-dto";

@Controller("subjects")
export class SubjectsController {
  constructor(private subjectService: SubjectsService) {}

  @Post()
  addSubject(@Body() dto: CreateSubjectDto) {
    return this.subjectService.addSubject(dto);
  }

  @Get()
  getAllSubjects() {
    return this.subjectService.getAllSubjects();
  }
}
