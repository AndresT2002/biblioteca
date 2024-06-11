"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstLoanOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstLoanOrThrowArgs_1 = require("./args/FindFirstLoanOrThrowArgs");
const Loan_1 = require("../../../models/Loan");
const helpers_1 = require("../../../helpers");
let FindFirstLoanOrThrowResolver = class FindFirstLoanOrThrowResolver {
    async findFirstLoanOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).loan.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstLoanOrThrowResolver = FindFirstLoanOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Loan_1.Loan, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstLoanOrThrowArgs_1.FindFirstLoanOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstLoanOrThrowResolver.prototype, "findFirstLoanOrThrow", null);
exports.FindFirstLoanOrThrowResolver = FindFirstLoanOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Loan_1.Loan)
], FindFirstLoanOrThrowResolver);
