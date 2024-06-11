"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanUpsertWithWhereUniqueWithoutBookInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanCreateWithoutBookInput_1 = require("../inputs/LoanCreateWithoutBookInput");
const LoanUpdateWithoutBookInput_1 = require("../inputs/LoanUpdateWithoutBookInput");
const LoanWhereUniqueInput_1 = require("../inputs/LoanWhereUniqueInput");
let LoanUpsertWithWhereUniqueWithoutBookInput = class LoanUpsertWithWhereUniqueWithoutBookInput {
};
exports.LoanUpsertWithWhereUniqueWithoutBookInput = LoanUpsertWithWhereUniqueWithoutBookInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanWhereUniqueInput_1.LoanWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LoanWhereUniqueInput_1.LoanWhereUniqueInput)
], LoanUpsertWithWhereUniqueWithoutBookInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanUpdateWithoutBookInput_1.LoanUpdateWithoutBookInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LoanUpdateWithoutBookInput_1.LoanUpdateWithoutBookInput)
], LoanUpsertWithWhereUniqueWithoutBookInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanCreateWithoutBookInput_1.LoanCreateWithoutBookInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LoanCreateWithoutBookInput_1.LoanCreateWithoutBookInput)
], LoanUpsertWithWhereUniqueWithoutBookInput.prototype, "create", void 0);
exports.LoanUpsertWithWhereUniqueWithoutBookInput = LoanUpsertWithWhereUniqueWithoutBookInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LoanUpsertWithWhereUniqueWithoutBookInput", {})
], LoanUpsertWithWhereUniqueWithoutBookInput);
