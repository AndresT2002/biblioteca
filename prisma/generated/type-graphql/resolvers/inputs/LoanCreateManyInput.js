"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanStatus_1 = require("../../enums/LoanStatus");
let LoanCreateManyInput = class LoanCreateManyInput {
};
exports.LoanCreateManyInput = LoanCreateManyInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LoanCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LoanCreateManyInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LoanCreateManyInput.prototype, "bookId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanStatus_1.LoanStatus, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LoanCreateManyInput.prototype, "status", void 0);
exports.LoanCreateManyInput = LoanCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LoanCreateManyInput", {})
], LoanCreateManyInput);
