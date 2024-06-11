"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanCreateWithoutUserInput_1 = require("../inputs/LoanCreateWithoutUserInput");
const LoanWhereUniqueInput_1 = require("../inputs/LoanWhereUniqueInput");
let LoanCreateOrConnectWithoutUserInput = class LoanCreateOrConnectWithoutUserInput {
};
exports.LoanCreateOrConnectWithoutUserInput = LoanCreateOrConnectWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanWhereUniqueInput_1.LoanWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LoanWhereUniqueInput_1.LoanWhereUniqueInput)
], LoanCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanCreateWithoutUserInput_1.LoanCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LoanCreateWithoutUserInput_1.LoanCreateWithoutUserInput)
], LoanCreateOrConnectWithoutUserInput.prototype, "create", void 0);
exports.LoanCreateOrConnectWithoutUserInput = LoanCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LoanCreateOrConnectWithoutUserInput", {})
], LoanCreateOrConnectWithoutUserInput);
