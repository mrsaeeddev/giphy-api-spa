import { useEffect, useState } from "react";
import { Row, Col, Container } from 'react-bootstrap';
import Paginate from "../components/Paginate/Paginate";
import Search from "../components/Search/Search";
import Loader from "../components/Loader/Loader";
import { getGifsByTrending, getGifsBySearch } from "../service/services";
import Thumbnails from "../components/Thumbnails/Thumbnails";
import AlertBox from "../components/AlertBox/AlertBox";

function Main() {
    const [data, setData] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);
    const [currPage, setCurrPage] = useState(0);
    const [searchValue, setSearchValue] = useState("");
    let [offset, setOffset] = useState(0);
    const [currentState, setCurrentState] = useState("trending");

    useEffect(() => {
        if (currentState === "trending") {
            getTrendingData(offset);
        }
        else {
            getSearchData(offset, searchValue);
        }
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
        await getGifsByTrending(offset).then((data) => {
            setData(data.data)
            setLoading(false)
            data.pagination.count !== 0 && setTotalPages(Math.floor(data.pagination.total_count / data.pagination.count))
        });
    }

    const getSearchData = async (offset: any, searchValue: any) => {
        setLoading(true);
        setCurrentState("search");
        await getGifsBySearch(offset, searchValue).then((data) => {
            setData(data.data)
            setLoading(false)
            data.pagination.count !== 0 && setTotalPages(Math.floor(data.pagination.total_count / data.pagination.count))
        });
    }

    const onChangeSearch = (value: any, currentState: any) => {
        setCurrentState(currentState)
        setSearchValue(value)
    }

    return (
        <Container>
            <Row>
                <Col sm={8} className="p-3">A single page app that leverages data from the Giphy API</Col>
                <Col sm={4}>
                    <Search onClick={() => getSearchData(0, searchValue)} onChange={(e: any) => onChangeSearch(e.target.value, "search")} onKeyDown={(e: any) => { if (e.key === "Enter") { onChangeSearch(e.target.value, "search"); getSearchData(0, searchValue); } }} />
                </Col>
            </Row>
            {!loading && data.length === 0 && <AlertBox text="⚠️ Either your query has no relevant data or there's an unexpected error. Reload to refresh the page or try some other query." variant="danger" />}
            {totalPages !== 0 && !loading ? <Paginate
                totPages={totalPages}
                currentPage={currPage}
                pageClicked={(ele: any) => {
                    selectActivePage(ele);
                }}
            >
                <Thumbnails data={data} />
            </Paginate> : <Loader />}
        </Container>
    );
}

export default Main;