"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let LoanMaxOrderByAggregateInput = class LoanMaxOrderByAggregateInput {
};
exports.LoanMaxOrderByAggregateInput = LoanMaxOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LoanMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LoanMaxOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LoanMaxOrderByAggregateInput.prototype, "bookId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LoanMaxOrderByAggregateInput.prototype, "status", void 0);
exports.LoanMaxOrderByAggregateInput = LoanMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LoanMaxOrderByAggregateInput", {})
], LoanMaxOrderByAggregateInput);
