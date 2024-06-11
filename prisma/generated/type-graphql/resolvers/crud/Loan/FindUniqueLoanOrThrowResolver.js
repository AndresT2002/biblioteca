"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueLoanOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueLoanOrThrowArgs_1 = require("./args/FindUniqueLoanOrThrowArgs");
const Loan_1 = require("../../../models/Loan");
const helpers_1 = require("../../../helpers");
let FindUniqueLoanOrThrowResolver = class FindUniqueLoanOrThrowResolver {
    async getLoan(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).loan.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueLoanOrThrowResolver = FindUniqueLoanOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Loan_1.Loan, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueLoanOrThrowArgs_1.FindUniqueLoanOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueLoanOrThrowResolver.prototype, "getLoan", null);
exports.FindUniqueLoanOrThrowResolver = FindUniqueLoanOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Loan_1.Loan)
], FindUniqueLoanOrThrowResolver);
