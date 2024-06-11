import { UserCreateWithoutLoansInput } from "../inputs/UserCreateWithoutLoansInput";
import { UserUpdateWithoutLoansInput } from "../inputs/UserUpdateWithoutLoansInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
export declare class UserUpsertWithoutLoansInput {
    update: UserUpdateWithoutLoansInput;
    create: UserCreateWithoutLoansInput;
    where?: UserWhereInput | undefined;
}
