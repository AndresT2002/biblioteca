"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumLoanStatusFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanStatus_1 = require("../../enums/LoanStatus");
let EnumLoanStatusFieldUpdateOperationsInput = class EnumLoanStatusFieldUpdateOperationsInput {
};
exports.EnumLoanStatusFieldUpdateOperationsInput = EnumLoanStatusFieldUpdateOperationsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanStatus_1.LoanStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumLoanStatusFieldUpdateOperationsInput.prototype, "set", void 0);
exports.EnumLoanStatusFieldUpdateOperationsInput = EnumLoanStatusFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumLoanStatusFieldUpdateOperationsInput", {})
], EnumLoanStatusFieldUpdateOperationsInput);
