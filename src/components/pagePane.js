import {Editor, EditorState, ContentState} from 'draft-js';
import ReactMarkdown from 'react-markdown'
import {useState} from 'react'
import { PencilSquareIcon, CheckIcon, XMarkIcon} from '@heroicons/react/24/outline'

const PageEditor = (props) => {

  return (
    <>
      <div className="mx-auto max-w-4xl flex flex-row-reverse" >

        <div onClick={() => {props.hideEditor("discard")}}>
          <XMarkIcon className="Block h-6 w-6" />
        </div>

        <div onClick={() => {
          console.log("test");
          props.hideEditor("save")}}>
          <CheckIcon className="Block h-6 w-6" />
        </div>

      </div>
      <Editor
        editorState={props.editorState}
        onChange={props.setEditorState}
        className="h-full"
      />
    </>
  );
}

const PageViewer = (props) => {
  return (
    <>
      <div className="mx-auto max-w-4xl flex flex-row-reverse" >
        <div onClick={props.showEditor}>
          <PencilSquareIcon className="Block h-6 w-6" />
        </div>
      </div>
      {/* Markdown viewer */}
      <ReactMarkdown children={props.viewerContent} />

    </>
  );
}

export default function PagePane() {

  // Whether the editor is active
  const [editorActive, setEditorActive] = useState(false);
  
  // The editor state
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  // The content of the viewer
  const [viewerContent, setViewerContent] = useState()


  // Get the previous editor text
  var previousEditorText = editorState.getCurrentContent().getPlainText();

  // Shows the editor
  const showEditor = () => {
    // Save editor state
    previousEditorText = editorState.getCurrentContent().getPlainText();
    
    setEditorActive(true);
  };

  // Handles the closing of editors
  const hideEditor = (action) => {
    if (action === 'save') {
      // Set view content to editor content
      let contentState = editorState.getCurrentContent();
      setViewerContent(contentState.getPlainText())
    } else if (action === 'discard') {
      // revert editor state to last saved
      let oldEditorContent = ContentState.createFromText(previousEditorText)
      setEditorState(EditorState.createWithContent(oldEditorContent));
    }

    // Hide editor
    setEditorActive(false);
  };

  let editorPane;
  if (editorActive) {
    editorPane = <PageEditor
      hideEditor={hideEditor}
      editorState={editorState}
      setEditorState={setEditorState} />
  } else {
    editorPane = <PageViewer showEditor={showEditor} viewerContent={viewerContent} />
  }

  return (
    <div className="h-full container flex flex-row justify-center" >
      <div className="w-full min-w-sm max-w-3xl">
      {editorPane}
      </div>
    </div>
  );
};
