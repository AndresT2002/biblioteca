"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let BookAvgOrderByAggregateInput = class BookAvgOrderByAggregateInput {
};
exports.BookAvgOrderByAggregateInput = BookAvgOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookAvgOrderByAggregateInput.prototype, "quantityAvaiable", void 0);
exports.BookAvgOrderByAggregateInput = BookAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookAvgOrderByAggregateInput", {})
], BookAvgOrderByAggregateInput);
