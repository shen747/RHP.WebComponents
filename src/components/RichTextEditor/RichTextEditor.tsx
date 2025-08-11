import React from 'react';
import './rich-text-editor.scss';

export interface RichTextEditorProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const RichTextEditor: React.FC<RichTextEditorProps> = ({ className, ...rest }) => {
  return <textarea className={["rhp-richtext", className].filter(Boolean).join(" ")} {...rest} />;
};

export default RichTextEditor;

