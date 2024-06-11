"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCountLoansArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanWhereInput_1 = require("../../inputs/LoanWhereInput");
let UserCountLoansArgs = class UserCountLoansArgs {
};
exports.UserCountLoansArgs = UserCountLoansArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanWhereInput_1.LoanWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LoanWhereInput_1.LoanWhereInput)
], UserCountLoansArgs.prototype, "where", void 0);
exports.UserCountLoansArgs = UserCountLoansArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserCountLoansArgs);
