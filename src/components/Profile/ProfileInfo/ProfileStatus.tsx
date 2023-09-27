import React, {ChangeEvent} from 'react'

type ProfileStatusPropsType = {
    status: string
    updateStatus: (newStatus: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
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