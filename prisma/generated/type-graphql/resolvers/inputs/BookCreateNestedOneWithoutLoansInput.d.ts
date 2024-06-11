import { BookCreateOrConnectWithoutLoansInput } from "../inputs/BookCreateOrConnectWithoutLoansInput";
import { BookCreateWithoutLoansInput } from "../inputs/BookCreateWithoutLoansInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";
export declare class BookCreateNestedOneWithoutLoansInput {
    create?: BookCreateWithoutLoansInput | undefined;
    connectOrCreate?: BookCreateOrConnectWithoutLoansInput | undefined;
    connect?: BookWhereUniqueInput | undefined;
}
