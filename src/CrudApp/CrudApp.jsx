import React from 'react';
import {uniqId} from './uniqid';
import {Button} from './Button/Button';
import {NoteItem} from './NoteItem/NoteItem';
import {NotesList} from './NotesList/NotesList';
import {serverRequest} from './Functions/serverRequest';
import './css/CrudApp.css';

export class CrudApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textAreaValue: '',
            notes: [],
        }
        this.onDeleteNoteClick = this.onDeleteNoteClick.bind(this);
        this.updateNotesButton = this.updateNotesButton.bind(this);
        this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
        this.handleTextAreaValue = this.handleTextAreaValue.bind(this);
        this.addNewNote = this.addNewNote.bind(this);
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

    async onDeleteNoteClick(e) {
        const noteId = e.target.id;
        await serverRequest('DELETE', noteId, null);
        await this.componentUpdate();
    }

    async updateNotesButton() {
        await this.componentUpdate();
    }

    handleTextAreaChange(e) {
        this.setState({textAreaValue: e.target.value});
    }

    async handleTextAreaValue(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (this.state.textAreaValue.trim() === '') {
                this.setState({textAreaValue: ''});
                return;
            }
            await this.addNewNote();
            e.target.blur();
        }
    }

    async addNewNote() {
        const obj = {
            id: uniqId(),
            content: this.state.textAreaValue.trim(),
        };
        await serverRequest('POST', null, obj)
        await this.componentUpdate();
        this.setState({textAreaValue: ''});
    }

    async addNoteButton() {
        if (this.state.textAreaValue === '') return;
        await this.addNewNote();
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
                    <textarea
                        className={'NoteTextArea'}
                        name={'NoteTextArea'} id={'noteTextArea'}
                        value={this.state.textAreaValue}
                        onChange={this.handleTextAreaChange}
                        onKeyDown={this.handleTextAreaValue}
                        required={true}/>
                    <Button className={'AddNoteButton'} handleClick={this.addNoteButton}>&#10148;</Button>
                </div>
            </div>
        )
    }

}
