"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutLoansNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutLoansInput_1 = require("../inputs/UserCreateOrConnectWithoutLoansInput");
const UserCreateWithoutLoansInput_1 = require("../inputs/UserCreateWithoutLoansInput");
const UserUpdateToOneWithWhereWithoutLoansInput_1 = require("../inputs/UserUpdateToOneWithWhereWithoutLoansInput");
const UserUpsertWithoutLoansInput_1 = require("../inputs/UserUpsertWithoutLoansInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutLoansNestedInput = class UserUpdateOneRequiredWithoutLoansNestedInput {
};
exports.UserUpdateOneRequiredWithoutLoansNestedInput = UserUpdateOneRequiredWithoutLoansNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutLoansInput_1.UserCreateWithoutLoansInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutLoansInput_1.UserCreateWithoutLoansInput)
], UserUpdateOneRequiredWithoutLoansNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutLoansInput_1.UserCreateOrConnectWithoutLoansInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutLoansInput_1.UserCreateOrConnectWithoutLoansInput)
], UserUpdateOneRequiredWithoutLoansNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutLoansInput_1.UserUpsertWithoutLoansInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutLoansInput_1.UserUpsertWithoutLoansInput)
], UserUpdateOneRequiredWithoutLoansNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutLoansNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutLoansInput_1.UserUpdateToOneWithWhereWithoutLoansInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateToOneWithWhereWithoutLoansInput_1.UserUpdateToOneWithWhereWithoutLoansInput)
], UserUpdateOneRequiredWithoutLoansNestedInput.prototype, "update", void 0);
exports.UserUpdateOneRequiredWithoutLoansNestedInput = UserUpdateOneRequiredWithoutLoansNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutLoansNestedInput", {})
], UserUpdateOneRequiredWithoutLoansNestedInput);
