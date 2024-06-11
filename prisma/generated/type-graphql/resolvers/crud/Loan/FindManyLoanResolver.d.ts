import type { GraphQLResolveInfo } from "graphql";
import { FindManyLoanArgs } from "./args/FindManyLoanArgs";
import { Loan } from "../../../models/Loan";
export declare class FindManyLoanResolver {
    loans(ctx: any, info: GraphQLResolveInfo, args: FindManyLoanArgs): Promise<Loan[]>;
}
