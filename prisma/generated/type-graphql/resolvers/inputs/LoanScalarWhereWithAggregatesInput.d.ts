import { EnumLoanStatusWithAggregatesFilter } from "../inputs/EnumLoanStatusWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class LoanScalarWhereWithAggregatesInput {
    AND?: LoanScalarWhereWithAggregatesInput[] | undefined;
    OR?: LoanScalarWhereWithAggregatesInput[] | undefined;
    NOT?: LoanScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    bookId?: StringWithAggregatesFilter | undefined;
    status?: EnumLoanStatusWithAggregatesFilter | undefined;
}
