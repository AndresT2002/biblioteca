"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateLoanArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanOrderByWithRelationInput_1 = require("../../../inputs/LoanOrderByWithRelationInput");
const LoanWhereInput_1 = require("../../../inputs/LoanWhereInput");
const LoanWhereUniqueInput_1 = require("../../../inputs/LoanWhereUniqueInput");
let AggregateLoanArgs = class AggregateLoanArgs {
};
exports.AggregateLoanArgs = AggregateLoanArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanWhereInput_1.LoanWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LoanWhereInput_1.LoanWhereInput)
], AggregateLoanArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanOrderByWithRelationInput_1.LoanOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateLoanArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanWhereUniqueInput_1.LoanWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LoanWhereUniqueInput_1.LoanWhereUniqueInput)
], AggregateLoanArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateLoanArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateLoanArgs.prototype, "skip", void 0);
exports.AggregateLoanArgs = AggregateLoanArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateLoanArgs);
