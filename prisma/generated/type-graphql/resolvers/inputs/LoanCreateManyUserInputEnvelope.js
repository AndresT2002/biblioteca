"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanCreateManyUserInput_1 = require("../inputs/LoanCreateManyUserInput");
let LoanCreateManyUserInputEnvelope = class LoanCreateManyUserInputEnvelope {
};
exports.LoanCreateManyUserInputEnvelope = LoanCreateManyUserInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanCreateManyUserInput_1.LoanCreateManyUserInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], LoanCreateManyUserInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], LoanCreateManyUserInputEnvelope.prototype, "skipDuplicates", void 0);
exports.LoanCreateManyUserInputEnvelope = LoanCreateManyUserInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("LoanCreateManyUserInputEnvelope", {})
], LoanCreateManyUserInputEnvelope);
