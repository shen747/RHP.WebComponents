import React, { useId } from 'react';
import './textarea.scss';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    containerClassName?: string;
    rows?: number;
    resize?: boolean;
    labelId?: string;
    value?: string;
    onValueChange?: (value: string) => void;
}

export const TextArea: React.FC<TextAreaProps> = ({
    containerClassName,
    rows = 5,
    resize = false,
    labelId,
    value,
    onValueChange,
    id,
    className,
    onChange,
    onBlur,
    onFocus,
    ...rest
}) => {
    const reactId = useId();
    const inputId = id ?? `input-${reactId}`;

    return (
        <div className={['rhp-textarea', containerClassName].filter(Boolean).join(' ')}>
            <div className="rhp-input__content-wrapper">
                <div className="rhp-input__content">
                    <textarea
                        id={inputId}
                        aria-labelledby={labelId}
                        className={[className, !resize && 'rhp-textarea--no-resize'].filter(Boolean).join(' ')}
                        rows={rows}
                        value={value}
                        onChange={(e) => {
                            onChange?.(e as any);
                            onValueChange?.(e.currentTarget.value);
                        }}
                        onFocus={onFocus as any}
                        onBlur={onBlur as any}
                        {...rest}
                    />
                    <div className="rhp-input__trailing-content" />
                </div>
            </div>
        </div>
    );
};

export default TextArea;
