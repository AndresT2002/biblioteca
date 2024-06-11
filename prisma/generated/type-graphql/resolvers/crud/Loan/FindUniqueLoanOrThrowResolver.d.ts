import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueLoanOrThrowArgs } from "./args/FindUniqueLoanOrThrowArgs";
import { Loan } from "../../../models/Loan";
export declare class FindUniqueLoanOrThrowResolver {
    getLoan(ctx: any, info: GraphQLResolveInfo, args: FindUniqueLoanOrThrowArgs): Promise<Loan | null>;
}
