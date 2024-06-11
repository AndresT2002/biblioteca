import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueLoanArgs } from "./args/FindUniqueLoanArgs";
import { Loan } from "../../../models/Loan";
export declare class FindUniqueLoanResolver {
    loan(ctx: any, info: GraphQLResolveInfo, args: FindUniqueLoanArgs): Promise<Loan | null>;
}
