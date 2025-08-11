import React from 'react';
import './file-area.scss';

export interface FileAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  onFiles?: (files: FileList) => void;
  label?: React.ReactNode;
}

export const FileArea: React.FC<FileAreaProps> = ({ onFiles, label = 'Drop files here or click to upload', className, style, ...rest }) => {
  const ref = React.useRef<HTMLInputElement>(null);
  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files?.length) onFiles?.(e.dataTransfer.files);
  };
  const onClick = () => ref.current?.click();

  return (
    <div className={["rhp-file-area", className].filter(Boolean).join(" ")} style={style as React.CSSProperties} onDragOver={(e) => e.preventDefault()} onDrop={onDrop} onClick={onClick} {...rest}>
      <input ref={ref} type="file" style={{ display: 'none' }} onChange={(e) => e.currentTarget.files && onFiles?.(e.currentTarget.files)} />
      <div className="rhp-file-area__label">{label}</div>
    </div>
  );
};

export default FileArea;

