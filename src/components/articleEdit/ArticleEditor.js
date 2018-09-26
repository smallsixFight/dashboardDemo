import React, { Component } from 'react';
import { EditorState, ContentState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import style from './ArticleEditor.less'
import { connect } from 'dva';

@connect(({ articles }) => ({ editData: articles.editData }))
export default class ArticleEditor extends Component {
    constructor(props) {
        super(props);
        const { editData } = this.props;
        const content = editData.content || '';
        const contetnBlock = htmlToDraft(content);
        if (contetnBlock) {
            const contentState = ContentState.createFromBlockArray(contetnBlock);
            const editorState = EditorState.createWithContent(contentState);
            this.state = {
                editorState
            }
        }

    }
    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };
    
    render() {
        const  { editorState } = this.state;
        
        return (
            <div>
                <Editor
                    editorState = { editorState }
                    wrapperClassName={ style.wrapperClass }
                    editorClassName={ style.editorClass }
                    // toolbarClassName="toolbar-class"
                    onEditorStateChange = { this.onEditorStateChange }
                >
                </Editor>
            </div>
        )
    }
}
