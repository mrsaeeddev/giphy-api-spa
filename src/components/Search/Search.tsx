import { InputGroup, FormControl } from "react-bootstrap";
import { SearchProps } from "./Search.interface";

function Search(props: SearchProps) {
    return (
        <InputGroup className="mb-3">
            <InputGroup.Text id="search-bar" role="button" onClick={props.onClick}>🔍</InputGroup.Text>
            <FormControl
                placeholder="Search GIPHY GIFs here"
                aria-label="Search GIPHY GIFs here"
                onKeyDown={props.onKeyDown}
                aria-describedby="search-bar"
                onChange={props.onChange}
            />
        </InputGroup>
    )
}

export default Search;