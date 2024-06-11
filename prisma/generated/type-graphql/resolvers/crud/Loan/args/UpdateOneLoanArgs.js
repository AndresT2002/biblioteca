"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneLoanArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanUpdateInput_1 = require("../../../inputs/LoanUpdateInput");
const LoanWhereUniqueInput_1 = require("../../../inputs/LoanWhereUniqueInput");
let UpdateOneLoanArgs = class UpdateOneLoanArgs {
};
exports.UpdateOneLoanArgs = UpdateOneLoanArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanUpdateInput_1.LoanUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LoanUpdateInput_1.LoanUpdateInput)
], UpdateOneLoanArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanWhereUniqueInput_1.LoanWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LoanWhereUniqueInput_1.LoanWhereUniqueInput)
], UpdateOneLoanArgs.prototype, "where", void 0);
exports.UpdateOneLoanArgs = UpdateOneLoanArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneLoanArgs);
