import { LoanCreateManyUserInputEnvelope } from "../inputs/LoanCreateManyUserInputEnvelope";
import { LoanCreateOrConnectWithoutUserInput } from "../inputs/LoanCreateOrConnectWithoutUserInput";
import { LoanCreateWithoutUserInput } from "../inputs/LoanCreateWithoutUserInput";
import { LoanScalarWhereInput } from "../inputs/LoanScalarWhereInput";
import { LoanUpdateManyWithWhereWithoutUserInput } from "../inputs/LoanUpdateManyWithWhereWithoutUserInput";
import { LoanUpdateWithWhereUniqueWithoutUserInput } from "../inputs/LoanUpdateWithWhereUniqueWithoutUserInput";
import { LoanUpsertWithWhereUniqueWithoutUserInput } from "../inputs/LoanUpsertWithWhereUniqueWithoutUserInput";
import { LoanWhereUniqueInput } from "../inputs/LoanWhereUniqueInput";
export declare class LoanUpdateManyWithoutUserNestedInput {
    create?: LoanCreateWithoutUserInput[] | undefined;
    connectOrCreate?: LoanCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: LoanUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    createMany?: LoanCreateManyUserInputEnvelope | undefined;
    set?: LoanWhereUniqueInput[] | undefined;
    disconnect?: LoanWhereUniqueInput[] | undefined;
    delete?: LoanWhereUniqueInput[] | undefined;
    connect?: LoanWhereUniqueInput[] | undefined;
    update?: LoanUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: LoanUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: LoanScalarWhereInput[] | undefined;
}
