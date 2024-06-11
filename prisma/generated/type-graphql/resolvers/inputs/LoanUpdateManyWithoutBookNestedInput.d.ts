import { LoanCreateManyBookInputEnvelope } from "../inputs/LoanCreateManyBookInputEnvelope";
import { LoanCreateOrConnectWithoutBookInput } from "../inputs/LoanCreateOrConnectWithoutBookInput";
import { LoanCreateWithoutBookInput } from "../inputs/LoanCreateWithoutBookInput";
import { LoanScalarWhereInput } from "../inputs/LoanScalarWhereInput";
import { LoanUpdateManyWithWhereWithoutBookInput } from "../inputs/LoanUpdateManyWithWhereWithoutBookInput";
import { LoanUpdateWithWhereUniqueWithoutBookInput } from "../inputs/LoanUpdateWithWhereUniqueWithoutBookInput";
import { LoanUpsertWithWhereUniqueWithoutBookInput } from "../inputs/LoanUpsertWithWhereUniqueWithoutBookInput";
import { LoanWhereUniqueInput } from "../inputs/LoanWhereUniqueInput";
export declare class LoanUpdateManyWithoutBookNestedInput {
    create?: LoanCreateWithoutBookInput[] | undefined;
    connectOrCreate?: LoanCreateOrConnectWithoutBookInput[] | undefined;
    upsert?: LoanUpsertWithWhereUniqueWithoutBookInput[] | undefined;
    createMany?: LoanCreateManyBookInputEnvelope | undefined;
    set?: LoanWhereUniqueInput[] | undefined;
    disconnect?: LoanWhereUniqueInput[] | undefined;
    delete?: LoanWhereUniqueInput[] | undefined;
    connect?: LoanWhereUniqueInput[] | undefined;
    update?: LoanUpdateWithWhereUniqueWithoutBookInput[] | undefined;
    updateMany?: LoanUpdateManyWithWhereWithoutBookInput[] | undefined;
    deleteMany?: LoanScalarWhereInput[] | undefined;
}
