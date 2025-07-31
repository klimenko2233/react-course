import {useSearchParams} from "react-router-dom";

export const PaginationComponent = () => {
    const [searchParams,setSearchParams] = useSearchParams('1');
    const currentPage = Number(searchParams.get('page') ||'1');
    return (
        <div>
            <button onClick={() => {
                if( currentPage > 1) {
                    setSearchParams({page: (currentPage - 1).toString()})
                }
            }}
            className='border mr-1'>Prev</button>
            <button onClick={() => {
                setSearchParams({page:(currentPage + 1).toString()})

            }} className='border'>Next</button>
        </div>
    );
};