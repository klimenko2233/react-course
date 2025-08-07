export const retriveLocalStorage = <T>(key:string) => {
    const object = localStorage.getItem(key) || '';
    if(!object) return {} as T;
    const parsedObject = JSON.parse(object);
    return parsedObject as T;
};