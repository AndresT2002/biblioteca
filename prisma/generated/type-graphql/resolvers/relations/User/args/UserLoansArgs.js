"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLoansArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanOrderByWithRelationInput_1 = require("../../../inputs/LoanOrderByWithRelationInput");
const LoanWhereInput_1 = require("../../../inputs/LoanWhereInput");
const LoanWhereUniqueInput_1 = require("../../../inputs/LoanWhereUniqueInput");
const LoanScalarFieldEnum_1 = require("../../../../enums/LoanScalarFieldEnum");
let UserLoansArgs = class UserLoansArgs {
};
exports.UserLoansArgs = UserLoansArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanWhereInput_1.LoanWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LoanWhereInput_1.LoanWhereInput)
], UserLoansArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanOrderByWithRelationInput_1.LoanOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserLoansArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanWhereUniqueInput_1.LoanWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LoanWhereUniqueInput_1.LoanWhereUniqueInput)
], UserLoansArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserLoansArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserLoansArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanScalarFieldEnum_1.LoanScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserLoansArgs.prototype, "distinct", void 0);
exports.UserLoansArgs = UserLoansArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserLoansArgs);
