import { LoanCreateInput } from "../../../inputs/LoanCreateInput";
import { LoanUpdateInput } from "../../../inputs/LoanUpdateInput";
import { LoanWhereUniqueInput } from "../../../inputs/LoanWhereUniqueInput";
export declare class UpsertOneLoanArgs {
    where: LoanWhereUniqueInput;
    create: LoanCreateInput;
    update: LoanUpdateInput;
}
