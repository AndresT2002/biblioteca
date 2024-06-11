import { LoanOrderByWithAggregationInput } from "../../../inputs/LoanOrderByWithAggregationInput";
import { LoanScalarWhereWithAggregatesInput } from "../../../inputs/LoanScalarWhereWithAggregatesInput";
import { LoanWhereInput } from "../../../inputs/LoanWhereInput";
export declare class GroupByLoanArgs {
    where?: LoanWhereInput | undefined;
    orderBy?: LoanOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "userId" | "bookId" | "status">;
    having?: LoanScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
