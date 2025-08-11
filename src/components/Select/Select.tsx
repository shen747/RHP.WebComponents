import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { Icon } from '../Icon';
import './select.scss';

export interface SelectOption {
    label: string;
    value: string | number;
    disabled?: boolean;
    divider?: boolean;
    header?: boolean;
}

export interface SelectProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    value?: string | number | (string | number)[];
    options: SelectOption[];
    placeholder?: string;
    disabled?: boolean;
    readonly?: boolean;
    multiple?: boolean;
    filterable?: boolean;
    loading?: boolean;
    displayOnly?: boolean;
    itemText?: string;
    itemValue?: string;
    onChange?: (value: string | number | (string | number)[] | undefined) => void;
    onInput?: (value: string) => void;
    onFocus?: (e: React.FocusEvent) => void;
    onBlur?: (e: React.FocusEvent) => void;
    renderItem?: (item: SelectOption) => React.ReactNode;
    renderSelection?: (item: SelectOption, index: number) => React.ReactNode;
}

export const Select: React.FC<SelectProps> = ({
    value,
    options,
    placeholder,
    disabled,
    readonly,
    multiple = false,
    filterable = false,
    loading = false,
    displayOnly = false,
    itemText = 'label',
    itemValue = 'value',
    onChange,
    onInput,
    onFocus,
    onBlur,
    renderItem,
    renderSelection,
    className,
    ...rest
}) => {
    const [open, setOpen] = useState(false);
    const [highlight, setHighlight] = useState<number>(-1);
    const [filterValue, setFilterValue] = useState('');
    const [inputMinWidth, setInputMinWidth] = useState(0);
    const rootRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Handle both single and multiple values
    const selectedValues = useMemo(() => {
        if (multiple) {
            return Array.isArray(value) ? value : [];
        }
        return value !== undefined ? [value] : [];
    }, [value, multiple]);

    const selectedItems = useMemo(() => {
        return options.filter(option => selectedValues.includes(option.value));
    }, [options, selectedValues]);

    // Filter options based on filter value
    const filteredOptions = useMemo(() => {
        if (!filterable || !filterValue) return options;
        return options.filter(option => 
            !option.divider && 
            !option.header && 
            option.label.toLowerCase().includes(filterValue.toLowerCase())
        );
    }, [options, filterable, filterValue]);

    // Get display value for single select
    const displayValue = useMemo(() => {
        if (multiple) {
            return filterValue;
        }
        const selected = selectedItems[0];
        return selected ? selected.label : filterValue;
    }, [multiple, selectedItems, filterValue]);

    useEffect(() => {
        function onDoc(e: MouseEvent) {
            if (!rootRef.current) return;
            if (!rootRef.current.contains(e.target as any)) {
                setOpen(false);
                setFilterValue('');
            }
        }
        document.addEventListener('mousedown', onDoc);
        return () => document.removeEventListener('mousedown', onDoc);
    }, []);

    const commit = useCallback((val: string | number | undefined) => {
        if (multiple) {
            if (val === undefined) return;
            const newValues = selectedValues.includes(val) 
                ? selectedValues.filter(v => v !== val)
                : [...selectedValues, val];
            onChange?.(newValues);
        } else {
            onChange?.(val);
            setOpen(false);
            setFilterValue('');
        }
    }, [multiple, selectedValues, onChange]);

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setFilterValue(newValue);
        onInput?.(newValue);
        
        if (!open) {
            setOpen(true);
        }
    }, [open, onInput]);

    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
        if (disabled || readonly || displayOnly) return;

        if (!open && (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown')) {
            e.preventDefault();
            setOpen(true);
            setHighlight(0);
            return;
        }

        if (!open) return;

        if (e.key === 'Escape') {
            setOpen(false);
            setFilterValue('');
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            setHighlight((h) => Math.min(filteredOptions.length - 1, h < 0 ? 0 : h + 1));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setHighlight((h) => Math.max(0, h < 0 ? 0 : h - 1));
        } else if (e.key === 'Enter') {
            e.preventDefault();
            const option = filteredOptions[highlight];
            if (option && !option.disabled && !option.divider && !option.header) {
                commit(option.value);
            }
        } else if (e.key === 'Backspace' && multiple && filterValue === '' && selectedValues.length > 0) {
            // Remove last selected item on backspace when filter is empty
            const newValues = selectedValues.slice(0, -1);
            onChange?.(newValues);
        }
    }, [disabled, readonly, displayOnly, open, filteredOptions, highlight, commit, multiple, filterValue, selectedValues, onChange]);

    const handleFocus = useCallback((e: React.FocusEvent) => {
        onFocus?.(e);
        if (!disabled && !readonly && !displayOnly) {
            setOpen(true);
        }
    }, [disabled, readonly, displayOnly, onFocus]);

    const handleBlur = useCallback((e: React.FocusEvent) => {
        onBlur?.(e);
        // Delay closing to allow for option clicks
        setTimeout(() => {
            if (!rootRef.current?.contains(document.activeElement)) {
                setOpen(false);
                setFilterValue('');
            }
        }, 100);
    }, [onBlur]);

    const isSelectable = useCallback((option: SelectOption) => {
        return !option.disabled && !option.divider && !option.header;
    }, []);

    const renderOption = useCallback((option: SelectOption, index: number) => {
        if (option.divider) {
            return <div key={`divider-${index}`} className="rhp-select__divider" />;
        }
        
        if (option.header) {
            return (
                <div key={`header-${index}`} className="rhp-select__header">
                    {option.label}
                </div>
            );
        }

        const isSelected = selectedValues.includes(option.value);
        const isHighlighted = highlight === index;

        return (
            <div
                key={option.value}
                className={[
                    'rhp-select__option',
                    isSelected && 'is-selected',
                    isHighlighted && 'is-highlight',
                    option.disabled && 'is-disabled'
                ].filter(Boolean).join(' ')}
                onMouseEnter={() => setHighlight(index)}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => !option.disabled && commit(option.value)}
            >
                {renderItem ? renderItem(option) : option.label}
            </div>
        );
    }, [selectedValues, highlight, commit, renderItem]);

    const renderSelectedTags = useCallback(() => {
        if (!multiple) return null;

        return (
            <div className="rhp-select__tags">
                {selectedItems.map((item, index) => (
                    <div key={item.value} className="rhp-select__tag">
                        {renderSelection ? renderSelection(item, index) : item.label}
                        {!readonly && !disabled && !displayOnly && (
                            <button
                                type="button"
                                className="rhp-select__tag-remove"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    commit(item.value);
                                }}
                            >
                                <Icon name="a-icon-close" />
                            </button>
                        )}
                    </div>
                ))}
            </div>
        );
    }, [multiple, selectedItems, renderSelection, readonly, disabled, displayOnly, commit]);

    return (
        <div
            className={[
                'rhp-select',
                multiple && 'rhp-select--multiple',
                filterable && 'rhp-select--filterable',
                loading && 'rhp-select--loading',
                displayOnly && 'rhp-select--display-only',
                className
            ].filter(Boolean).join(' ')}
            ref={rootRef}
            onKeyDown={handleKeyDown}
            {...rest}
        >
            <div className="rhp-select__control">
                {multiple && renderSelectedTags()}
                
                {filterable ? (
                    <input
                        ref={inputRef}
                        type="text"
                        className="rhp-select__input"
                        value={displayValue}
                        onChange={handleInputChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        placeholder={selectedItems.length === 0 ? placeholder : undefined}
                        disabled={disabled || displayOnly}
                        readOnly={readonly}
                        autoComplete="off"
                        style={{ minWidth: inputMinWidth }}
                    />
                ) : (
                    <button
                        type="button"
                        className="rhp-select__button"
                        aria-haspopup="listbox"
                        aria-expanded={open}
                        onClick={() => !disabled && !readonly && !displayOnly && setOpen((v) => !v)}
                        disabled={disabled || displayOnly}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    >
                        <span className={[
                            'rhp-select__value',
                            !selectedItems.length && placeholder ? 'rhp-select__placeholder' : ''
                        ].filter(Boolean).join(' ')}>
                            {selectedItems.length > 0 ? selectedItems[0].label : placeholder ?? 'Select...'}
                        </span>
                    </button>
                )}
                
                <span className="rhp-select__indicator">
                    {loading ? (
                        <div className="rhp-select__loader" />
                    ) : (
                        <Icon name="a-icon-caret-switch" />
                    )}
                </span>
            </div>
            
            {open && (
                <div className="rhp-select__menu">
                    {filteredOptions.length > 0 ? (
                        filteredOptions.map((option, index) => renderOption(option, index))
                    ) : (
                        <div className="rhp-select__no-results">No results found</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Select;
