import { LoanCreateManyUserInputEnvelope } from "../inputs/LoanCreateManyUserInputEnvelope";
import { LoanCreateOrConnectWithoutUserInput } from "../inputs/LoanCreateOrConnectWithoutUserInput";
import { LoanCreateWithoutUserInput } from "../inputs/LoanCreateWithoutUserInput";
import { LoanWhereUniqueInput } from "../inputs/LoanWhereUniqueInput";
export declare class LoanCreateNestedManyWithoutUserInput {
    create?: LoanCreateWithoutUserInput[] | undefined;
    connectOrCreate?: LoanCreateOrConnectWithoutUserInput[] | undefined;
    createMany?: LoanCreateManyUserInputEnvelope | undefined;
    connect?: LoanWhereUniqueInput[] | undefined;
}
