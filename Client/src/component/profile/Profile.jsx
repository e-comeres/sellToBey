import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Profile.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const [profile, setProfile] = useState({
    username: "",
    email: "",
  });
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  useEffect(() => {
    setProfile({
      username: user.username,
      email: user.email,
    });
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords({ ...passwords, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();

    if (
      passwords.newPassword &&
      passwords.newPassword !== passwords.confirmNewPassword
    ) {
      toast.error("New passwords do not match!");
      return;
    }

    const updateFields = {
      username: profile.username,
      email: profile.email,
    };

    if (passwords.currentPassword && passwords.newPassword) {
      updateFields.currentPassword = passwords.currentPassword;
      updateFields.newPassword = passwords.newPassword;
    }

    axios
      .put(`http://localhost:4000/api/auth/update/${user.id}`, updateFields)
      .then((response) => {
        const updatedUser = { ...user, ...response.data.user };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setUser(updatedUser);
        navigate("/");
        toast.success("Profile updated successfully!");
      })
      .catch((error) => {
        toast.error(
          error.response?.data?.message ||
            "There was an error updating the profile!"
        );
        console.error("There was an error updating the profile!", error);
      });
  };

  return (
    <div className="profile">
      <Navbar />
      <div id="updateprofile">
        <form onSubmit={submit}>
          <div className="profile-form">
            <h1>Edit Your Profile</h1>
            <div className="inputs">
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  value={profile.username}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                />
              </div>
              <div className="password-changes">
                <label>Password Changes</label>
                <div className="form-group">
                  <label>Current Password</label>
                  <input
                    type="password"
                    name="currentPassword"
                    placeholder="Current Password"
                    value={passwords.currentPassword}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="newPassword"
                    placeholder="New Password"
                    value={passwords.newPassword}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="confirmNewPassword"
                    placeholder="Confirm New Password"
                    value={passwords.confirmNewPassword}
                    onChange={handlePasswordChange}
                  />
                </div>
              </div>
              <div className="form-actions">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => navigate("/")}
                >
                  Cancel
                </button>
                <button type="submit" className="save-btn">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
