"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanCreateWithoutUserInput_1 = require("../inputs/LoanCreateWithoutUserInput");
const LoanUpdateWithoutUserInput_1 = require("../inputs/LoanUpdateWithoutUserInput");
const LoanWhereUniqueInput_1 = require("../inputs/LoanWhereUniqueInput");
let LoanUpsertWithWhereUniqueWithoutUserInput = class LoanUpsertWithWhereUniqueWithoutUserInput {
};
exports.LoanUpsertWithWhereUniqueWithoutUserInput = LoanUpsertWithWhereUniqueWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanWhereUniqueInput_1.LoanWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LoanWhereUniqueInput_1.LoanWhereUniqueInput)
], LoanUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanUpdateWithoutUserInput_1.LoanUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LoanUpdateWithoutUserInput_1.LoanUpdateWithoutUserInput)
], LoanUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanCreateWithoutUserInput_1.LoanCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LoanCreateWithoutUserInput_1.LoanCreateWithoutUserInput)
], LoanUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
exports.LoanUpsertWithWhereUniqueWithoutUserInput = LoanUpsertWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LoanUpsertWithWhereUniqueWithoutUserInput", {})
], LoanUpsertWithWhereUniqueWithoutUserInput);
