export const isNullOrUndefined = <T>(val: T): boolean => {
    return val === null || val === undefined;
};

export const isNullOrEmpty = <T>(items: T[]): boolean => {
    return isNullOrUndefined(items) || items.length === 0;
};

export const isNullOrWhiteSpace = (value: string): boolean => {
    return isNullOrUndefined(value) || value.trim() === '';
};

export const isEmptyInputValue = (value: any): boolean => {
    return isNullOrUndefined(value) || value.length === 0;
};

export const formatIsoString = (isoString: string): string => {
    const date = new Date(isoString);
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 || 12;
    const day = date.getDate();
    let daySuffix = 'th';
    if (day === 1 || day === 21 || day === 31) {
        daySuffix = 'st';
    } else if (day === 2 || day === 22) {
        daySuffix = 'nd';
    } else if (day === 3 || day === 23) {
        daySuffix = 'rd';
    }
    const formattedDate = `${date.toLocaleString('default', { month: 'short' })} ${day}${daySuffix} ${date.getFullYear()} ${formattedHours}:${minutes}${ampm}`;
    return formattedDate;
};
