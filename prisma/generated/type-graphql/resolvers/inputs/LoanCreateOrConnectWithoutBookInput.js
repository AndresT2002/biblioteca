"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanCreateOrConnectWithoutBookInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanCreateWithoutBookInput_1 = require("../inputs/LoanCreateWithoutBookInput");
const LoanWhereUniqueInput_1 = require("../inputs/LoanWhereUniqueInput");
let LoanCreateOrConnectWithoutBookInput = class LoanCreateOrConnectWithoutBookInput {
};
exports.LoanCreateOrConnectWithoutBookInput = LoanCreateOrConnectWithoutBookInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanWhereUniqueInput_1.LoanWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LoanWhereUniqueInput_1.LoanWhereUniqueInput)
], LoanCreateOrConnectWithoutBookInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanCreateWithoutBookInput_1.LoanCreateWithoutBookInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LoanCreateWithoutBookInput_1.LoanCreateWithoutBookInput)
], LoanCreateOrConnectWithoutBookInput.prototype, "create", void 0);
exports.LoanCreateOrConnectWithoutBookInput = LoanCreateOrConnectWithoutBookInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LoanCreateOrConnectWithoutBookInput", {})
], LoanCreateOrConnectWithoutBookInput);
