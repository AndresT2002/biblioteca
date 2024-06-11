"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanCountAggregate_1 = require("../outputs/LoanCountAggregate");
const LoanMaxAggregate_1 = require("../outputs/LoanMaxAggregate");
const LoanMinAggregate_1 = require("../outputs/LoanMinAggregate");
const LoanStatus_1 = require("../../enums/LoanStatus");
let LoanGroupBy = class LoanGroupBy {
};
exports.LoanGroupBy = LoanGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LoanGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LoanGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LoanGroupBy.prototype, "bookId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanStatus_1.LoanStatus, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LoanGroupBy.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanCountAggregate_1.LoanCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LoanCountAggregate_1.LoanCountAggregate)
], LoanGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanMinAggregate_1.LoanMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LoanMinAggregate_1.LoanMinAggregate)
], LoanGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanMaxAggregate_1.LoanMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LoanMaxAggregate_1.LoanMaxAggregate)
], LoanGroupBy.prototype, "_max", void 0);
exports.LoanGroupBy = LoanGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("LoanGroupBy", {})
], LoanGroupBy);
