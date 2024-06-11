"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let LoanOrderByRelationAggregateInput = class LoanOrderByRelationAggregateInput {
};
exports.LoanOrderByRelationAggregateInput = LoanOrderByRelationAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LoanOrderByRelationAggregateInput.prototype, "_count", void 0);
exports.LoanOrderByRelationAggregateInput = LoanOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LoanOrderByRelationAggregateInput", {})
], LoanOrderByRelationAggregateInput);
