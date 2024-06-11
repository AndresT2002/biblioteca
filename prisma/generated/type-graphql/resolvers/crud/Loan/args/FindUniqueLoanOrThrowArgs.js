"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueLoanOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanWhereUniqueInput_1 = require("../../../inputs/LoanWhereUniqueInput");
let FindUniqueLoanOrThrowArgs = class FindUniqueLoanOrThrowArgs {
};
exports.FindUniqueLoanOrThrowArgs = FindUniqueLoanOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanWhereUniqueInput_1.LoanWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LoanWhereUniqueInput_1.LoanWhereUniqueInput)
], FindUniqueLoanOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueLoanOrThrowArgs = FindUniqueLoanOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueLoanOrThrowArgs);
