import { UserCreateOrConnectWithoutLoansInput } from "../inputs/UserCreateOrConnectWithoutLoansInput";
import { UserCreateWithoutLoansInput } from "../inputs/UserCreateWithoutLoansInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutLoansInput {
    create?: UserCreateWithoutLoansInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutLoansInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
