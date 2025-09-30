import { Subject } from './Subject';
import { Teacher } from './Teacher';
// task_4/js/subjects/React.ts

declare interface Teacher {
  experienceTeachingReact?: number;
}
export namespace Subjects {
  export class React extends Subject {
    get requirements(): string {
      return 'Here is the list of requirements for React';
    }

    get availableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingReact) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }

    // Add the properties here
    get experienceTeachingReact(): number | undefined {
      return this.teacher?.experienceTeachingReact;
    }

    get firstName(): string | undefined {
      return this.teacher?.firstName;
    }
  }
}

