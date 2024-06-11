"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutLoansInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutLoansInput_1 = require("../inputs/UserCreateWithoutLoansInput");
const UserUpdateWithoutLoansInput_1 = require("../inputs/UserUpdateWithoutLoansInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpsertWithoutLoansInput = class UserUpsertWithoutLoansInput {
};
exports.UserUpsertWithoutLoansInput = UserUpsertWithoutLoansInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutLoansInput_1.UserUpdateWithoutLoansInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutLoansInput_1.UserUpdateWithoutLoansInput)
], UserUpsertWithoutLoansInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutLoansInput_1.UserCreateWithoutLoansInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutLoansInput_1.UserCreateWithoutLoansInput)
], UserUpsertWithoutLoansInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpsertWithoutLoansInput.prototype, "where", void 0);
exports.UserUpsertWithoutLoansInput = UserUpsertWithoutLoansInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutLoansInput", {})
], UserUpsertWithoutLoansInput);
