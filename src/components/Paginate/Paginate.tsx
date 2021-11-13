import { useState, useEffect } from "react";
import { Pagination } from "react-bootstrap";
import { PaginateProps } from "./Paginate.interface";

function Paginate(props: PaginateProps) {
    const [pageArray, setPageArray] = useState([]);

    useEffect(() => {
        let totPages = Number(props.totPages);
        let currentPage = Number(props.currentPage);
        let pageArr = [] as any;
        if (totPages > 1) {
            if (totPages <= 9) {
                let i = 1;
                while (i <= totPages) {
                    pageArr.push(i);
                    i++;
                }
            } else {
                if (currentPage <= 5) pageArr = [1, 2, 3, 4, 5, 6, 7, 8, "", totPages];
                else if (totPages - currentPage <= 4)
                    pageArr = [
                        1,
                        "",
                        totPages - 7,
                        totPages - 6,
                        totPages - 5,
                        totPages - 4,
                        totPages - 3,
                        totPages - 2,
                        totPages - 1,
                        totPages
                    ];
                else {
                    console.log('true')
                    pageArr = [
                        1,
                        "",
                        currentPage - 3,
                        currentPage - 2,
                        currentPage - 1,
                        currentPage,
                        currentPage + 1,
                        currentPage + 2,
                        currentPage + 3,
                        "",
                        totPages
                    ];
                }
            }
        }
        setPageArray(pageArr);
    }, [props.currentPage, props.totPages]);

    return (
        <>
            {props.children}
            <div className="m-5">
                <Pagination className="justify-content-center">
                    {pageArray.map((ele, ind) => {
                        const toReturn = [];
                        if (ind === 0) {
                            toReturn.push(
                                <Pagination.First
                                    key={"firstpage"}
                                    onClick={
                                        props.currentPage === 1
                                            ? () => { }
                                            : () => {
                                                props.pageClicked(1);
                                            }
                                    }
                                />
                            );

                            toReturn.push(
                                <Pagination.Prev
                                    key={"prevpage"}
                                    onClick={
                                        props.currentPage === 1
                                            ? () => { }
                                            : () => {
                                                props.pageClicked(props.currentPage - 1);
                                            }
                                    }
                                />
                            );
                        }

                        if (ele === "") toReturn.push(<Pagination.Ellipsis key={ind} />);
                        else
                            toReturn.push(
                                <Pagination.Item
                                    key={ind}
                                    active={props.currentPage === ele ? true : false}
                                    onClick={
                                        props.currentPage === ele
                                            ? () => { }
                                            : () => {
                                                props.pageClicked(ele);
                                            }
                                    }
                                >
                                    {ele}
                                </Pagination.Item>
                            );

                        if (ind === pageArray.length - 1) {
                            toReturn.push(
                                <Pagination.Next
                                    key={"nextpage"}
                                    onClick={
                                        props.currentPage === ele
                                            ? () => { }
                                            : () => {
                                                props.pageClicked(props.currentPage + 1);
                                            }
                                    }
                                />
                            );

                            toReturn.push(
                                <Pagination.Last
                                    key={"lastpage"}
                                    onClick={
                                        props.currentPage === ele
                                            ? () => { }
                                            : () => {
                                                props.pageClicked(ele);
                                            }
                                    }
                                />
                            );
                        }
                        return toReturn;
                    })}
                </Pagination>
            </div>
        </>
    );
}

export default Paginate;