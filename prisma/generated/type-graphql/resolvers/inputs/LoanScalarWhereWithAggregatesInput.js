"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumLoanStatusWithAggregatesFilter_1 = require("../inputs/EnumLoanStatusWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let LoanScalarWhereWithAggregatesInput = class LoanScalarWhereWithAggregatesInput {
};
exports.LoanScalarWhereWithAggregatesInput = LoanScalarWhereWithAggregatesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanScalarWhereWithAggregatesInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanScalarWhereWithAggregatesInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], LoanScalarWhereWithAggregatesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], LoanScalarWhereWithAggregatesInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], LoanScalarWhereWithAggregatesInput.prototype, "bookId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumLoanStatusWithAggregatesFilter_1.EnumLoanStatusWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumLoanStatusWithAggregatesFilter_1.EnumLoanStatusWithAggregatesFilter)
], LoanScalarWhereWithAggregatesInput.prototype, "status", void 0);
exports.LoanScalarWhereWithAggregatesInput = LoanScalarWhereWithAggregatesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LoanScalarWhereWithAggregatesInput", {})
], LoanScalarWhereWithAggregatesInput);
