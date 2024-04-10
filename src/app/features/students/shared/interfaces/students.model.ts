import { Student } from "./student.model";

export interface Students {
    items: Array<Student>;
    hasNext: boolean;
    remainingRecords: number;
}