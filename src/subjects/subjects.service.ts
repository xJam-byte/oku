import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Subject } from "./subjects.model";
import { CreateSubjectDto } from "./Dto/create-subject-dto";

@Injectable()
export class SubjectsService {
  constructor(
    @InjectModel(Subject) private subjectRepository: typeof Subject
  ) {}

  async addSubject(dto: CreateSubjectDto) {
    const subject = await this.subjectRepository.create(dto);
    return subject;
  }

  async getAllSubjects() {
    const allSubjects = await this.subjectRepository.findAll();
    return allSubjects;
  }
}
