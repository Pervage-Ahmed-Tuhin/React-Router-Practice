
import { Link, Outlet, useNavigate } from "react-router-dom";
const User = ({ user }) => {
    const { id, name, email, phone, website } = user;

    const navigate = useNavigate();


    const handleSemore = () => {
        navigate(`${id}`);
    }
    return (
        <div className="">
            <div className="p-5  shadow-lg card w-96 bg-gray-700 text-white">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>
                        <span>Email:{email}</span> <span>Phone:{phone}</span>
                    </p>
                    <p>Website:{website}</p>

                    <Link to={`/users/${id}`}><button className="btn w-full">See More</button></Link>

                    <button onClick={handleSemore} className="btn">Alternative</button>
                </div>
            </div>
        </div>
    );
};

export default User;