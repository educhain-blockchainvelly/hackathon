
const SocialPage = () => {
    return (

        <div className="min-h-screen p-10">
            <div className="min-h-screen flex flex-col justify-center items-center p-10">
                <header className="text-3xl font-bold text-purple-600 mb-10 w-full max-w-6xl">Social</header>

                <div className="grid grid-cols-2 gap-10 w-full max-w-6xl">
                    {/* 카드 1 */}
                    <div className="bg-gray-100 rounded-lg h-80 flex flex-col justify-center">
                        <form className="flex flex-col space-y-4 px-4">
                            <button className="bg-white text-purple-500 h-14 py-2 px-6 rounded-2xl shadow-md text-left">
                                MY PROFILE
                            </button>
                            <button className="bg-white text-purple-500 h-14 py-2 px-6 rounded-2xl shadow-md text-left">
                                GROUP
                            </button>
                            <button className="bg-white text-purple-500 h-14 py-2 px-6 rounded-2xl shadow-md text-left">
                                INVITE
                            </button>
                            <button className=" bg-purple-500 text-white py-2 px-6 rounded-full shadow-md">
                                Sign In
                            </button>
                        </form>
                    </div>

                    {/* 카드 2 */}
                    <div className="bg-gradient-to-b from-purple-200 to-blue-200 rounded-lg h-80"></div>

                    {/* 카드 3 */}
                    <div className="bg-gradient-to-b from-purple-200 to-blue-200 rounded-lg h-80"></div>

                    {/* 카드 4 */}
                    <div className="bg-gradient-to-b from-purple-200 to-blue-200 rounded-lg h-80"></div>
                </div>
            </div>
        </div>
    );
};

export default SocialPage;