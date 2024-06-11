"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateLoanArgs_1 = require("./args/AggregateLoanArgs");
const CreateManyLoanArgs_1 = require("./args/CreateManyLoanArgs");
const CreateOneLoanArgs_1 = require("./args/CreateOneLoanArgs");
const DeleteManyLoanArgs_1 = require("./args/DeleteManyLoanArgs");
const DeleteOneLoanArgs_1 = require("./args/DeleteOneLoanArgs");
const FindFirstLoanArgs_1 = require("./args/FindFirstLoanArgs");
const FindFirstLoanOrThrowArgs_1 = require("./args/FindFirstLoanOrThrowArgs");
const FindManyLoanArgs_1 = require("./args/FindManyLoanArgs");
const FindUniqueLoanArgs_1 = require("./args/FindUniqueLoanArgs");
const FindUniqueLoanOrThrowArgs_1 = require("./args/FindUniqueLoanOrThrowArgs");
const GroupByLoanArgs_1 = require("./args/GroupByLoanArgs");
const UpdateManyLoanArgs_1 = require("./args/UpdateManyLoanArgs");
const UpdateOneLoanArgs_1 = require("./args/UpdateOneLoanArgs");
const UpsertOneLoanArgs_1 = require("./args/UpsertOneLoanArgs");
const helpers_1 = require("../../../helpers");
const Loan_1 = require("../../../models/Loan");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateLoan_1 = require("../../outputs/AggregateLoan");
const LoanGroupBy_1 = require("../../outputs/LoanGroupBy");
let LoanCrudResolver = class LoanCrudResolver {
    async aggregateLoan(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).loan.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyLoan(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).loan.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneLoan(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).loan.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyLoan(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).loan.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneLoan(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).loan.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstLoan(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).loan.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstLoanOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).loan.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async loans(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).loan.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async loan(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).loan.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getLoan(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).loan.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByLoan(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).loan.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyLoan(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).loan.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneLoan(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).loan.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneLoan(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).loan.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.LoanCrudResolver = LoanCrudResolver;
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
], LoanCrudResolver.prototype, "aggregateLoan", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyLoanArgs_1.CreateManyLoanArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LoanCrudResolver.prototype, "createManyLoan", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Loan_1.Loan, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneLoanArgs_1.CreateOneLoanArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LoanCrudResolver.prototype, "createOneLoan", null);
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
], LoanCrudResolver.prototype, "deleteManyLoan", null);
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
], LoanCrudResolver.prototype, "deleteOneLoan", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Loan_1.Loan, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstLoanArgs_1.FindFirstLoanArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LoanCrudResolver.prototype, "findFirstLoan", null);
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
], LoanCrudResolver.prototype, "findFirstLoanOrThrow", null);
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
], LoanCrudResolver.prototype, "loans", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Loan_1.Loan, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueLoanArgs_1.FindUniqueLoanArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LoanCrudResolver.prototype, "loan", null);
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
], LoanCrudResolver.prototype, "getLoan", null);
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
], LoanCrudResolver.prototype, "groupByLoan", null);
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
], LoanCrudResolver.prototype, "updateManyLoan", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Loan_1.Loan, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneLoanArgs_1.UpdateOneLoanArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LoanCrudResolver.prototype, "updateOneLoan", null);
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
], LoanCrudResolver.prototype, "upsertOneLoan", null);
exports.LoanCrudResolver = LoanCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Loan_1.Loan)
], LoanCrudResolver);
