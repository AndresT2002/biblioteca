import { LoanCountAggregate } from "../outputs/LoanCountAggregate";
import { LoanMaxAggregate } from "../outputs/LoanMaxAggregate";
import { LoanMinAggregate } from "../outputs/LoanMinAggregate";
export declare class AggregateLoan {
    _count: LoanCountAggregate | null;
    _min: LoanMinAggregate | null;
    _max: LoanMaxAggregate | null;
}
