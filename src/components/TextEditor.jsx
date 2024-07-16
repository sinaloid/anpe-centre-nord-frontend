/* eslint-disable react/prop-types */
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
//import { useState } from "react";
import { locales } from "@blocknote/core";
import { useEffect } from "react";

const TextEditor = ({ title, setValue,data }) => {
  const editor = useCreateBlockNote({
    dictionary: locales.fr,
  });
  
  useEffect(() => {
    if(data){
      replaceBlocks()
    }
  },[data])

  const onChange = async () => {
    // Converts the editor's contents from Block objects to HTML and store to state.
    const html = await editor.blocksToHTMLLossy(editor.document);
    //setHTML(html);
    setValue(html);
  };

  const replaceBlocks = async () => {
    const blocks = await editor.tryParseHTMLToBlocks(data.description);
    editor.replaceBlocks(editor.document, blocks);
    console.log(blocks)
  }
  return (
    <>
      <div className="w-100">
        <div className="wrapper">
          <div className="text-primary1">{title} :</div>
          <div className="item">
            <BlockNoteView editor={editor} onChange={onChange} />
          </div>
          {/**
           * <div>Output (HTML):</div>
          <div className="item bordered">
            <pre>
              <code>{html}</code>
            </pre>
          </div>
           */}
        </div>
      </div>
    </>
  );
};

export default TextEditor;
