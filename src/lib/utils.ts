export function resolveMapUrl(url: string): string {
    if (!url) return '';

    // 簡單判斷是否為 Apple Maps
    if (url.includes('maps.apple.com')) {
        return url;
    }

    // 針對 Google Maps，嘗試喚起 iOS App (comgooglemaps://)
    // 這裡回傳原始連結，由 iOS Universal Link 機制處理，
    // 或者在前端層級判斷 User Agent 進行轉換。
    // 為保持實作單純，目前優先回傳原始連結，讓系統決定。
    return url;
}

export function formatTripDate(startDateStr: string, endDateStr: string): string {
    if (!startDateStr) return '';

    const start = new Date(startDateStr);
    const end = endDateStr ? new Date(endDateStr) : null;

    const startYear = start.getFullYear();
    const endYear = end ? end.getFullYear() : startYear;

    // 判斷是否同一年
    const isSameYear = startYear === endYear;

    const optionsSameYear: Intl.DateTimeFormatOptions = { month: 'numeric', day: 'numeric' };
    const optionsDiffYear: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };

    const sStr = start.toLocaleDateString('zh-TW', isSameYear ? optionsSameYear : optionsDiffYear);

    if (!end) return sStr;

    const eStr = end.toLocaleDateString('zh-TW', isSameYear ? optionsSameYear : optionsDiffYear);
    return `${sStr} - ${eStr}`;
}
