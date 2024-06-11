"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BookSumAggregate = class BookSumAggregate {
};
exports.BookSumAggregate = BookSumAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], BookSumAggregate.prototype, "quantityAvaiable", void 0);
exports.BookSumAggregate = BookSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BookSumAggregate", {})
], BookSumAggregate);
