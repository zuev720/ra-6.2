import React from 'react';

export class NotesList extends React.Component {
    render() {
        return (
            <ul className={this.props.className}>{this.props.children}</ul>
        )
    }
}
