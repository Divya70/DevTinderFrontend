import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  console.log("user", user);

  // const { _id, firstName, lastName, age, gender, photoUrl, about } = user;
  const dispatch = useDispatch();

  const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true },
      );
      dispatch(removeFeed(userId));
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  if (!user) return;
  if (user.length === 0) return <h1>No New User Found</h1>;
  // if (!user) return null;
  // if (Array.isArray(user) && user.length === 0)
  //   return <h1>No New User Found</h1>;

  const { _id, firstName, lastName, age, gender, photoUrl, about } = user;

  return (
    <div className="card bg-base-300 w-96 shadow-sm ">
      <figure className="h-1/2">
        <img src={photoUrl} alt="phpoto" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + ", " + gender}</p>}
        <p>{about}</p>
        <div className="card-actions justify-center my-4">
          <button
            className="btn btn-primary"
            onClick={() => handleSendRequest("ignored", _id)}
          >
            Ignore
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleSendRequest("interested", _id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
