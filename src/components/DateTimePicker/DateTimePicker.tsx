import React, { useState, useEffect, useMemo } from 'react';
import './date-time-picker.scss';

export interface DateTimePickerProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string; // ISO like 2024-01-31T14:30
  onChange?: (value: string) => void;
  useSeconds?: boolean;
  showTimeZone?: boolean;
  todayDateFn?: (showTimeZone?: boolean) => string;
  hideTodayButton?: boolean;
}

export const DateTimePicker: React.FC<DateTimePickerProps> = ({ 
  value, 
  onChange, 
  useSeconds = false,
  showTimeZone = false,
  todayDateFn,
  hideTodayButton = false,
  className, 
  style, 
  ...rest 
}) => {
  const [internalValue, setInternalValue] = useState({
    date: '',
    time: '',
    timeZone: ''
  });

  // Get timezone options
  const timezoneOptions = useMemo(() => {
    if (!showTimeZone) return [];
    
    const timezones = [
      { offset: 'UTC', formatted: 'UTC (UTC+00:00)' },
      { offset: 'UTC+1', formatted: 'Central European Time (UTC+01:00)' },
      { offset: 'UTC+2', formatted: 'Eastern European Time (UTC+02:00)' },
      { offset: 'UTC+3', formatted: 'Moscow Time (UTC+03:00)' },
      { offset: 'UTC+4', formatted: 'Gulf Standard Time (UTC+04:00)' },
      { offset: 'UTC+5', formatted: 'Pakistan Standard Time (UTC+05:00)' },
      { offset: 'UTC+5:30', formatted: 'India Standard Time (UTC+05:30)' },
      { offset: 'UTC+6', formatted: 'Bangladesh Standard Time (UTC+06:00)' },
      { offset: 'UTC+7', formatted: 'Indochina Time (UTC+07:00)' },
      { offset: 'UTC+8', formatted: 'China Standard Time (UTC+08:00)' },
      { offset: 'UTC+9', formatted: 'Japan Standard Time (UTC+09:00)' },
      { offset: 'UTC+10', formatted: 'Australian Eastern Time (UTC+10:00)' },
      { offset: 'UTC+11', formatted: 'Solomon Islands Time (UTC+11:00)' },
      { offset: 'UTC+12', formatted: 'New Zealand Standard Time (UTC+12:00)' },
      { offset: 'UTC-1', formatted: 'Azores Time (UTC-01:00)' },
      { offset: 'UTC-2', formatted: 'Fernando de Noronha Time (UTC-02:00)' },
      { offset: 'UTC-3', formatted: 'Brasília Time (UTC-03:00)' },
      { offset: 'UTC-4', formatted: 'Eastern Daylight Time (UTC-04:00)' },
      { offset: 'UTC-5', formatted: 'Eastern Standard Time (UTC-05:00)' },
      { offset: 'UTC-6', formatted: 'Central Standard Time (UTC-06:00)' },
      { offset: 'UTC-7', formatted: 'Mountain Standard Time (UTC-07:00)' },
      { offset: 'UTC-8', formatted: 'Pacific Standard Time (UTC-08:00)' },
      { offset: 'UTC-9', formatted: 'Alaska Standard Time (UTC-09:00)' },
      { offset: 'UTC-10', formatted: 'Hawaii Standard Time (UTC-10:00)' },
      { offset: 'UTC-11', formatted: 'Samoa Standard Time (UTC-11:00)' },
      { offset: 'UTC-12', formatted: 'Baker Island Time (UTC-12:00)' }
    ];
    
    return timezones;
  }, [showTimeZone]);

  // Helper function to format today's date and time
  const getTodayDateTime = () => {
    const now = new Date();
    const date = now.toISOString().split('T')[0];
    const time = useSeconds 
      ? now.toTimeString().split(' ')[0] 
      : now.toTimeString().split(' ')[0].substring(0, 5);
    const timeZone = showTimeZone ? 'UTC' : '';
    
    return { date, time, timeZone };
  };

  // Helper function to extract date and time from ISO string
  const extractDateTimeFromISO = (isoString: string) => {
    if (!isoString) return { date: '', time: '', timeZone: '' };
    
    const parts = isoString.split(' ');
    const dateTime = parts[0];
    const timeZone = parts[1] || '';
    
    if (dateTime.includes('T')) {
      const [date, time] = dateTime.split('T');
      return { 
        date, 
        time: useSeconds ? time.substring(0, 8) : time.substring(0, 5),
        timeZone 
      };
    }
    
    return { date: dateTime, time: '', timeZone };
  };

  // Update internal value when prop changes
  useEffect(() => {
    if (value) {
      setInternalValue(extractDateTimeFromISO(value));
    } else {
      const today = todayDateFn ? todayDateFn(showTimeZone) : getTodayDateTime();
      setInternalValue(today);
    }
  }, [value, useSeconds, showTimeZone, todayDateFn]);

  // Update parent when internal value changes
  const updateValue = (newValue: typeof internalValue) => {
    setInternalValue(newValue);
    
    if (showTimeZone) {
      const { date, time, timeZone } = newValue;
      const result = [date, time, timeZone].filter(Boolean).join(' ');
      onChange?.(result);
    } else {
      const { date, time } = newValue;
      const result = [date, time].filter(Boolean).join(' ');
      onChange?.(result);
    }
  };

  const handleDateChange = (newDate: string) => {
    updateValue({ ...internalValue, date: newDate });
  };

  const handleTimeChange = (newTime: string) => {
    updateValue({ ...internalValue, time: newTime });
  };

  const handleTimeZoneChange = (newTimeZone: string) => {
    updateValue({ ...internalValue, timeZone: newTimeZone });
  };

  const handleTodayClick = () => {
    const today = getTodayDateTime();
    updateValue(today);
  };

  return (
    <div 
      className={["rhp-date-time-picker-container", className].filter(Boolean).join(" ")} 
      style={style as React.CSSProperties} 
      {...rest}
    >
      <div className="rhp-date-time-picker-date">
        <label htmlFor="date-picker">Date</label>
        <input
          id="date-picker"
          type="date"
          value={internalValue.date}
          onChange={(e) => handleDateChange(e.target.value)}
          className="rhp-date-picker"
        />
      </div>
      
      <div className="rhp-date-time-picker-time">
        <label htmlFor="time-picker">Time</label>
        <input
          id="time-picker"
          type="time"
          step={useSeconds ? 1 : 60}
          value={internalValue.time}
          onChange={(e) => handleTimeChange(e.target.value)}
          className="rhp-time-picker"
        />
      </div>
      
      {showTimeZone && (
        <div className="rhp-date-time-picker-timezone">
          <label htmlFor="timezone-picker">Timezone</label>
          <select
            id="timezone-picker"
            value={internalValue.timeZone}
            onChange={(e) => handleTimeZoneChange(e.target.value)}
            className="rhp-timezone-picker"
          >
            {timezoneOptions.map((tz) => (
              <option key={tz.offset} value={tz.offset}>
                {tz.formatted}
              </option>
            ))}
          </select>
        </div>
      )}
      
      {!hideTodayButton && (
        <div className="rhp-date-time-picker-today">
          <button
            type="button"
            onClick={handleTodayClick}
            className="rhp-today-button"
          >
            Today
          </button>
        </div>
      )}
    </div>
  );
};

export default DateTimePicker;

