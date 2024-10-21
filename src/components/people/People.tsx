import { useSelector } from "react-redux";
import { useFollowMutation, useGetUsersQuery } from "../../redux/api/user-api";
import { User } from "../../types";
import { RootState } from "../../redux";
import { BsPeople } from "react-icons/bs";

const People = () => {
    const { data } = useGetUsersQuery({});
    const [followUser] = useFollowMutation();
    const userState = useSelector((state: RootState) => state.auth.user);
    const handleFollow = (username: string) => followUser(username);
    const users = data?.map((e: User) => (
        <div
            className="flex flex-col items-center rounded-[30px] border-[3px] border-[#101012] py-10"
            key={e._id}>
            <img
                className="w-[90px] h-[90px] rounded-full"
                src={import.meta.env.VITE_APP_BASE_URL + e.photo}
                alt="img"
            />
            <p className="text-white text-2xl font-bold mt-6 mb-2">
                {e.fullName}
            </p>
            <p className="text-lg font-medium text-[#7878A3] pb-5">
                @{e.username}
            </p>
            {e.followers.some((item) => item._id === userState?._id) ? (
                <button
                    onClick={() => handleFollow("unfollow/" + e.username)}
                    className="hover:opacity-60 block text-sm text-neutral-700 font-semibold py-[10px] px-[20px] rounded-lg bg-[#7ebeff]">
                    Unfollow
                </button>
            ) : (
                <button
                    onClick={() => handleFollow("follow/" + e.username)}
                    className="hover:opacity-60 block text-sm text-white font-semibold py-[10px] px-[20px] rounded-lg bg-[#877EFF]">
                    Follow
                </button>
            )}
        </div>
    ));

    return (
        <div className="pl-[60px] pr-[105px] pt-[30px]">
            <h2 className="text-4xl text-white font-bold mb-[25px] flex items-center gap-x-[10px]">
                <BsPeople /> All Users
            </h2>
            <div className="grid grid-cols-3 gap-10">{users}</div>
        </div>
    );
};

export default People;
