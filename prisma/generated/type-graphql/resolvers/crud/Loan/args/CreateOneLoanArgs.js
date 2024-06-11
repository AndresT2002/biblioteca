"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneLoanArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanCreateInput_1 = require("../../../inputs/LoanCreateInput");
let CreateOneLoanArgs = class CreateOneLoanArgs {
};
exports.CreateOneLoanArgs = CreateOneLoanArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanCreateInput_1.LoanCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LoanCreateInput_1.LoanCreateInput)
], CreateOneLoanArgs.prototype, "data", void 0);
exports.CreateOneLoanArgs = CreateOneLoanArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneLoanArgs);
