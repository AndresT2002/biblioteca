"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanCountOrderByAggregateInput_1 = require("../inputs/LoanCountOrderByAggregateInput");
const LoanMaxOrderByAggregateInput_1 = require("../inputs/LoanMaxOrderByAggregateInput");
const LoanMinOrderByAggregateInput_1 = require("../inputs/LoanMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let LoanOrderByWithAggregationInput = class LoanOrderByWithAggregationInput {
};
exports.LoanOrderByWithAggregationInput = LoanOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LoanOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LoanOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LoanOrderByWithAggregationInput.prototype, "bookId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LoanOrderByWithAggregationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanCountOrderByAggregateInput_1.LoanCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LoanCountOrderByAggregateInput_1.LoanCountOrderByAggregateInput)
], LoanOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanMaxOrderByAggregateInput_1.LoanMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LoanMaxOrderByAggregateInput_1.LoanMaxOrderByAggregateInput)
], LoanOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanMinOrderByAggregateInput_1.LoanMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LoanMinOrderByAggregateInput_1.LoanMinOrderByAggregateInput)
], LoanOrderByWithAggregationInput.prototype, "_min", void 0);
exports.LoanOrderByWithAggregationInput = LoanOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LoanOrderByWithAggregationInput", {})
], LoanOrderByWithAggregationInput);
