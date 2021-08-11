import React from 'react';
import {Button} from '../Button/Button';

export class NoteItem extends React.Component {
    render() {
        return (
            <li className={this.props.className} id={this.props.id}>
                <Button className={'DeleteNoteButton'} handleClick={this.props.handleClick}>&#10060;</Button>
                <p className={'NoteItemText'}>{this.props.content}</p>
            </li>
        )
    }
}
