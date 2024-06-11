"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyLoanResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyLoanArgs_1 = require("./args/FindManyLoanArgs");
const Loan_1 = require("../../../models/Loan");
const helpers_1 = require("../../../helpers");
let FindManyLoanResolver = class FindManyLoanResolver {
    async loans(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).loan.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindManyLoanResolver = FindManyLoanResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Loan_1.Loan], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyLoanArgs_1.FindManyLoanArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyLoanResolver.prototype, "loans", null);
exports.FindManyLoanResolver = FindManyLoanResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Loan_1.Loan)
], FindManyLoanResolver);
