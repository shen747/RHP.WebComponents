import React from 'react';
import './data-table.scss';

export interface Column<T> {
  key: keyof T & string;
  header: React.ReactNode;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
  render?: (row: T) => React.ReactNode;
  sortable?: boolean;
  text?: string; // Alternative to header for text content
  value?: string; // Alternative key name
}

export interface DataTableProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  columns: Column<T>[];
  data: T[];
  sortKey?: string;
  sortDirection?: 'asc' | 'desc';
  onSortChange?: (key: string, dir: 'asc' | 'desc') => void;
  pageSize?: number;
  page?: number;
  onPageChange?: (page: number) => void;
  // New props from Vue component
  density?: 'default' | 'comfortable' | 'compact';
  editableStyling?: boolean;
  fillAvailable?: boolean;
  fixedHeader?: boolean;
  hideDefaultFooter?: boolean;
  hideDefaultHeader?: boolean;
  itemsPerPage?: number;
  itemsPerPageOptions?: (number | { title: string; value: number })[];
  itemValue?: string;
  loading?: boolean;
  mobile?: boolean;
  mobileBreakpoint?: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  noDataText?: string;
  selectionMode?: boolean;
  onUpdateItemsPerPage?: (value: number) => void;
  onUpdateOptions?: (value: any) => void;
}

