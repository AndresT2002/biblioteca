"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookUpsertWithoutLoansInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookCreateWithoutLoansInput_1 = require("../inputs/BookCreateWithoutLoansInput");
const BookUpdateWithoutLoansInput_1 = require("../inputs/BookUpdateWithoutLoansInput");
const BookWhereInput_1 = require("../inputs/BookWhereInput");
let BookUpsertWithoutLoansInput = class BookUpsertWithoutLoansInput {
};
exports.BookUpsertWithoutLoansInput = BookUpsertWithoutLoansInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookUpdateWithoutLoansInput_1.BookUpdateWithoutLoansInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookUpdateWithoutLoansInput_1.BookUpdateWithoutLoansInput)
], BookUpsertWithoutLoansInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookCreateWithoutLoansInput_1.BookCreateWithoutLoansInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookCreateWithoutLoansInput_1.BookCreateWithoutLoansInput)
], BookUpsertWithoutLoansInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookWhereInput_1.BookWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookWhereInput_1.BookWhereInput)
], BookUpsertWithoutLoansInput.prototype, "where", void 0);
exports.BookUpsertWithoutLoansInput = BookUpsertWithoutLoansInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookUpsertWithoutLoansInput", {})
], BookUpsertWithoutLoansInput);
