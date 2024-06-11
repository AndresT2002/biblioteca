"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanStatus_1 = require("../../enums/LoanStatus");
let LoanMaxAggregate = class LoanMaxAggregate {
};
exports.LoanMaxAggregate = LoanMaxAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LoanMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LoanMaxAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LoanMaxAggregate.prototype, "bookId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanStatus_1.LoanStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LoanMaxAggregate.prototype, "status", void 0);
exports.LoanMaxAggregate = LoanMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("LoanMaxAggregate", {})
], LoanMaxAggregate);
