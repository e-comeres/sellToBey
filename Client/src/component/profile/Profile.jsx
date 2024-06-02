import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Profile.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
const Profile = () => {
  const { user, setUser } = useAuth();
  const [profile, setProfile] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setPasswords({ ...passwords, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    const updateFields = {};
    if (profile.username) updateFields.username = profile.username;
    if (profile.email) updateFields.email = profile.email;
    if (profile.password) updateFields.password = profile.password;
    axios
      .put(`http://localhost:4000/api/auth/update/${user.id}`, updateFields)
      .then((response) => {
        localStorage.setItem("user", JSON.stringify({ ...user, ...data }));
        setUser((oldUser) => ({ ...oldUser, ...data }));
        console.log(response.data);
        toast.success(response.data.message);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        console.error("There was an error updating the profile!", error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="profile-container">
        <form onSubmit={submit}>
          <div className="profile-form">
            <h1>Profile</h1>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={profile.username}
              onChange={(e) =>
                setProfile({ ...profile, username: e.target.value })
              }
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={(e) =>
                setProfile({ ...profile, email: e.target.value })
              }
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={profile.password}
              onChange={(e) =>
                setProfile({ ...profile, password: e.target.value })
              }
            />

            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
