import React from 'react';
import './document-preview.scss';

export interface DocumentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string; // url or data url
  mimeType?: string; // e.g. application/pdf, image/png
  fallback?: React.ReactNode;
}

export const DocumentPreview: React.FC<DocumentPreviewProps> = ({ src, mimeType, fallback, className, style, ...rest }) => {
  const isImage = mimeType?.startsWith('image/');
  const isPdf = mimeType === 'application/pdf' || (src?.toLowerCase().endsWith('.pdf'));
  return (
    <div className={["rhp-document-preview", className].filter(Boolean).join(" ")} style={style as React.CSSProperties} {...rest}>
      {src && isImage && <img src={src} alt="preview" className="rhp-document-preview__img" />}
      {src && isPdf && (
        <iframe className="rhp-document-preview__frame" src={src} title="preview" />
      )}
      {(!src || (!isImage && !isPdf)) && (
        <div className="rhp-document-preview__fallback">
          {fallback ?? 'Preview not available'}
        </div>
      )}
    </div>
  );
};

export default DocumentPreview;

