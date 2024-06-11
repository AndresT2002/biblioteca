"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumLoanStatusFilter_1 = require("../inputs/EnumLoanStatusFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let LoanScalarWhereInput = class LoanScalarWhereInput {
};
exports.LoanScalarWhereInput = LoanScalarWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], LoanScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], LoanScalarWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], LoanScalarWhereInput.prototype, "bookId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumLoanStatusFilter_1.EnumLoanStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumLoanStatusFilter_1.EnumLoanStatusFilter)
], LoanScalarWhereInput.prototype, "status", void 0);
exports.LoanScalarWhereInput = LoanScalarWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LoanScalarWhereInput", {})
], LoanScalarWhereInput);
