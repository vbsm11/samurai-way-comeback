import React, {FC} from 'react'

type ProfileStatusPropsType = {
    status: string
}

export const ProfileStatus: FC<ProfileStatusPropsType> = ({status}) => {

    return (
        <>
            <div>
                <span>{status}</span>
            </div>
            <div>
                <input value={status}/>
            </div>
        </>
    )
}