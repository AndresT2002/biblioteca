"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneLoanResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneLoanArgs_1 = require("./args/UpsertOneLoanArgs");
const Loan_1 = require("../../../models/Loan");
const helpers_1 = require("../../../helpers");
let UpsertOneLoanResolver = class UpsertOneLoanResolver {
    async upsertOneLoan(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).loan.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpsertOneLoanResolver = UpsertOneLoanResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Loan_1.Loan, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneLoanArgs_1.UpsertOneLoanArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneLoanResolver.prototype, "upsertOneLoan", null);
exports.UpsertOneLoanResolver = UpsertOneLoanResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Loan_1.Loan)
], UpsertOneLoanResolver);
