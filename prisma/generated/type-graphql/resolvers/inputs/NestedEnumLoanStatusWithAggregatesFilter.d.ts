import { NestedEnumLoanStatusFilter } from "../inputs/NestedEnumLoanStatusFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumLoanStatusWithAggregatesFilter {
    equals?: "PENDING" | "RETURNED" | undefined;
    in?: Array<"PENDING" | "RETURNED"> | undefined;
    notIn?: Array<"PENDING" | "RETURNED"> | undefined;
    not?: NestedEnumLoanStatusWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumLoanStatusFilter | undefined;
    _max?: NestedEnumLoanStatusFilter | undefined;
}
