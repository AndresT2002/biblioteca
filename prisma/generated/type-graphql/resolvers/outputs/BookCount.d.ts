import { BookCountLoansArgs } from "./args/BookCountLoansArgs";
export declare class BookCount {
    loans: number;
    getLoans(root: BookCount, args: BookCountLoansArgs): number;
}
