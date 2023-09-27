import React, {ChangeEvent} from 'react'

type ProfileStatusPropsType = {
    status: string
    updateStatus: (newStatus: string) => void
}

type ProfileStatusStateType = {
    editMode: boolean
    localStatus: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state: ProfileStatusStateType = {
        editMode: false,
        localStatus: this.props.status
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }

    onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({localStatus: e.currentTarget.value})
    }

    deactivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.localStatus)
    }

    componentDidUpdate(prevProps: ProfileStatusPropsType, prevState: ProfileStatusStateType) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }


    render() {
        return (
            <div>
                {this.state.editMode
                    ? <div>
                        <input
                            value={this.state.localStatus}
                            onChange={this.onChangeStatus}
                            autoFocus
                            onBlur={this.deactivateEditMode}
                        />
                    </div>
                    : <div>
                        <span
                            onDoubleClick={this.activateEditMode}
                        >
                            {this.props.status || 'Enter your status'}
                        </span>
                    </div>
                }
            </div>
        );
    }
}