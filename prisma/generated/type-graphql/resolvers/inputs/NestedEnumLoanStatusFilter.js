"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumLoanStatusFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanStatus_1 = require("../../enums/LoanStatus");
let NestedEnumLoanStatusFilter = class NestedEnumLoanStatusFilter {
};
exports.NestedEnumLoanStatusFilter = NestedEnumLoanStatusFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanStatus_1.LoanStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumLoanStatusFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanStatus_1.LoanStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumLoanStatusFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanStatus_1.LoanStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumLoanStatusFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumLoanStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumLoanStatusFilter)
], NestedEnumLoanStatusFilter.prototype, "not", void 0);
exports.NestedEnumLoanStatusFilter = NestedEnumLoanStatusFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumLoanStatusFilter", {})
], NestedEnumLoanStatusFilter);
