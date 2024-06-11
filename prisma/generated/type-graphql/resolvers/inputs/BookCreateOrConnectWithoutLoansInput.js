"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookCreateOrConnectWithoutLoansInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookCreateWithoutLoansInput_1 = require("../inputs/BookCreateWithoutLoansInput");
const BookWhereUniqueInput_1 = require("../inputs/BookWhereUniqueInput");
let BookCreateOrConnectWithoutLoansInput = class BookCreateOrConnectWithoutLoansInput {
};
exports.BookCreateOrConnectWithoutLoansInput = BookCreateOrConnectWithoutLoansInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookWhereUniqueInput_1.BookWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookWhereUniqueInput_1.BookWhereUniqueInput)
], BookCreateOrConnectWithoutLoansInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookCreateWithoutLoansInput_1.BookCreateWithoutLoansInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookCreateWithoutLoansInput_1.BookCreateWithoutLoansInput)
], BookCreateOrConnectWithoutLoansInput.prototype, "create", void 0);
exports.BookCreateOrConnectWithoutLoansInput = BookCreateOrConnectWithoutLoansInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookCreateOrConnectWithoutLoansInput", {})
], BookCreateOrConnectWithoutLoansInput);
