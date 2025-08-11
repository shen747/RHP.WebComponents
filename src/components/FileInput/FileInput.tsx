import React from 'react';

export interface FileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onFiles?: (files: FileList) => void;
}

export const FileInput: React.FC<FileInputProps> = ({ onFiles, ...rest }) => {
  return (
    <input type="file" onChange={(e) => e.currentTarget.files && onFiles?.(e.currentTarget.files)} {...rest} />
  );
};

export default FileInput;

