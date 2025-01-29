import axios from "axios";

export const getUserInfo = async () => {
  const token = localStorage.getItem("vibez_token");
  console.log("HELLO");
  if (!token) {
    throw new Error("User is not authenticated.");
  }

  const response = await fetch("http://localhost:7000/api/user/profile", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status} - ${response.statusText}`);
  }

  const data = await response.json();
  console.log(data);

  return data;
};
