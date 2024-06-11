import { LoanCreateManyBookInputEnvelope } from "../inputs/LoanCreateManyBookInputEnvelope";
import { LoanCreateOrConnectWithoutBookInput } from "../inputs/LoanCreateOrConnectWithoutBookInput";
import { LoanCreateWithoutBookInput } from "../inputs/LoanCreateWithoutBookInput";
import { LoanWhereUniqueInput } from "../inputs/LoanWhereUniqueInput";
export declare class LoanCreateNestedManyWithoutBookInput {
    create?: LoanCreateWithoutBookInput[] | undefined;
    connectOrCreate?: LoanCreateOrConnectWithoutBookInput[] | undefined;
    createMany?: LoanCreateManyBookInputEnvelope | undefined;
    connect?: LoanWhereUniqueInput[] | undefined;
}
