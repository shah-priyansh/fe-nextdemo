import {ChangeEvent} from "react";

declare type CustomCheck = {
    disabled?: boolean
    checked?: boolean,
    customClass?: string,
    changeEvent: (event: ChangeEvent) => void,
    labelText: string
}

export function CustomCheck({disabled, customClass, checked, changeEvent, labelText}: CustomCheck) {
    return (
        <>
            <label className={'text-sm'}>{labelText}</label>
            <input type="checkbox" disabled={disabled} checked={checked}
                   className={`custom-checkbox ${customClass}`}
                   onChange={(event: ChangeEvent) => changeEvent(event)}/>
        </>
    )
}