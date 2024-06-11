import { NestedEnumLoanStatusFilter } from "../inputs/NestedEnumLoanStatusFilter";
export declare class EnumLoanStatusFilter {
    equals?: "PENDING" | "RETURNED" | undefined;
    in?: Array<"PENDING" | "RETURNED"> | undefined;
    notIn?: Array<"PENDING" | "RETURNED"> | undefined;
    not?: NestedEnumLoanStatusFilter | undefined;
}
