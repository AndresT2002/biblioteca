import { LoanCountOrderByAggregateInput } from "../inputs/LoanCountOrderByAggregateInput";
import { LoanMaxOrderByAggregateInput } from "../inputs/LoanMaxOrderByAggregateInput";
import { LoanMinOrderByAggregateInput } from "../inputs/LoanMinOrderByAggregateInput";
export declare class LoanOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    bookId?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    _count?: LoanCountOrderByAggregateInput | undefined;
    _max?: LoanMaxOrderByAggregateInput | undefined;
    _min?: LoanMinOrderByAggregateInput | undefined;
}
