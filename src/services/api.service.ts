

const baseUrl = 'https://jsonplaceholder.typicode.com';


export const getAll = async <T>(endpoint: string) => {
    const response = await fetch(`${baseUrl}/${endpoint}`).then(data => data.json());
    return response as T;
}


