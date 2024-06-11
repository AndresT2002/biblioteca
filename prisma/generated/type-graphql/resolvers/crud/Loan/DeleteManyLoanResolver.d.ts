import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyLoanArgs } from "./args/DeleteManyLoanArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyLoanResolver {
    deleteManyLoan(ctx: any, info: GraphQLResolveInfo, args: DeleteManyLoanArgs): Promise<AffectedRowsOutput>;
}
