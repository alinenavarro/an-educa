import { FormControl } from "@angular/forms";

export interface StudentForm {
    id: FormControl<string>;
    name: FormControl<string>;
    cpf: FormControl<string>;
    grade: FormControl<string>;
    email: FormControl<string>;
    phone?: FormControl<string>;
}