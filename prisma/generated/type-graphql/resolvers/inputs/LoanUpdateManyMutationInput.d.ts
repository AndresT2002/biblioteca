import { EnumLoanStatusFieldUpdateOperationsInput } from "../inputs/EnumLoanStatusFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class LoanUpdateManyMutationInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    status?: EnumLoanStatusFieldUpdateOperationsInput | undefined;
}
