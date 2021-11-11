import { off } from "process";
import { useEffect, useState } from "react";
import Paginate from "../components/Paginate";
import Search from "../components/Search";
import { getTrendingGifs } from "../service/services";

function Main() {
    const [data, setData] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currPage, setCurrPage] = useState(0);
    let [offset, setOffset] = useState(0);

    useEffect(() => {
        getTrendingData(offset);
    }, [offset]);

    useEffect(() => {
        selectActivePage(1);
    }, []);

    const selectActivePage = async (page_number: any) => {
        setCurrPage(page_number);
        let newOffset = 50 * (page_number - 1)
        setOffset(newOffset)
    }

    const getTrendingData = async (offset: any) => {
        await getTrendingGifs(offset).then((data) => {
            setData(data.data)
            data.pagination.count !== 0 && setTotalPages(Math.floor(data.pagination.total_count / data.pagination.count))
        });
    }

    return (
        <>
            <Search />
            {totalPages !== 0 ? <Paginate
                totPages={totalPages}
                currentPage={currPage}
                pageClicked={(ele: any) => {
                    selectActivePage(ele);
                }}
            >
                <ul>
                    {data.map((ele: any, ind) => {
                        return <li key={ele + ind}>{ele.id}</li>;
                    })}
                </ul>
            </Paginate>
                : <>Loading</>}
        </>
    );
}

export default Main;