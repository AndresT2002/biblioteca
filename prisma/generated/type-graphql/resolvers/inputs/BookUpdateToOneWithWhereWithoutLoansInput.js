"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookUpdateToOneWithWhereWithoutLoansInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookUpdateWithoutLoansInput_1 = require("../inputs/BookUpdateWithoutLoansInput");
const BookWhereInput_1 = require("../inputs/BookWhereInput");
let BookUpdateToOneWithWhereWithoutLoansInput = class BookUpdateToOneWithWhereWithoutLoansInput {
};
exports.BookUpdateToOneWithWhereWithoutLoansInput = BookUpdateToOneWithWhereWithoutLoansInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookWhereInput_1.BookWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookWhereInput_1.BookWhereInput)
], BookUpdateToOneWithWhereWithoutLoansInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookUpdateWithoutLoansInput_1.BookUpdateWithoutLoansInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookUpdateWithoutLoansInput_1.BookUpdateWithoutLoansInput)
], BookUpdateToOneWithWhereWithoutLoansInput.prototype, "data", void 0);
exports.BookUpdateToOneWithWhereWithoutLoansInput = BookUpdateToOneWithWhereWithoutLoansInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookUpdateToOneWithWhereWithoutLoansInput", {})
], BookUpdateToOneWithWhereWithoutLoansInput);
