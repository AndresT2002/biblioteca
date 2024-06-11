import { BookAvgAggregate } from "../outputs/BookAvgAggregate";
import { BookCountAggregate } from "../outputs/BookCountAggregate";
import { BookMaxAggregate } from "../outputs/BookMaxAggregate";
import { BookMinAggregate } from "../outputs/BookMinAggregate";
import { BookSumAggregate } from "../outputs/BookSumAggregate";
export declare class AggregateBook {
    _count: BookCountAggregate | null;
    _avg: BookAvgAggregate | null;
    _sum: BookSumAggregate | null;
    _min: BookMinAggregate | null;
    _max: BookMaxAggregate | null;
}
