import { useNavigate } from "react-router-dom";

const NotFount = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col px-4 lg:px-0 items-center justify-center min-h-screen">
            <div>
                <p className="text-blue-500 text-5xl lg:text-7xl font-extralight mb-8">
                    PAGE NOT FOUND
                </p>
                <p className="text-white font-extralight mb-8">
                    We looked everywhere for this page. <br />
                    Are you sure the website URL is correct? <br />
                    Get in touch with the site owner.
                </p>
                <button
                    onClick={() => navigate("/")}
                    className="text-blue-500 py-2 px-3 rounded-full border border-blue-500">
                    Go Back Home
                </button>
            </div>
        </div>
    );
};

export default NotFount;
