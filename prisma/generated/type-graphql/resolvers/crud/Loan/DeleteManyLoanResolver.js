"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyLoanResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyLoanArgs_1 = require("./args/DeleteManyLoanArgs");
const Loan_1 = require("../../../models/Loan");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyLoanResolver = class DeleteManyLoanResolver {
    async deleteManyLoan(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).loan.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyLoanResolver = DeleteManyLoanResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyLoanArgs_1.DeleteManyLoanArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyLoanResolver.prototype, "deleteManyLoan", null);
exports.DeleteManyLoanResolver = DeleteManyLoanResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Loan_1.Loan)
], DeleteManyLoanResolver);
