"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateToOneWithWhereWithoutLoansInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUpdateWithoutLoansInput_1 = require("../inputs/UserUpdateWithoutLoansInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpdateToOneWithWhereWithoutLoansInput = class UserUpdateToOneWithWhereWithoutLoansInput {
};
exports.UserUpdateToOneWithWhereWithoutLoansInput = UserUpdateToOneWithWhereWithoutLoansInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpdateToOneWithWhereWithoutLoansInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutLoansInput_1.UserUpdateWithoutLoansInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutLoansInput_1.UserUpdateWithoutLoansInput)
], UserUpdateToOneWithWhereWithoutLoansInput.prototype, "data", void 0);
exports.UserUpdateToOneWithWhereWithoutLoansInput = UserUpdateToOneWithWhereWithoutLoansInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutLoansInput", {})
], UserUpdateToOneWithWhereWithoutLoansInput);
