"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyLoanResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyLoanArgs_1 = require("./args/UpdateManyLoanArgs");
const Loan_1 = require("../../../models/Loan");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyLoanResolver = class UpdateManyLoanResolver {
    async updateManyLoan(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).loan.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManyLoanResolver = UpdateManyLoanResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyLoanArgs_1.UpdateManyLoanArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyLoanResolver.prototype, "updateManyLoan", null);
exports.UpdateManyLoanResolver = UpdateManyLoanResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Loan_1.Loan)
], UpdateManyLoanResolver);
