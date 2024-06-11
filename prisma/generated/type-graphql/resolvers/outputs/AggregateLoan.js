"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateLoan = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanCountAggregate_1 = require("../outputs/LoanCountAggregate");
const LoanMaxAggregate_1 = require("../outputs/LoanMaxAggregate");
const LoanMinAggregate_1 = require("../outputs/LoanMinAggregate");
let AggregateLoan = class AggregateLoan {
};
exports.AggregateLoan = AggregateLoan;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanCountAggregate_1.LoanCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LoanCountAggregate_1.LoanCountAggregate)
], AggregateLoan.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanMinAggregate_1.LoanMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LoanMinAggregate_1.LoanMinAggregate)
], AggregateLoan.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanMaxAggregate_1.LoanMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LoanMaxAggregate_1.LoanMaxAggregate)
], AggregateLoan.prototype, "_max", void 0);
exports.AggregateLoan = AggregateLoan = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateLoan", {})
], AggregateLoan);
