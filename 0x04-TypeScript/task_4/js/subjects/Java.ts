import { Subject } from './Subject';
import { Teacher } from './Teacher';

declare interface Teacher {
  experienceTeachingJava?: number;
}
export class Java extends Subject {
  getRequirements(): string {
    return 'Here is the list of requirements for Java';
  }

  getAvailableTeacher(): string {
    if (this.teacher && (this.teacher as Teacher).experienceTeachingJava) {
      return `Available Teacher: ${(this.teacher as Teacher).firstName}`;
    } else {
      return 'No available teacher';
    }
  }
}
