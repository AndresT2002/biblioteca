"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumLoanStatusWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumLoanStatusFilter_1 = require("../inputs/NestedEnumLoanStatusFilter");
const NestedEnumLoanStatusWithAggregatesFilter_1 = require("../inputs/NestedEnumLoanStatusWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const LoanStatus_1 = require("../../enums/LoanStatus");
let EnumLoanStatusWithAggregatesFilter = class EnumLoanStatusWithAggregatesFilter {
};
exports.EnumLoanStatusWithAggregatesFilter = EnumLoanStatusWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanStatus_1.LoanStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumLoanStatusWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanStatus_1.LoanStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumLoanStatusWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanStatus_1.LoanStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumLoanStatusWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumLoanStatusWithAggregatesFilter_1.NestedEnumLoanStatusWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumLoanStatusWithAggregatesFilter_1.NestedEnumLoanStatusWithAggregatesFilter)
], EnumLoanStatusWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumLoanStatusWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumLoanStatusFilter_1.NestedEnumLoanStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumLoanStatusFilter_1.NestedEnumLoanStatusFilter)
], EnumLoanStatusWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumLoanStatusFilter_1.NestedEnumLoanStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumLoanStatusFilter_1.NestedEnumLoanStatusFilter)
], EnumLoanStatusWithAggregatesFilter.prototype, "_max", void 0);
exports.EnumLoanStatusWithAggregatesFilter = EnumLoanStatusWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumLoanStatusWithAggregatesFilter", {})
], EnumLoanStatusWithAggregatesFilter);
