
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
      <div id="pf">
        <div className="container">
          <div className="profile-container">
            <div className="header">
              <div>Home / My Account</div>
              <div>
                Welcome!{" "}
                <a href="#" className="link">
                  {profile.firstName} {profile.lastName}
                </a>
              </div>
            </div>
            <div className="form-section">
              <h2>Edit Your Profile</h2>
              <form onSubmit={submit}>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    value={profile.firstName}
                    className="input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    value={profile.lastName}
                    className="input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={profile.email}
                    className="input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    value={profile.address}
                    className="input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="currentPassword">Current Password</label>
                  <input
                    type="password"
                    id="currentPassword"
                    name="currentPassword"
                    value={passwords.currentPassword}
                    onChange={change}
                    className="input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="newPassword">New Password</label>
                  <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    value={passwords.newPassword}
                    onChange={change}
                    className="input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmNewPassword">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    id="confirmNewPassword"
                    name="confirmNewPassword"
                    value={passwords.confirmNewPassword}
                    onChange={change}
                    className="input"
                  />
                </div>
                <div className="button-group">
                  <button
                    type="button"
                    onClick={() => alert("Edit canceled.")}
                    className="button"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="button save-button">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );

};

export default Profile;
