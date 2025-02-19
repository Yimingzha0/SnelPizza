import {useSelector} from "react-redux";

export const Username = () => {
    const username = useSelector((state) => state.user.username);
    if (! username) return null;
    return (
        <div className="font-semibold text-sm hidden md:block">{username}</div>
    )
}