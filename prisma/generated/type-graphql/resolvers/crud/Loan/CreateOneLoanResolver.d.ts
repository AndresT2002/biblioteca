import type { GraphQLResolveInfo } from "graphql";
import { CreateOneLoanArgs } from "./args/CreateOneLoanArgs";
import { Loan } from "../../../models/Loan";
export declare class CreateOneLoanResolver {
    createOneLoan(ctx: any, info: GraphQLResolveInfo, args: CreateOneLoanArgs): Promise<Loan>;
}
