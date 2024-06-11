"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let BookSumOrderByAggregateInput = class BookSumOrderByAggregateInput {
};
exports.BookSumOrderByAggregateInput = BookSumOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookSumOrderByAggregateInput.prototype, "quantityAvaiable", void 0);
exports.BookSumOrderByAggregateInput = BookSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookSumOrderByAggregateInput", {})
], BookSumOrderByAggregateInput);
