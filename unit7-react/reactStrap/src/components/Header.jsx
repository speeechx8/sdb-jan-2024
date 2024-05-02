import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input, Navbar, NavbarBrand, Form } from "reactstrap";

export default function Header() {
    const [search, setSearch] = useState("");
    const [searchOption, setSearchOption] = useState("pokemon");
    const navigate = useNavigate();
    
    async function searchPoke(event) {
        event.preventDefault();

        setSearch("");
        navigate(`/${searchOption}/${search.toLowerCase()}`)
    }

    return (
        <Navbar color="dark" dark={true} sticky="top">
            <Form className="d-flex" onSubmit={searchPoke}>
                <NavbarBrand href="/" tag={Link}>PokéAPI</NavbarBrand>
                <Input type="select" value={searchOption} onChange={(event) => setSearchOption(event.target.value)}>
                    <option value="pokemon">Pokémon</option>
                    <option value="type">Type</option>
                </Input>
                <Input placeholder="Search Pokémon..." value={search} className="mx-3" onChange={(event) => setSearch(event.target.value)}></Input>
                <Button>Search</Button>
            </Form>
        </Navbar>
    );
}