import type { GraphQLResolveInfo } from "graphql";
import { FindFirstLoanOrThrowArgs } from "./args/FindFirstLoanOrThrowArgs";
import { Loan } from "../../../models/Loan";
export declare class FindFirstLoanOrThrowResolver {
    findFirstLoanOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstLoanOrThrowArgs): Promise<Loan | null>;
}
