"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByLoanResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByLoanArgs_1 = require("./args/GroupByLoanArgs");
const Loan_1 = require("../../../models/Loan");
const LoanGroupBy_1 = require("../../outputs/LoanGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByLoanResolver = class GroupByLoanResolver {
    async groupByLoan(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).loan.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByLoanResolver = GroupByLoanResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [LoanGroupBy_1.LoanGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByLoanArgs_1.GroupByLoanArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByLoanResolver.prototype, "groupByLoan", null);
exports.GroupByLoanResolver = GroupByLoanResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Loan_1.Loan)
], GroupByLoanResolver);
