"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumLoanStatusWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumLoanStatusFilter_1 = require("../inputs/NestedEnumLoanStatusFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const LoanStatus_1 = require("../../enums/LoanStatus");
let NestedEnumLoanStatusWithAggregatesFilter = class NestedEnumLoanStatusWithAggregatesFilter {
};
exports.NestedEnumLoanStatusWithAggregatesFilter = NestedEnumLoanStatusWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanStatus_1.LoanStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumLoanStatusWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanStatus_1.LoanStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumLoanStatusWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanStatus_1.LoanStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumLoanStatusWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumLoanStatusWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumLoanStatusWithAggregatesFilter)
], NestedEnumLoanStatusWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumLoanStatusWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumLoanStatusFilter_1.NestedEnumLoanStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumLoanStatusFilter_1.NestedEnumLoanStatusFilter)
], NestedEnumLoanStatusWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumLoanStatusFilter_1.NestedEnumLoanStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumLoanStatusFilter_1.NestedEnumLoanStatusFilter)
], NestedEnumLoanStatusWithAggregatesFilter.prototype, "_max", void 0);
exports.NestedEnumLoanStatusWithAggregatesFilter = NestedEnumLoanStatusWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumLoanStatusWithAggregatesFilter", {})
], NestedEnumLoanStatusWithAggregatesFilter);
