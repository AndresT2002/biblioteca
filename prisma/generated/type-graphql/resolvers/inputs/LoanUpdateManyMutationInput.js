"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumLoanStatusFieldUpdateOperationsInput_1 = require("../inputs/EnumLoanStatusFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let LoanUpdateManyMutationInput = class LoanUpdateManyMutationInput {
};
exports.LoanUpdateManyMutationInput = LoanUpdateManyMutationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], LoanUpdateManyMutationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumLoanStatusFieldUpdateOperationsInput_1.EnumLoanStatusFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumLoanStatusFieldUpdateOperationsInput_1.EnumLoanStatusFieldUpdateOperationsInput)
], LoanUpdateManyMutationInput.prototype, "status", void 0);
exports.LoanUpdateManyMutationInput = LoanUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LoanUpdateManyMutationInput", {})
], LoanUpdateManyMutationInput);
