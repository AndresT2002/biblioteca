import type { GraphQLResolveInfo } from "graphql";
import { FindFirstLoanArgs } from "./args/FindFirstLoanArgs";
import { Loan } from "../../../models/Loan";
export declare class FindFirstLoanResolver {
    findFirstLoan(ctx: any, info: GraphQLResolveInfo, args: FindFirstLoanArgs): Promise<Loan | null>;
}
