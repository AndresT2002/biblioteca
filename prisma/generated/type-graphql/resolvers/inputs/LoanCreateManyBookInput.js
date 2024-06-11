"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanCreateManyBookInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanStatus_1 = require("../../enums/LoanStatus");
let LoanCreateManyBookInput = class LoanCreateManyBookInput {
};
exports.LoanCreateManyBookInput = LoanCreateManyBookInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LoanCreateManyBookInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LoanCreateManyBookInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanStatus_1.LoanStatus, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LoanCreateManyBookInput.prototype, "status", void 0);
exports.LoanCreateManyBookInput = LoanCreateManyBookInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LoanCreateManyBookInput", {})
], LoanCreateManyBookInput);
