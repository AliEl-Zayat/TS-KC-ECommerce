import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Container } from "react-bootstrap";

const Error = () => {
    const error = useRouteError();
    let errorStatus;
    let errorStatusText;

    if (isRouteErrorResponse(error)) {
        errorStatus = error.status;
        errorStatusText = error.statusText;
    } else {
        errorStatus = 404;
        errorStatusText = "Not found";
    }

    return (
        <Container className='notFound'>
            <h1>{errorStatus}</h1>
            <p>{errorStatusText}</p>
            <Link
                to='/'
                replace
            >
                How about going back safely?
            </Link>
        </Container>
    );
};

export default Error;
