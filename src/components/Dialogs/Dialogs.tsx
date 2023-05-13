import React from 'react';
import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Georgiy
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    Quincy
                </div>
                <div className={s.dialog}>
                    Roman
                </div>
                <div className={s.dialog}>
                    Alexandr
                </div>
                <div className={s.dialog}>
                    Ruslan
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Goodbye</div>
            </div>
        </div>
    )
}