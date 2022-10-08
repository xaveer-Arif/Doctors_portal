import React from "react";
import { useQuery } from "react-query";
import Loading from "../../../Shared/Loading";
import SingleUser from "./SingleUser/SingleUser";

const AllUsers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/users", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Make Admin</th>
              <th>Remove User</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <SingleUser
                index={index}
                user={user}
                key={user._id}
                refetch={refetch}
              ></SingleUser>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
