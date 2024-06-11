import { EnumLoanStatusFilter } from "../inputs/EnumLoanStatusFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class LoanScalarWhereInput {
    AND?: LoanScalarWhereInput[] | undefined;
    OR?: LoanScalarWhereInput[] | undefined;
    NOT?: LoanScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    userId?: StringFilter | undefined;
    bookId?: StringFilter | undefined;
    status?: EnumLoanStatusFilter | undefined;
}
