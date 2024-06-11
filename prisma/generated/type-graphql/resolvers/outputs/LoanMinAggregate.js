"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanStatus_1 = require("../../enums/LoanStatus");
let LoanMinAggregate = class LoanMinAggregate {
};
exports.LoanMinAggregate = LoanMinAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LoanMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LoanMinAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LoanMinAggregate.prototype, "bookId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanStatus_1.LoanStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LoanMinAggregate.prototype, "status", void 0);
exports.LoanMinAggregate = LoanMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("LoanMinAggregate", {})
], LoanMinAggregate);
