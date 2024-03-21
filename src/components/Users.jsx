import { useLoaderData } from "react-router-dom";
import User from "./User";


const Users = () => {

    const user = useLoaderData();
    console.log(user);
    return (
        <div className="max-w-[1170px] mx-auto mt-[60px]">
            <h1>This is the Users Data Section : {user.length}</h1>

            <div className="grid grid-cols-3 gap-10">
                {
                    user.map((user, index) => <User key={index} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;