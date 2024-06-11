"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneLoanResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneLoanArgs_1 = require("./args/DeleteOneLoanArgs");
const Loan_1 = require("../../../models/Loan");
const helpers_1 = require("../../../helpers");
let DeleteOneLoanResolver = class DeleteOneLoanResolver {
    async deleteOneLoan(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).loan.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteOneLoanResolver = DeleteOneLoanResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Loan_1.Loan, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneLoanArgs_1.DeleteOneLoanArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneLoanResolver.prototype, "deleteOneLoan", null);
exports.DeleteOneLoanResolver = DeleteOneLoanResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Loan_1.Loan)
], DeleteOneLoanResolver);
