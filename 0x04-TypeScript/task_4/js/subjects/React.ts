import { Subject } from './Subject';
import { Teacher } from './Teacher';

export class React extends Subject {
  getRequirements(): string {
    return 'Here is the list of requirements for React';
  }

  getAvailableTeacher(): string {
    if (this.teacher && (this.teacher as Teacher).experienceTeachingReact? number((this.teacher as Teacher).experienceTeachingReact) : 0  ) {
      return `Available Teacher: ${(this.teacher as Teacher).firstName}`;
    } else {
      return 'No available teacher';
    }
  }
}

