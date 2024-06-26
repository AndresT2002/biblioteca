import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class AccountUpdateWithoutUserInput {
    type?: StringFieldUpdateOperationsInput | undefined;
    provider?: StringFieldUpdateOperationsInput | undefined;
    providerAccountId?: StringFieldUpdateOperationsInput | undefined;
    refresh_token?: NullableStringFieldUpdateOperationsInput | undefined;
    access_token?: NullableStringFieldUpdateOperationsInput | undefined;
    expires_at?: NullableIntFieldUpdateOperationsInput | undefined;
    token_type?: NullableStringFieldUpdateOperationsInput | undefined;
    scope?: NullableStringFieldUpdateOperationsInput | undefined;
    id_token?: NullableStringFieldUpdateOperationsInput | undefined;
    session_state?: NullableStringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
