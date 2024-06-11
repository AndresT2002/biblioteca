import type { GraphQLResolveInfo } from "graphql";
import { AggregateLoanArgs } from "./args/AggregateLoanArgs";
import { AggregateLoan } from "../../outputs/AggregateLoan";
export declare class AggregateLoanResolver {
    aggregateLoan(ctx: any, info: GraphQLResolveInfo, args: AggregateLoanArgs): Promise<AggregateLoan>;
}
