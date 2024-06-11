"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let LoanCountOrderByAggregateInput = class LoanCountOrderByAggregateInput {
};
exports.LoanCountOrderByAggregateInput = LoanCountOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LoanCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LoanCountOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LoanCountOrderByAggregateInput.prototype, "bookId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LoanCountOrderByAggregateInput.prototype, "status", void 0);
exports.LoanCountOrderByAggregateInput = LoanCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LoanCountOrderByAggregateInput", {})
], LoanCountOrderByAggregateInput);
