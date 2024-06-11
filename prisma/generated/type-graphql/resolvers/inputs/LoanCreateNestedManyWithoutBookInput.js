"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanCreateNestedManyWithoutBookInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanCreateManyBookInputEnvelope_1 = require("../inputs/LoanCreateManyBookInputEnvelope");
const LoanCreateOrConnectWithoutBookInput_1 = require("../inputs/LoanCreateOrConnectWithoutBookInput");
const LoanCreateWithoutBookInput_1 = require("../inputs/LoanCreateWithoutBookInput");
const LoanWhereUniqueInput_1 = require("../inputs/LoanWhereUniqueInput");
let LoanCreateNestedManyWithoutBookInput = class LoanCreateNestedManyWithoutBookInput {
};
exports.LoanCreateNestedManyWithoutBookInput = LoanCreateNestedManyWithoutBookInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanCreateWithoutBookInput_1.LoanCreateWithoutBookInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanCreateNestedManyWithoutBookInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanCreateOrConnectWithoutBookInput_1.LoanCreateOrConnectWithoutBookInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanCreateNestedManyWithoutBookInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanCreateManyBookInputEnvelope_1.LoanCreateManyBookInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LoanCreateManyBookInputEnvelope_1.LoanCreateManyBookInputEnvelope)
], LoanCreateNestedManyWithoutBookInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanWhereUniqueInput_1.LoanWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanCreateNestedManyWithoutBookInput.prototype, "connect", void 0);
exports.LoanCreateNestedManyWithoutBookInput = LoanCreateNestedManyWithoutBookInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LoanCreateNestedManyWithoutBookInput", {})
], LoanCreateNestedManyWithoutBookInput);
