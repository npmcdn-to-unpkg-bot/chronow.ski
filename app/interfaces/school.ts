var POLISH_GRADES = {
  0: '',
  1: 'niedostateczny',
  2: 'dopuszczający',
  3: 'dostateczny',
  4: 'dobry',
  5: 'bardzo dobry',
  6: 'celujący'
}

var AMERICAN_GRADES = {
  0: '',
  1: 'F',
  2: 'D',
  3: 'C',
  4: 'B',
  5: 'A',
  6: 'A+'
}

export class Grade {
  numerical: number;
  polish: string;
  american: string;

  constructor(grade: number) {
    this.numerical = grade;
    this.polish = POLISH_GRADES[grade];
    this.american = AMERICAN_GRADES[grade];
  }
}

export interface Subject {
  name: string;
  grade: Grade;
}

export interface School {
  name: string;
  codename: string;
  logo: boolean;
  technical_subjects?: Subject[];
  subjects: Subject[];
}