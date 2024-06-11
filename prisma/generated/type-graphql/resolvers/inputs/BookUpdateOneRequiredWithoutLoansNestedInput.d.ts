import { BookCreateOrConnectWithoutLoansInput } from "../inputs/BookCreateOrConnectWithoutLoansInput";
import { BookCreateWithoutLoansInput } from "../inputs/BookCreateWithoutLoansInput";
import { BookUpdateToOneWithWhereWithoutLoansInput } from "../inputs/BookUpdateToOneWithWhereWithoutLoansInput";
import { BookUpsertWithoutLoansInput } from "../inputs/BookUpsertWithoutLoansInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";
export declare class BookUpdateOneRequiredWithoutLoansNestedInput {
    create?: BookCreateWithoutLoansInput | undefined;
    connectOrCreate?: BookCreateOrConnectWithoutLoansInput | undefined;
    upsert?: BookUpsertWithoutLoansInput | undefined;
    connect?: BookWhereUniqueInput | undefined;
    update?: BookUpdateToOneWithWhereWithoutLoansInput | undefined;
}
