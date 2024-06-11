"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanCreateManyBookInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanCreateManyBookInput_1 = require("../inputs/LoanCreateManyBookInput");
let LoanCreateManyBookInputEnvelope = class LoanCreateManyBookInputEnvelope {
};
exports.LoanCreateManyBookInputEnvelope = LoanCreateManyBookInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanCreateManyBookInput_1.LoanCreateManyBookInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], LoanCreateManyBookInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], LoanCreateManyBookInputEnvelope.prototype, "skipDuplicates", void 0);
exports.LoanCreateManyBookInputEnvelope = LoanCreateManyBookInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("LoanCreateManyBookInputEnvelope", {})
], LoanCreateManyBookInputEnvelope);
