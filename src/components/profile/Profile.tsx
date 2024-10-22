import { FaPlus, FaRegEdit } from "react-icons/fa";
import { useProfileQuery } from "../../redux/api/user-api";
import { TbPhoto } from "react-icons/tb";
import { BiSolidVideos } from "react-icons/bi";
import { HiOutlineTag } from "react-icons/hi";
import { FiCamera } from "react-icons/fi";

const Profile = () => {
    const { data } = useProfileQuery({});

    return (
        <div className="pt-[50px] pl-12">
            <div>
                <div>
                    <div className="flex items-start gap-x-8 ">
                        <img
                            className="w-[150px] h-[150px] rounded-full"
                            src={
                                import.meta.env.VITE_APP_BASE_URL + data?.photo
                            }
                            alt=""
                        />
                        <div>
                            <div className="flex items-center gap-x-10 ">
                                <p className="text-4xl font-semibold text-white mb-1">
                                    {data?.fullName}
                                </p>
                                <button className="flex items-center gap-x-[7px] text-white rounded-lg bg-[#101012] py-[10px] px-5">
                                    <FaRegEdit className="text-[#FFB620]" />
                                    Edit Profile
                                </button>
                            </div>
                            <p className="text-lg text-[#7878A3] mb-5">
                                @{data?.username}
                            </p>
                            <div className="flex items-center gap-x-10 mb-6">
                                <div>
                                    <p className="text-[#877EFF] font-medium text-xl">
                                        {data?.posts?.length}
                                    </p>
                                    <p className="text-lg text-white font-medium">
                                        Posts
                                    </p>
                                </div>
                                <div>
                                    <p className="text-[#877EFF] font-medium text-xl">
                                        {data?.followers?.length}
                                    </p>
                                    <p className="text-lg text-white font-medium">
                                        Followers
                                    </p>
                                </div>{" "}
                                <div>
                                    <p className="text-[#877EFF] font-medium text-xl">
                                        {data?.following?.length}
                                    </p>
                                    <p className="text-lg text-white font-medium">
                                        Following
                                    </p>
                                </div>
                            </div>
                            <p className="text-[#EFEFEF] mb-10">
                                🌿 Capturing the essence of nature through my
                                lens <br /> ✨ "In every walk with nature, one
                                receives far more than he seeks." - John Muir
                            </p>
                            <div className="w-[72px] h-[72px] rounded-full mb-[69px] border-[3px] flex items-center justify-center border-[#7777A2]">
                                <FaPlus className="text-white text-xl" />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center mb-10">
                        <div className="flex items-center gap-x-[10px] py-3 px-[50px] rounded-tl-lg rounded-bl-lg bg-[#101012]">
                            <TbPhoto className="text-[#877EFF]" />
                            <p className="text-[#EFEFEF]">Posts</p>
                        </div>
                        <div className="flex items-center gap-x-[10px] border-l py-3 px-[50px] bg-[#101012]">
                            <BiSolidVideos className="text-[#877EFF]" />
                            <p className="text-[#EFEFEF]">Posts</p>
                        </div>
                        <div className="flex items-center gap-x-[10px] border-l py-3 px-[50px] rounded-tr-lg rounded-br-lg bg-[#101012]">
                            <HiOutlineTag className="text-[#877EFF]" />
                            <p className="text-[#EFEFEF]">Posts</p>
                        </div>
                    </div>
                    <div>
                        {data?.posts?.length === 0 && (
                            <div className="flex flex-col items-center">
                                <div className="border border-white rounded-full flex items-center justify-center p-3">
                                    <FiCamera className="text-white text-3xl" />
                                </div>
                                <p className="text-white mt-3 text-3xl">
                                    No posts yet
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
