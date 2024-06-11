import type { GraphQLResolveInfo } from "graphql";
import { GroupByLoanArgs } from "./args/GroupByLoanArgs";
import { LoanGroupBy } from "../../outputs/LoanGroupBy";
export declare class GroupByLoanResolver {
    groupByLoan(ctx: any, info: GraphQLResolveInfo, args: GroupByLoanArgs): Promise<LoanGroupBy[]>;
}
