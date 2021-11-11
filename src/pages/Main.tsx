import { useEffect, useState } from "react";
import { Row, Col, Image, Container } from 'react-bootstrap';
import Paginate from "../components/Paginate";
import Search from "../components/Search";
import Loader from "../components/Loader";
import { getTrendingGifs } from "../service/services";
import Thumbnails from "../components/Thumbnails";

function Main() {
    const [data, setData] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);
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
        setLoading(true);
    }

    const getTrendingData = async (offset: any) => {
        await getTrendingGifs(offset).then((data) => {
            setData(data.data)
            setLoading(false)
            data.pagination.count !== 0 && setTotalPages(Math.floor(data.pagination.total_count / data.pagination.count))
        });
    }

    return (
        <Container>
            <Search />
            {totalPages !== 0 && !loading ? <Paginate
                totPages={totalPages}
                currentPage={currPage}
                pageClicked={(ele: any) => {
                    selectActivePage(ele);
                }}
            >
                <Thumbnails data={data} />
            </Paginate>
                : <Loader />}
        </Container>
    );
}

export default Main;