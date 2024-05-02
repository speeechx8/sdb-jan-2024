import { useLoaderData } from "react-router-dom";
import { Card, CardHeader, CardImg, CardText, CardTitle } from "reactstrap";

export async function typeLoader({ params }) {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${params.type}`);
    
    if(response.status === 200) {
        const body = await response.json();
        return {
            message: body
        };
    }
    else {
        const body = await response.text();
        return {
            error: true,
            message: body
        };
    }
}

export default function Type() {
    const {message, error} = useLoaderData();
    if(error) {
        return <div>{message}</div>
    }
    console.log(message)

    return (
        <Card className="m-4">
            <CardHeader>{message.name}</CardHeader>
        </Card>
    );
}