import React from 'react'

type ProfileStatusPropsType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: true
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <div>
                        <input value={this.props.status}/>
                    </div>
                    : <div>
                        <span>{this.props.status}</span>
                    </div>
                }
            </div>
        );
    }
}