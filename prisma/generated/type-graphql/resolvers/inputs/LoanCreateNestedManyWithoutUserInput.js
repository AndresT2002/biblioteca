"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanCreateManyUserInputEnvelope_1 = require("../inputs/LoanCreateManyUserInputEnvelope");
const LoanCreateOrConnectWithoutUserInput_1 = require("../inputs/LoanCreateOrConnectWithoutUserInput");
const LoanCreateWithoutUserInput_1 = require("../inputs/LoanCreateWithoutUserInput");
const LoanWhereUniqueInput_1 = require("../inputs/LoanWhereUniqueInput");
let LoanCreateNestedManyWithoutUserInput = class LoanCreateNestedManyWithoutUserInput {
};
exports.LoanCreateNestedManyWithoutUserInput = LoanCreateNestedManyWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanCreateWithoutUserInput_1.LoanCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanCreateNestedManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanCreateOrConnectWithoutUserInput_1.LoanCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanCreateManyUserInputEnvelope_1.LoanCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LoanCreateManyUserInputEnvelope_1.LoanCreateManyUserInputEnvelope)
], LoanCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanWhereUniqueInput_1.LoanWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
exports.LoanCreateNestedManyWithoutUserInput = LoanCreateNestedManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LoanCreateNestedManyWithoutUserInput", {})
], LoanCreateNestedManyWithoutUserInput);
