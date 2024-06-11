"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookCreateNestedOneWithoutLoansInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookCreateOrConnectWithoutLoansInput_1 = require("../inputs/BookCreateOrConnectWithoutLoansInput");
const BookCreateWithoutLoansInput_1 = require("../inputs/BookCreateWithoutLoansInput");
const BookWhereUniqueInput_1 = require("../inputs/BookWhereUniqueInput");
let BookCreateNestedOneWithoutLoansInput = class BookCreateNestedOneWithoutLoansInput {
};
exports.BookCreateNestedOneWithoutLoansInput = BookCreateNestedOneWithoutLoansInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookCreateWithoutLoansInput_1.BookCreateWithoutLoansInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookCreateWithoutLoansInput_1.BookCreateWithoutLoansInput)
], BookCreateNestedOneWithoutLoansInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookCreateOrConnectWithoutLoansInput_1.BookCreateOrConnectWithoutLoansInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookCreateOrConnectWithoutLoansInput_1.BookCreateOrConnectWithoutLoansInput)
], BookCreateNestedOneWithoutLoansInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookWhereUniqueInput_1.BookWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookWhereUniqueInput_1.BookWhereUniqueInput)
], BookCreateNestedOneWithoutLoansInput.prototype, "connect", void 0);
exports.BookCreateNestedOneWithoutLoansInput = BookCreateNestedOneWithoutLoansInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookCreateNestedOneWithoutLoansInput", {})
], BookCreateNestedOneWithoutLoansInput);
