import { useLoaderData, Link, useParams } from "react-router-dom";


const Userdetails = () => {
    const user = useLoaderData();
    const { name, email, website, phone } = user;
    // it retrives the params value from the url that is using dynamically
    const params = useParams();
    const {userId}=params
    console.log(userId);
    return (
        <div className="flex justify-center items-center">
            <div>
                <h1 className="text-2xl">This is the user detail section</h1>
                <div className="card w-96 bg-gray-600 text-white">
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p><span>Email:{email}</span>
                            <span>Phone:{phone}</span></p>
                        <p>Website:{website}</p>
                        <div className="card-actions justify-end">
                            <Link to={-1}><button className="btn">Go Back</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Userdetails;