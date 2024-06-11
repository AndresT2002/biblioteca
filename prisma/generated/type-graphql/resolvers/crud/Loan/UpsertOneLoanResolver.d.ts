import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneLoanArgs } from "./args/UpsertOneLoanArgs";
import { Loan } from "../../../models/Loan";
export declare class UpsertOneLoanResolver {
    upsertOneLoan(ctx: any, info: GraphQLResolveInfo, args: UpsertOneLoanArgs): Promise<Loan>;
}
