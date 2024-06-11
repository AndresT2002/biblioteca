"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutLoansInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutLoansInput_1 = require("../inputs/UserCreateWithoutLoansInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutLoansInput = class UserCreateOrConnectWithoutLoansInput {
};
exports.UserCreateOrConnectWithoutLoansInput = UserCreateOrConnectWithoutLoansInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutLoansInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutLoansInput_1.UserCreateWithoutLoansInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutLoansInput_1.UserCreateWithoutLoansInput)
], UserCreateOrConnectWithoutLoansInput.prototype, "create", void 0);
exports.UserCreateOrConnectWithoutLoansInput = UserCreateOrConnectWithoutLoansInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutLoansInput", {})
], UserCreateOrConnectWithoutLoansInput);
