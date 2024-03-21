import { useRouteError, Link } from "react-router-dom";


const Errorpage = () => {
    const errorhandle = useRouteError();

    return (
        <div>
            <h1 className="text-center mt-[100px] text-7xl">Oops!!!! Somethings wrong!!</h1>
            <p className="text-center mt-5 text-7xl">{errorhandle.statusText}</p>
            <p className="text-center mt-5 text-7xl">{errorhandle.statusText}</p>
            {
                errorhandle.status === 404 && <div>
                    <h3 className="text-center mt-[100px] text-7xl">Page Not found Check the Url</h3>
                    <div className="flex justify-center items-center mt-5">

                        <Link to={'/'}><button className="btn bg-black text-white">Go back</button></Link>
                    </div>

                </div>
            }
        </div>
    );
};

export default Errorpage;