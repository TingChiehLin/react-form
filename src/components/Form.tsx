import React, {useState, FC, FormEvent} from 'react';

const Form: FC = () => {
    const [userName, setUserName] = useState("userName");

    const nameInputHandler = (event: FormEvent<HTMLInputElement>) => {
        setUserName(event.currentTarget.value);
    }

    const formSubmissionHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return (
        <form onSubmit={formSubmissionHandler}
              className={"px-20 py-32 bg-gray-100 shadow-md"}
        >
            <div className={"form-control mb-4 flex"}>
                <div className={"md:w-1/3"}>
                    <label className={"mr-4 block"} htmlFor={"name"}>Name:</label>
                </div>
                <div className={"md:w-2/3"}>
                    <input className={" appearance-none leading-tight border-2 focus:outline-none focus:bg-white focus:border-purple-500"}
                           type={"text"} id={'name'} onChange={nameInputHandler}/>
                </div>
            </div>
            <div className={"form-control mb-12 flex"}>
                <div className={"md:w-1/3"}>
                    <label className={"mr-4 block"} htmlFor={"age"}>Age:</label>
                </div>
                <div className={"md:w-2/3"}>
                    <input className={"appearance-none leading-tight border-2 focus:outline-none focus:bg-white focus:border-purple-500"}
                           type={"age"}
                           id={'age'}
                    />
                </div>
            </div>
            <div className={"flex justify-center items-center"}>
                <button className={"mx-auto rounded px-10 py-2 bg-blue-300"}>
                    Submit
                </button>
            </div>
        </form>
    )
}


export default Form;
