import React from 'react';
import {uniqId} from './uniqid';
import {Button} from './Button/Button';
import {NoteItem} from './NoteItem/NoteItem';
import {NotesList} from './NotesList/NotesList';
import './css/CrudApp.css';
import {serverRequest} from './Functions/serverRequest';

export class CrudApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
        }
        this.onDeleteNoteClick = this.onDeleteNoteClick.bind(this);
        this.updateNotesButton = this.updateNotesButton.bind(this);
        this.handleTextAreaValue = this.handleTextAreaValue.bind(this);
        this.addNoteButton = this.addNoteButton.bind(this);
    }

    async componentDidMount() {
        const result = await serverRequest('GET');
        this.setState({notes: result});
    }

    async componentUpdate() {
        const result = await serverRequest('GET');
        this.setState({notes: result});
    }

    componentWillUnmount() {
        window.removeEventListener('onClick', this.onDeleteNoteClick);
        window.removeEventListener('onClick', this.updateNotesButton);
        window.removeEventListener('onKeyDown', this.handleTextAreaValue);
        window.removeEventListener('onClick', this.addNoteButton);
    }

    async onDeleteNoteClick(e) {
        const noteId = e.target.closest('.NoteItem').id;
        await serverRequest('DELETE', noteId, null);
        await this.componentUpdate();
    }

    async updateNotesButton() {
        await this.componentUpdate();
    }

    async handleTextAreaValue(e) {
        if (e.key === 'Enter') {
            if (e.target.value.trim() === '') {
                e.preventDefault();
                e.target.value = '';
                return;
            }
            const textAreaValue = e.target.value.trim();
            const obj = {
                id: uniqId(),
                content: textAreaValue,
            };
            await serverRequest('POST', null, obj)
            await this.componentUpdate();
            e.target.value = '';
        }
    }

    async addNoteButton() {
        const textAreaValue = document.querySelector('.NoteTextArea').value;
        if (textAreaValue === '') return;
        const event = {
            key: 'Enter',
            target: {value: textAreaValue}
        };
        await this.handleTextAreaValue(event);
        document.querySelector('.NoteTextArea').value = '';
    }

    render() {
        return (
            <div className={'CrudApp'}>
                <section className={'Content'}>
                    <header className={'CrudAppHeader'}>
                        <h2 className={'CrudHeader'}>{'Note'}</h2>
                        <Button className={'UpdateNotesButton'} handleClick={this.updateNotesButton}>&#128472;</Button>
                    </header>
                    <NotesList className={'NotesList'}>
                        {this.state.notes.map((elem) =>
                            <NoteItem key={elem.id} className={'NoteItem'} id={elem.id}
                                      handleClick={this.onDeleteNoteClick} content={elem.content}/>
                        )}
                    </NotesList>
                </section>
                <div className={'TextAreaBlock'}>
                    <label htmlFor={'noteTextArea'}>{'New Note'}</label>
                    <textarea className={'NoteTextArea'} name={'NoteTextArea'} id={'noteTextArea'}
                              onKeyDown={this.handleTextAreaValue} required={true}/>
                    <Button className={'AddNoteButton'} handleClick={this.addNoteButton}>&#10148;</Button>
                </div>
            </div>
        )
    }

}
