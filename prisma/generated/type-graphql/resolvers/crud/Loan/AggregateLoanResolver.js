"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateLoanResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateLoanArgs_1 = require("./args/AggregateLoanArgs");
const Loan_1 = require("../../../models/Loan");
const AggregateLoan_1 = require("../../outputs/AggregateLoan");
const helpers_1 = require("../../../helpers");
let AggregateLoanResolver = class AggregateLoanResolver {
    async aggregateLoan(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).loan.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateLoanResolver = AggregateLoanResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateLoan_1.AggregateLoan, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateLoanArgs_1.AggregateLoanArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateLoanResolver.prototype, "aggregateLoan", null);
exports.AggregateLoanResolver = AggregateLoanResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Loan_1.Loan)
], AggregateLoanResolver);
