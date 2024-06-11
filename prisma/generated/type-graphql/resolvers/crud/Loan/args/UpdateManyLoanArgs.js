"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyLoanArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanUpdateManyMutationInput_1 = require("../../../inputs/LoanUpdateManyMutationInput");
const LoanWhereInput_1 = require("../../../inputs/LoanWhereInput");
let UpdateManyLoanArgs = class UpdateManyLoanArgs {
};
exports.UpdateManyLoanArgs = UpdateManyLoanArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanUpdateManyMutationInput_1.LoanUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LoanUpdateManyMutationInput_1.LoanUpdateManyMutationInput)
], UpdateManyLoanArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanWhereInput_1.LoanWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LoanWhereInput_1.LoanWhereInput)
], UpdateManyLoanArgs.prototype, "where", void 0);
exports.UpdateManyLoanArgs = UpdateManyLoanArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyLoanArgs);
