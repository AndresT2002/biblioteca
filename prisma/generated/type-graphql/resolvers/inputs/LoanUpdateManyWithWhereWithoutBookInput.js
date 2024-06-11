"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanUpdateManyWithWhereWithoutBookInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanScalarWhereInput_1 = require("../inputs/LoanScalarWhereInput");
const LoanUpdateManyMutationInput_1 = require("../inputs/LoanUpdateManyMutationInput");
let LoanUpdateManyWithWhereWithoutBookInput = class LoanUpdateManyWithWhereWithoutBookInput {
};
exports.LoanUpdateManyWithWhereWithoutBookInput = LoanUpdateManyWithWhereWithoutBookInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanScalarWhereInput_1.LoanScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LoanScalarWhereInput_1.LoanScalarWhereInput)
], LoanUpdateManyWithWhereWithoutBookInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanUpdateManyMutationInput_1.LoanUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LoanUpdateManyMutationInput_1.LoanUpdateManyMutationInput)
], LoanUpdateManyWithWhereWithoutBookInput.prototype, "data", void 0);
exports.LoanUpdateManyWithWhereWithoutBookInput = LoanUpdateManyWithWhereWithoutBookInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LoanUpdateManyWithWhereWithoutBookInput", {})
], LoanUpdateManyWithWhereWithoutBookInput);
