import { InputGroup, FormControl } from "react-bootstrap";

function Search(props: any) {
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