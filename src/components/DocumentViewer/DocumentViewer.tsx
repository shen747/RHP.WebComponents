import React from 'react';
import './document-viewer.scss';

export interface DocumentViewerProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string; // url or data url
}

export const DocumentViewer: React.FC<DocumentViewerProps> = ({ src, className, style, ...rest }) => {
  return (
    <div className={["rhp-document-viewer", className].filter(Boolean).join(" ")} style={style as React.CSSProperties} {...rest}>
      {src ? (
        <iframe className="rhp-document-viewer__frame" src={src} title="document" />
      ) : (
        <div className="rhp-document-viewer__empty">No document</div>
      )}
    </div>
  );
};

export default DocumentViewer;

