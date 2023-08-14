export const setLocalStorage = (key: string, value: any) => {
    try {
        localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
        console.error('Error saving to Local Storage:', error);
    }
}

export const getLocalStorage = (key: string): any | null => {
    try {
        const data = localStorage.getItem(key);
        if (data) {
            return JSON.parse(data)
        }
    } catch (error) {
        console.error('Error retrieving from Local Storage:', error);
        return null
    }
}