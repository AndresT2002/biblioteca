"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanUpdateManyWithoutBookNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanCreateManyBookInputEnvelope_1 = require("../inputs/LoanCreateManyBookInputEnvelope");
const LoanCreateOrConnectWithoutBookInput_1 = require("../inputs/LoanCreateOrConnectWithoutBookInput");
const LoanCreateWithoutBookInput_1 = require("../inputs/LoanCreateWithoutBookInput");
const LoanScalarWhereInput_1 = require("../inputs/LoanScalarWhereInput");
const LoanUpdateManyWithWhereWithoutBookInput_1 = require("../inputs/LoanUpdateManyWithWhereWithoutBookInput");
const LoanUpdateWithWhereUniqueWithoutBookInput_1 = require("../inputs/LoanUpdateWithWhereUniqueWithoutBookInput");
const LoanUpsertWithWhereUniqueWithoutBookInput_1 = require("../inputs/LoanUpsertWithWhereUniqueWithoutBookInput");
const LoanWhereUniqueInput_1 = require("../inputs/LoanWhereUniqueInput");
let LoanUpdateManyWithoutBookNestedInput = class LoanUpdateManyWithoutBookNestedInput {
};
exports.LoanUpdateManyWithoutBookNestedInput = LoanUpdateManyWithoutBookNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanCreateWithoutBookInput_1.LoanCreateWithoutBookInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanUpdateManyWithoutBookNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanCreateOrConnectWithoutBookInput_1.LoanCreateOrConnectWithoutBookInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanUpdateManyWithoutBookNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanUpsertWithWhereUniqueWithoutBookInput_1.LoanUpsertWithWhereUniqueWithoutBookInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanUpdateManyWithoutBookNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanCreateManyBookInputEnvelope_1.LoanCreateManyBookInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LoanCreateManyBookInputEnvelope_1.LoanCreateManyBookInputEnvelope)
], LoanUpdateManyWithoutBookNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanWhereUniqueInput_1.LoanWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanUpdateManyWithoutBookNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanWhereUniqueInput_1.LoanWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanUpdateManyWithoutBookNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanWhereUniqueInput_1.LoanWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanUpdateManyWithoutBookNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanWhereUniqueInput_1.LoanWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanUpdateManyWithoutBookNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanUpdateWithWhereUniqueWithoutBookInput_1.LoanUpdateWithWhereUniqueWithoutBookInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanUpdateManyWithoutBookNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanUpdateManyWithWhereWithoutBookInput_1.LoanUpdateManyWithWhereWithoutBookInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanUpdateManyWithoutBookNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanScalarWhereInput_1.LoanScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanUpdateManyWithoutBookNestedInput.prototype, "deleteMany", void 0);
exports.LoanUpdateManyWithoutBookNestedInput = LoanUpdateManyWithoutBookNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LoanUpdateManyWithoutBookNestedInput", {})
], LoanUpdateManyWithoutBookNestedInput);
