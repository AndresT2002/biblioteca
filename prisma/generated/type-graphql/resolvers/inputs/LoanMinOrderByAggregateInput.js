"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let LoanMinOrderByAggregateInput = class LoanMinOrderByAggregateInput {
};
exports.LoanMinOrderByAggregateInput = LoanMinOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LoanMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LoanMinOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LoanMinOrderByAggregateInput.prototype, "bookId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LoanMinOrderByAggregateInput.prototype, "status", void 0);
exports.LoanMinOrderByAggregateInput = LoanMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LoanMinOrderByAggregateInput", {})
], LoanMinOrderByAggregateInput);
