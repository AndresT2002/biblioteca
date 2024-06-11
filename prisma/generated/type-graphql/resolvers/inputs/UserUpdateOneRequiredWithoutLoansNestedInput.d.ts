import { UserCreateOrConnectWithoutLoansInput } from "../inputs/UserCreateOrConnectWithoutLoansInput";
import { UserCreateWithoutLoansInput } from "../inputs/UserCreateWithoutLoansInput";
import { UserUpdateToOneWithWhereWithoutLoansInput } from "../inputs/UserUpdateToOneWithWhereWithoutLoansInput";
import { UserUpsertWithoutLoansInput } from "../inputs/UserUpsertWithoutLoansInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutLoansNestedInput {
    create?: UserCreateWithoutLoansInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutLoansInput | undefined;
    upsert?: UserUpsertWithoutLoansInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateToOneWithWhereWithoutLoansInput | undefined;
}
