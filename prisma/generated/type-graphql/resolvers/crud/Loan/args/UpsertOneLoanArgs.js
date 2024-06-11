"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneLoanArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanCreateInput_1 = require("../../../inputs/LoanCreateInput");
const LoanUpdateInput_1 = require("../../../inputs/LoanUpdateInput");
const LoanWhereUniqueInput_1 = require("../../../inputs/LoanWhereUniqueInput");
let UpsertOneLoanArgs = class UpsertOneLoanArgs {
};
exports.UpsertOneLoanArgs = UpsertOneLoanArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanWhereUniqueInput_1.LoanWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LoanWhereUniqueInput_1.LoanWhereUniqueInput)
], UpsertOneLoanArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanCreateInput_1.LoanCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LoanCreateInput_1.LoanCreateInput)
], UpsertOneLoanArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanUpdateInput_1.LoanUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LoanUpdateInput_1.LoanUpdateInput)
], UpsertOneLoanArgs.prototype, "update", void 0);
exports.UpsertOneLoanArgs = UpsertOneLoanArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneLoanArgs);
