"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanUpdateManyWithoutUserNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanCreateManyUserInputEnvelope_1 = require("../inputs/LoanCreateManyUserInputEnvelope");
const LoanCreateOrConnectWithoutUserInput_1 = require("../inputs/LoanCreateOrConnectWithoutUserInput");
const LoanCreateWithoutUserInput_1 = require("../inputs/LoanCreateWithoutUserInput");
const LoanScalarWhereInput_1 = require("../inputs/LoanScalarWhereInput");
const LoanUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/LoanUpdateManyWithWhereWithoutUserInput");
const LoanUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/LoanUpdateWithWhereUniqueWithoutUserInput");
const LoanUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/LoanUpsertWithWhereUniqueWithoutUserInput");
const LoanWhereUniqueInput_1 = require("../inputs/LoanWhereUniqueInput");
let LoanUpdateManyWithoutUserNestedInput = class LoanUpdateManyWithoutUserNestedInput {
};
exports.LoanUpdateManyWithoutUserNestedInput = LoanUpdateManyWithoutUserNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanCreateWithoutUserInput_1.LoanCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanUpdateManyWithoutUserNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanCreateOrConnectWithoutUserInput_1.LoanCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanUpdateManyWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanUpsertWithWhereUniqueWithoutUserInput_1.LoanUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanUpdateManyWithoutUserNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanCreateManyUserInputEnvelope_1.LoanCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LoanCreateManyUserInputEnvelope_1.LoanCreateManyUserInputEnvelope)
], LoanUpdateManyWithoutUserNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanWhereUniqueInput_1.LoanWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanUpdateManyWithoutUserNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanWhereUniqueInput_1.LoanWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanUpdateManyWithoutUserNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanWhereUniqueInput_1.LoanWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanUpdateManyWithoutUserNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanWhereUniqueInput_1.LoanWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanUpdateManyWithoutUserNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanUpdateWithWhereUniqueWithoutUserInput_1.LoanUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanUpdateManyWithoutUserNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanUpdateManyWithWhereWithoutUserInput_1.LoanUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanUpdateManyWithoutUserNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanScalarWhereInput_1.LoanScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanUpdateManyWithoutUserNestedInput.prototype, "deleteMany", void 0);
exports.LoanUpdateManyWithoutUserNestedInput = LoanUpdateManyWithoutUserNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LoanUpdateManyWithoutUserNestedInput", {})
], LoanUpdateManyWithoutUserNestedInput);
