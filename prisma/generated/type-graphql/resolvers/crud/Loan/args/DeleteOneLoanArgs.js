"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneLoanArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanWhereUniqueInput_1 = require("../../../inputs/LoanWhereUniqueInput");
let DeleteOneLoanArgs = class DeleteOneLoanArgs {
};
exports.DeleteOneLoanArgs = DeleteOneLoanArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanWhereUniqueInput_1.LoanWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LoanWhereUniqueInput_1.LoanWhereUniqueInput)
], DeleteOneLoanArgs.prototype, "where", void 0);
exports.DeleteOneLoanArgs = DeleteOneLoanArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneLoanArgs);
