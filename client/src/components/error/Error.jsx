import errorStyles from "./Error.module.css";

const Error = () => {
    return(
        <div className={errorStyles.container}>
            <h1>Error occured</h1>
            <p>Could not find this page</p>
        </div>
    )
}

export default Error;