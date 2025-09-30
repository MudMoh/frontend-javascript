import { Subjects } from './Teacher';

export namespace Subjects {
  export class Subject {
    teacher: Subjects.Teacher;

    setTeacher(teacher: teacher.Teacher): void {
      this.teacher = teacher;
    }
  }
}   // Added namespace to encapsulate Subject class and avoid naming conflicts

