import type { GraphQLResolveInfo } from "graphql";
import { CreateManyLoanArgs } from "./args/CreateManyLoanArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyLoanResolver {
    createManyLoan(ctx: any, info: GraphQLResolveInfo, args: CreateManyLoanArgs): Promise<AffectedRowsOutput>;
}
