import { BookCreateWithoutLoansInput } from "../inputs/BookCreateWithoutLoansInput";
import { BookUpdateWithoutLoansInput } from "../inputs/BookUpdateWithoutLoansInput";
import { BookWhereInput } from "../inputs/BookWhereInput";
export declare class BookUpsertWithoutLoansInput {
    update: BookUpdateWithoutLoansInput;
    create: BookCreateWithoutLoansInput;
    where?: BookWhereInput | undefined;
}
