"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumLoanStatusFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumLoanStatusFilter_1 = require("../inputs/NestedEnumLoanStatusFilter");
const LoanStatus_1 = require("../../enums/LoanStatus");
let EnumLoanStatusFilter = class EnumLoanStatusFilter {
};
exports.EnumLoanStatusFilter = EnumLoanStatusFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanStatus_1.LoanStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumLoanStatusFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanStatus_1.LoanStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumLoanStatusFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanStatus_1.LoanStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumLoanStatusFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumLoanStatusFilter_1.NestedEnumLoanStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumLoanStatusFilter_1.NestedEnumLoanStatusFilter)
], EnumLoanStatusFilter.prototype, "not", void 0);
exports.EnumLoanStatusFilter = EnumLoanStatusFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumLoanStatusFilter", {})
], EnumLoanStatusFilter);
