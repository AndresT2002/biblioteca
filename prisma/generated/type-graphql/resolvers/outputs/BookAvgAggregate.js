"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BookAvgAggregate = class BookAvgAggregate {
};
exports.BookAvgAggregate = BookAvgAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], BookAvgAggregate.prototype, "quantityAvaiable", void 0);
exports.BookAvgAggregate = BookAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BookAvgAggregate", {})
], BookAvgAggregate);
