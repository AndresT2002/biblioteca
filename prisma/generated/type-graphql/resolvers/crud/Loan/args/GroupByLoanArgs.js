"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByLoanArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanOrderByWithAggregationInput_1 = require("../../../inputs/LoanOrderByWithAggregationInput");
const LoanScalarWhereWithAggregatesInput_1 = require("../../../inputs/LoanScalarWhereWithAggregatesInput");
const LoanWhereInput_1 = require("../../../inputs/LoanWhereInput");
const LoanScalarFieldEnum_1 = require("../../../../enums/LoanScalarFieldEnum");
let GroupByLoanArgs = class GroupByLoanArgs {
};
exports.GroupByLoanArgs = GroupByLoanArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanWhereInput_1.LoanWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LoanWhereInput_1.LoanWhereInput)
], GroupByLoanArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanOrderByWithAggregationInput_1.LoanOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByLoanArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanScalarFieldEnum_1.LoanScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByLoanArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanScalarWhereWithAggregatesInput_1.LoanScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LoanScalarWhereWithAggregatesInput_1.LoanScalarWhereWithAggregatesInput)
], GroupByLoanArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByLoanArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByLoanArgs.prototype, "skip", void 0);
exports.GroupByLoanArgs = GroupByLoanArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByLoanArgs);
