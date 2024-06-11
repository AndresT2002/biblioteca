import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneLoanArgs } from "./args/UpdateOneLoanArgs";
import { Loan } from "../../../models/Loan";
export declare class UpdateOneLoanResolver {
    updateOneLoan(ctx: any, info: GraphQLResolveInfo, args: UpdateOneLoanArgs): Promise<Loan | null>;
}
