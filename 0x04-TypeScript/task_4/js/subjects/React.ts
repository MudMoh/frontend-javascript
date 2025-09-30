import { Subject } from './Subject';
import { Teacher } from './Teacher';
// task_4/js/subjects/React.ts

declare interface Teacher {
  experienceTeachingReact?: number;
}
export class React extends Subject {
  getRequirements(): string {
    return 'Here is the list of requirements for React';
  }

  getAvailableTeacher(): string {
    if (this.teacher && (this.teacher as Teacher).experienceTeachingReact) {
      return `Available Teacher: ${(this.teacher as Teacher).firstName}`;
    } else {
      return 'No available teacher';
    }
  }
}

