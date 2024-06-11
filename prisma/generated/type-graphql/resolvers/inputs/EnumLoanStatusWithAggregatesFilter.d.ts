import { NestedEnumLoanStatusFilter } from "../inputs/NestedEnumLoanStatusFilter";
import { NestedEnumLoanStatusWithAggregatesFilter } from "../inputs/NestedEnumLoanStatusWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumLoanStatusWithAggregatesFilter {
    equals?: "PENDING" | "RETURNED" | undefined;
    in?: Array<"PENDING" | "RETURNED"> | undefined;
    notIn?: Array<"PENDING" | "RETURNED"> | undefined;
    not?: NestedEnumLoanStatusWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumLoanStatusFilter | undefined;
    _max?: NestedEnumLoanStatusFilter | undefined;
}
