"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanUpdateWithWhereUniqueWithoutBookInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanUpdateWithoutBookInput_1 = require("../inputs/LoanUpdateWithoutBookInput");
const LoanWhereUniqueInput_1 = require("../inputs/LoanWhereUniqueInput");
let LoanUpdateWithWhereUniqueWithoutBookInput = class LoanUpdateWithWhereUniqueWithoutBookInput {
};
exports.LoanUpdateWithWhereUniqueWithoutBookInput = LoanUpdateWithWhereUniqueWithoutBookInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanWhereUniqueInput_1.LoanWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LoanWhereUniqueInput_1.LoanWhereUniqueInput)
], LoanUpdateWithWhereUniqueWithoutBookInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanUpdateWithoutBookInput_1.LoanUpdateWithoutBookInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LoanUpdateWithoutBookInput_1.LoanUpdateWithoutBookInput)
], LoanUpdateWithWhereUniqueWithoutBookInput.prototype, "data", void 0);
exports.LoanUpdateWithWhereUniqueWithoutBookInput = LoanUpdateWithWhereUniqueWithoutBookInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LoanUpdateWithWhereUniqueWithoutBookInput", {})
], LoanUpdateWithWhereUniqueWithoutBookInput);