export function DataTable<T extends Record<string, any>>({
  columns,
  data,
  sortKey,
  sortDirection = 'asc',
  onSortChange,
  pageSize = 10,
  page: pageProp,
  onPageChange,
  className,
  style,
  // New props
  density = 'compact',
  editableStyling = false,
  fillAvailable = false,
  fixedHeader = true,
  hideDefaultFooter = false,
  hideDefaultHeader = false,
  itemsPerPage,
  itemsPerPageOptions,
  itemValue,
  loading = false,
  mobile,
  mobileBreakpoint = 'sm',
  noDataText,
  selectionMode = false,
  onUpdateItemsPerPage,
  onUpdateOptions,
  ...rest
}: DataTableProps<T>) {
  const [page, setPage] = React.useState(pageProp ?? 1);
  const [internalItemsPerPage, setInternalItemsPerPage] = React.useState(itemsPerPage ?? pageSize);
  const [internalOptions, setInternalOptions] = React.useState({});

  React.useEffect(() => { if (pageProp !== undefined) setPage(pageProp); }, [pageProp]);
  React.useEffect(() => { if (itemsPerPage !== undefined) setInternalItemsPerPage(itemsPerPage); }, [itemsPerPage]);

  const internalSort = !onSortChange;
  const [internalSortKey, setInternalSortKey] = React.useState<string | undefined>(sortKey);
  const [internalSortDir, setInternalSortDir] = React.useState<'asc' | 'desc'>(sortDirection);
  React.useEffect(() => setInternalSortKey(sortKey), [sortKey]);
  React.useEffect(() => setInternalSortDir(sortDirection), [sortDirection]);

  const sorted = React.useMemo(() => {
    const arr = [...data];
    const key = internalSort ? internalSortKey : sortKey;
    const dir = internalSort ? internalSortDir : sortDirection;
    if (!key) return arr;
    return arr.sort((a, b) => {
      const av = a[key]; const bv = b[key];
      if (av == null && bv == null) return 0;
      if (av == null) return dir === 'asc' ? -1 : 1;
      if (bv == null) return dir === 'asc' ? 1 : -1;
      if (av < bv) return dir === 'asc' ? -1 : 1;
      if (av > bv) return dir === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, internalSort, internalSortKey, internalSortDir, sortKey, sortDirection]);

  const start = (page - 1) * internalItemsPerPage;
  const end = start + internalItemsPerPage;
  const pageRows = sorted.slice(start, end);
  const totalPages = Math.max(1, Math.ceil(data.length / internalItemsPerPage));

  const changePage = (p: number) => {
    const next = Math.min(totalPages, Math.max(1, p));
    if (onPageChange) onPageChange(next);
    else setPage(next);
    
    const newOptions = { ...internalOptions, page: next };
    setInternalOptions(newOptions);
    onUpdateOptions?.(newOptions);
  };

  const changeItemsPerPage = (newItemsPerPage: number) => {
    setInternalItemsPerPage(newItemsPerPage);
    onUpdateItemsPerPage?.(newItemsPerPage);
    
    const newOptions = { ...internalOptions, itemsPerPage: newItemsPerPage };
    setInternalOptions(newOptions);
    onUpdateOptions?.(newOptions);
  };

  const toggleSort = (key: string, sortable?: boolean) => {
    if (!sortable) return;
    if (onSortChange) {
      const nextDir = sortKey === key ? (sortDirection === 'asc' ? 'desc' : 'asc') : 'asc';
      onSortChange(key, nextDir);
    } else {
      const nextDir = internalSortKey === key ? (internalSortDir === 'asc' ? 'desc' : 'asc') : 'asc';
      setInternalSortKey(key);
      setInternalSortDir(nextDir);
    }
  };

  const computedClasses = [
    'rhp-data-table',
    editableStyling ? 'rhp-data-table-editable' : 'rhp-data-table-display',
    {
      'rhp-fill-available-table': fillAvailable,
      'rhp-fill': fillAvailable,
      'rhp-data-table--selection-mode': selectionMode,
      'rhp-data-table--mobile': mobile,
      [`rhp-data-table--density-${density}`]: density,
    }
  ].filter(Boolean).join(' ');

  const computedNoDataText = noDataText ?? 'No items found';
  const computedHeaders = columns.map((col) => ({ 
    ...col, 
    title: col.text ? col.text : col.header 
  }));

  return (
    <div className={[computedClasses, className].filter(Boolean).join(" ")} style={style as React.CSSProperties} {...rest}>
      {!hideDefaultHeader && (
        <table>
          <thead>
            <tr>
              {computedHeaders.map(col => (
                <th key={col.key} style={{ width: col.width, textAlign: col.align }}>
                  <button 
                    type="button" 
                    className={[
                      "rhp-data-table__th", 
                      col.sortable && 'rhp-data-table__th--sortable', 
                      (sortKey ?? internalSortKey) === col.key && `rhp-data-table__th--${(sortDirection ?? internalSortDir)}`
                    ].filter(Boolean).join(' ')} 
                    onClick={() => toggleSort(col.key, col.sortable)}
                  >
                    <span>{col.title}</span>
                  </button>
                </th>
              ))}
            </tr>
          </thead>
        </table>
      )}
      
      <div className="rhp-data-table__wrapper">
        <table>
          {!hideDefaultHeader && (
            <thead>
              <tr>
                {computedHeaders.map(col => (
                  <th key={col.key} style={{ width: col.width, textAlign: col.align }}>
                    <button 
                      type="button" 
                      className={[
                        "rhp-data-table__th", 
                        col.sortable && 'rhp-data-table__th--sortable', 
                        (sortKey ?? internalSortKey) === col.key && `rhp-data-table__th--${(sortDirection ?? internalSortDir)}`
                      ].filter(Boolean).join(' ')} 
                      onClick={() => toggleSort(col.key, col.sortable)}
                    >
                      <span>{col.title}</span>
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {pageRows.map((row, idx) => (
              <tr key={idx}>
                {computedHeaders.map(col => (
                  <td key={col.key as string} style={{ textAlign: col.align }}>
                    {col.render ? col.render(row) : String(row[col.key] ?? '')}
                  </td>
                ))}
              </tr>
            ))}
            {!pageRows.length && (
              <tr>
                <td colSpan={computedHeaders.length} className="rhp-data-table__empty">
                  {computedNoDataText}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {!hideDefaultFooter && (
        <div className="rhp-data-table__footer">
          <DataPagination
            page={page}
            itemsLength={data.length}
            itemsPerPage={internalItemsPerPage}
            itemsPerPageOptions={itemsPerPageOptions}
            onUpdatePage={changePage}
            onUpdateItemsPerPage={changeItemsPerPage}
            onUpdateOptions={(options) => {
              setInternalOptions(options);
              onUpdateOptions?.(options);
            }}
          />
        </div>
      )}
    </div>
  );
}

// DataPagination component
interface DataPaginationProps {
  page: number;
  itemsLength: number;
  itemsPerPage: number;
  itemsPerPageOptions?: (number | { title: string; value: number })[];
  onUpdatePage: (page: number) => void;
  onUpdateItemsPerPage: (itemsPerPage: number) => void;
  onUpdateOptions: (options: any) => void;
}

function DataPagination({
  page,
  itemsLength,
  itemsPerPage,
  itemsPerPageOptions = [5, 10, 25, 50, 100],
  onUpdatePage,
  onUpdateItemsPerPage,
  onUpdateOptions
}: DataPaginationProps) {
  const pageCount = Math.max(1, Math.ceil(itemsLength / itemsPerPage));
  const startItem = itemsLength === 0 ? 0 : (page - 1) * itemsPerPage + 1;
  const endItem = Math.min(page * itemsPerPage, itemsLength);

  const handleItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newItemsPerPage = parseInt(event.target.value, 10);
    onUpdateItemsPerPage(newItemsPerPage);
  };

  const handlePageChange = (newPage: number) => {
    onUpdatePage(newPage);
  };

  return (
    <div className="rhp-data__pagination">
      <div className="rhp-spacer" />
      <span id="items-per-page">Items per page:</span>
      <select
        value={itemsPerPage}
        onChange={handleItemsPerPageChange}
        aria-labelledby="items-per-page"
        style={{ maxWidth: '80px' }}
      >
        {itemsPerPageOptions.map((option) => {
          const value = typeof option === 'number' ? option : option.value;
          const title = typeof option === 'number' ? option.toString() : option.title;
          return (
            <option key={value} value={value}>
              {title}
            </option>
          );
        })}
      </select>
      <span data-testid="current-items-caption">
        {startItem}-{endItem} of {itemsLength}
      </span>
      
      <div className="rhp-pagination">
        <button
          type="button"
          onClick={() => handlePageChange(1)}
          disabled={page <= 1}
          aria-label="First page"
          className="rhp-pagination__button"
        >
          <span className="a-icon-first" />
        </button>
        <button
          type="button"
          onClick={() => handlePageChange(page - 1)}
          disabled={page <= 1}
          aria-label="Previous page"
          className="rhp-pagination__button"
        >
          <span className="a-icon-move-left" />
        </button>
        <button
          type="button"
          onClick={() => handlePageChange(page + 1)}
          disabled={page >= pageCount}
          aria-label="Next page"
          className="rhp-pagination__button"
        >
          <span className="a-icon-move-right" />
        </button>
        <button
          type="button"
          onClick={() => handlePageChange(pageCount)}
          disabled={page >= pageCount}
          aria-label="Last page"
          className="rhp-pagination__button"
        >
          <span className="a-icon-last" />
        </button>
      </div>
    </div>
  );
}

export default DataTable;

