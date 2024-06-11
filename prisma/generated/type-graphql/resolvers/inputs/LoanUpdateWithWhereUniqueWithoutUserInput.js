"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanUpdateWithoutUserInput_1 = require("../inputs/LoanUpdateWithoutUserInput");
const LoanWhereUniqueInput_1 = require("../inputs/LoanWhereUniqueInput");
let LoanUpdateWithWhereUniqueWithoutUserInput = class LoanUpdateWithWhereUniqueWithoutUserInput {
};
exports.LoanUpdateWithWhereUniqueWithoutUserInput = LoanUpdateWithWhereUniqueWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanWhereUniqueInput_1.LoanWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LoanWhereUniqueInput_1.LoanWhereUniqueInput)
], LoanUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanUpdateWithoutUserInput_1.LoanUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LoanUpdateWithoutUserInput_1.LoanUpdateWithoutUserInput)
], LoanUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
exports.LoanUpdateWithWhereUniqueWithoutUserInput = LoanUpdateWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LoanUpdateWithWhereUniqueWithoutUserInput", {})
], LoanUpdateWithWhereUniqueWithoutUserInput);
