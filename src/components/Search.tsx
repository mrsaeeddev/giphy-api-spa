import { InputGroup, FormControl } from "react-bootstrap";

function Search() {
    return (
        <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">🔍</InputGroup.Text>
            <FormControl
                placeholder="Search GIPHY GIFs here"
                aria-label="Search GIPHY GIFs here"
                aria-describedby="basic-addon1"
            />
        </InputGroup>
    )
}

export default Search;