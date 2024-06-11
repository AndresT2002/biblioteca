import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneLoanArgs } from "./args/DeleteOneLoanArgs";
import { Loan } from "../../../models/Loan";
export declare class DeleteOneLoanResolver {
    deleteOneLoan(ctx: any, info: GraphQLResolveInfo, args: DeleteOneLoanArgs): Promise<Loan | null>;
}
