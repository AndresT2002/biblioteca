"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutLoansInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutLoansInput_1 = require("../inputs/UserCreateOrConnectWithoutLoansInput");
const UserCreateWithoutLoansInput_1 = require("../inputs/UserCreateWithoutLoansInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutLoansInput = class UserCreateNestedOneWithoutLoansInput {
};
exports.UserCreateNestedOneWithoutLoansInput = UserCreateNestedOneWithoutLoansInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutLoansInput_1.UserCreateWithoutLoansInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutLoansInput_1.UserCreateWithoutLoansInput)
], UserCreateNestedOneWithoutLoansInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutLoansInput_1.UserCreateOrConnectWithoutLoansInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutLoansInput_1.UserCreateOrConnectWithoutLoansInput)
], UserCreateNestedOneWithoutLoansInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutLoansInput.prototype, "connect", void 0);
exports.UserCreateNestedOneWithoutLoansInput = UserCreateNestedOneWithoutLoansInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutLoansInput", {})
], UserCreateNestedOneWithoutLoansInput);
