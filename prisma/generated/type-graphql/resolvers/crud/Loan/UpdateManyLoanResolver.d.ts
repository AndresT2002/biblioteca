import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyLoanArgs } from "./args/UpdateManyLoanArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyLoanResolver {
    updateManyLoan(ctx: any, info: GraphQLResolveInfo, args: UpdateManyLoanArgs): Promise<AffectedRowsOutput>;
}
