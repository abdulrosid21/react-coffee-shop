/* eslint-disable import/named */
/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable operator-linebreak */
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import moment from "moment/moment";

import "react-toastify/dist/ReactToastify.css";

import { Link, useNavigate } from "react-router-dom";
import {
  updateImage,
  getDataUser,
  updateProfile,
} from "../../utils/redux/action/userId";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import axios from "../../utils/axios";

function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [dataUser, setDataUser] = useState({
    email: user.data.email,
    phone: user.data.phone,
    first_name: user.data.first_name,
    last_name: user.data.last_name,
    display_name: user.data.display_name,
    dateofbirth: user.data.dateofbirth,
    gender: user.data.gender,
    address: user.data.address,
  });
  const windowRef = useRef();
  const [newImage, setNewImage] = useState({});
  const [imagePreview, setImagePreview] = useState("");
  const imageLength = Object.keys(newImage).length;
  const [showButton, setShowButton] = useState(false);
  const [setModal, setShowModal] = useState(false);

  window.addEventListener("click", (e) => {
    if (e.target === windowRef.current) {
      setShowButton(!showButton);
    }
  });
  const handleInputForm = (e) => {
    setDataUser({ ...dataUser, [e.target.name]: e.target.value });
  };
  const editData = async () => {
    try {
      const result = await dispatch(updateProfile(dataUser));
      toast.success(result.value.data.msg, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      dispatch(getDataUser());
    } catch (error) {
      toast.error("Cannot update your data", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const handleInputImage = (e) => {
    const { name, files } = e.target;
    if (files[0].size > 100000) {
      setShowModal(false);
      toast.error("Please Insert Max Size 100Kb", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    setNewImage({ [name]: files[0] });
    setImagePreview(URL.createObjectURL(files[0]));
  };
  const handleUpdateImages = () => {
    const imageData = new FormData();
    imageData.append("images", newImage.images);
    dispatch(updateImage(imageData)).then(() => {
      setShowModal(false);
      dispatch(getDataUser());
      toast.success("Success update image", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
  };

  const logout = async () => {
    try {
      await axios.post("users/logout");
      localStorage.clear();
      toast.info("Success logout from your account", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      toast.error("Can't logout from your account", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <>
      <ToastContainer />
      {setModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w- my-6 mx-auto ">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">
                  <input
                    type="file"
                    name="images"
                    id="images"
                    onChange={handleInputImage}
                  />
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    <div className="h-24 w-full flex">
                      <img
                        className="h-20 w-20 rounded-full object-cover object-center my-auto"
                        src={
                          imageLength > 0
                            ? imagePreview
                            : `${process.env.REACT_APP_URL_CLOUDINARY}Coffee%20Shop/Basic_Ui__186_rcq7oe.jpg`
                        }
                        alt=""
                      />
                    </div>
                    <div className="h-24 w-full flex">
                      <h1 className="my-auto font-['Rubik'] text-brown">
                        Image Preview
                      </h1>
                    </div>
                  </div>
                </div>
                {/* footer */}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setNewImage({});
                      setShowModal(false);
                    }}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleUpdateImages}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
      ) : null}

      <Navbar />
      <main
        ref={windowRef}
        className="bg-[url('/src/assets/img/coffeebreak.jpeg')] flex h-full md:h-screen w-screen bg-center bg-no-repeat bg-cover pb-10"
      >
        <div className="h-[80%] w-[80%] justify-center m-auto flex flex-col gap-3">
          <div className="md:h-32 w-full">
            <h1 className="font-['Rubik'] text-primary text-3xl">
              User Profile
            </h1>
          </div>
          <div className="h-full w-full flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-[30%] h-full bg-brown rounded-xl">
              <div className="w-full h-[95%] bg-primary rounded-t-xl flex flex-col p-3">
                <div className="flex flex-col h-full justify-around">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-3">
                      <div className="relative w-20 h-20 rounded-full justify-center mx-auto cursor-pointer">
                        <div
                          onClick={() => {
                            setShowModal(!setModal);
                          }}
                          className="bg-brown h-5 w-5 flex rounded-full absolute right-0"
                        >
                          <img
                            className="h-2 justify-center m-auto"
                            src={require("../../assets/img/pena.png")}
                            alt=""
                          />
                        </div>
                        <img
                          className="h-20 w-20 rounded-full object-cover object-center mx-auto"
                          src={
                            user.data.image
                              ? process.env.REACT_APP_URL_CLOUDINARY +
                                user.data.image
                              : `${process.env.REACT_APP_URL_CLOUDINARY}Coffee%20Shop/Basic_Ui__186_rcq7oe.jpg`
                          }
                          alt=""
                        />
                      </div>
                      <h1 className="font-['Poppins'] font-semibold text-black text-xl justify-center mx-auto">
                        {dataUser.display_name
                          ? dataUser.display_name
                          : "New User"}
                      </h1>
                      <h6 className="font-['Rubik'] text-xs justify-center mx-auto">
                        {dataUser.email}
                      </h6>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-center font-['Poppins'] text-neutral-400">
                      Has been ordered 15 times
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[70%] h-full bg-brown rounded-xl">
              <div className="w-full h-[95%] bg-primary rounded-t-xl flex flex-col pt-2">
                <div className="h-24 w-full flex justify-between px-7">
                  <h1 className="font-['Rubik'] font-semibold text-brown text-xl">
                    Contact
                  </h1>
                  <div className="bg-brown h-7 w-7 flex rounded-full">
                    <img
                      className="h-4 justify-center m-auto"
                      src={require("../../assets/img/pena.png")}
                      alt=""
                    />
                  </div>
                </div>
                <div className="h-full w-full grid md:grid-cols-2 gap-3 px-7">
                  <div>
                    <h1 className="font-['Rubik'] text-sm text-neutral-500 font-semibold">
                      Email adress :
                    </h1>
                    <div className="border-transparent border-2 border-b-neutral-600">
                      <input
                        className="w-full border-transparent focus:ring-0 focus:border-transparent"
                        type="email"
                        name="email"
                        value={dataUser.email}
                        onChange={handleInputForm}
                        disabled
                      />
                    </div>
                  </div>
                  <div>
                    <h1 className="font-['Rubik'] text-sm text-neutral-500 font-semibold">
                      Phone number :
                    </h1>
                    <div className="flex border-transparent border-2 border-b-neutral-600">
                      <h2 className="my-auto font-['Poppins'] justify-end">
                        (+62)
                      </h2>
                      <input
                        className="w-full border-transparent focus:ring-0 focus:border-transparent"
                        type="text"
                        name="phone"
                        value={dataUser.phone}
                        onChange={handleInputForm}
                      />
                    </div>
                  </div>
                </div>
                <div className="h-full w-full grid grid-cols-2 gap-3 px-7">
                  <div>
                    <h1 className="font-['Rubik'] text-sm text-neutral-500 font-semibold">
                      Delivered adress :
                    </h1>
                    <div className="border-transparent border-2 border-b-neutral-600">
                      <input
                        className="w-full border-transparent focus:ring-0 focus:border-transparent"
                        type="text"
                        name="address"
                        value={dataUser.address ? dataUser.address : ""}
                        onChange={handleInputForm}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full w-full flex flex-col md:flex-row gap-5">
            <div className="w-full md:w-[70%] h-full bg-brown rounded-xl">
              <div className="w-full h-[95%] bg-primary rounded-t-xl flex flex-col gap-3 p-3">
                <div className="w-full flex justify-between px-7">
                  <h1 className="font-['Rubik'] font-semibold text-brown text-xl">
                    Details
                  </h1>
                  <div className="bg-brown h-7 w-7 flex rounded-full">
                    <img
                      className="h-4 justify-center m-auto"
                      src={require("../../assets/img/pena.png")}
                      alt=""
                    />
                  </div>
                </div>
                <div className="h-full w-full grid md:grid-cols-2 gap-4 px-7">
                  <div>
                    <h1 className="font-['Rubik'] text-sm text-neutral-500 font-semibold">
                      Display name :
                    </h1>
                    <div className="border-transparent border-2 border-b-neutral-600">
                      <input
                        className="w-full h-6 bg-transparent border-transparent focus:ring-0 focus:border-transparent"
                        type="text"
                        name="display_name"
                        value={
                          dataUser.display_name ? dataUser.display_name : ""
                        }
                        onChange={handleInputForm}
                      />
                    </div>
                  </div>
                  <div>
                    <h1 className="font-['Rubik'] text-sm text-neutral-500 font-semibold">
                      DD/MM/YYYY :
                    </h1>
                    <div className="border-transparent border-2 border-b-neutral-600">
                      <input
                        className="w-full h-6 bg-transparent border-transparent focus:ring-0 focus:border-transparent"
                        type="date"
                        name="dateofbirth"
                        value={
                          dataUser.dateofbirth
                            ? moment(dataUser.dateofbirth).format("YYYY-MM-DD")
                            : "yyyy-MM-dd"
                        }
                        onChange={handleInputForm}
                      />
                    </div>
                  </div>
                  <div>
                    <h1 className="font-['Rubik'] text-sm text-neutral-500 font-semibold">
                      First name :
                    </h1>
                    <div className="border-transparent border-2 border-b-neutral-600">
                      <input
                        className="w-full h-6 bg-transparent border-transparent focus:ring-0 focus:border-transparent"
                        type="text"
                        name="first_name"
                        value={dataUser.first_name ? dataUser.first_name : ""}
                        onChange={handleInputForm}
                      />
                    </div>
                  </div>
                  <div>
                    <h1 className="font-['Rubik'] text-sm text-neutral-500 font-semibold">
                      Gender :
                    </h1>
                    <div className="border-transparent border-2 border-b-neutral-600">
                      <input
                        className="w-full h-6 bg-transparent border-transparent focus:ring-0 focus:border-transparent"
                        type="text"
                        name="gender"
                        value={dataUser.gender ? dataUser.gender : ""}
                        onChange={handleInputForm}
                      />
                    </div>
                  </div>
                  <div>
                    <h1 className="font-['Rubik'] text-sm text-neutral-500 font-semibold">
                      Last name:
                    </h1>
                    <div className="border-transparent border-2 border-b-neutral-600">
                      <input
                        className="w-full h-6 bg-transparent border-transparent focus:ring-0 focus:border-transparent"
                        type="text"
                        name="last_name"
                        value={dataUser.last_name ? dataUser.last_name : ""}
                        onChange={handleInputForm}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[30%] h-full flex flex-col gap-3">
              <div className="grid gap-2">
                <h1 className="font-['Rubik'] text-center font-semibold text-2xl text-primary">
                  Do you want to save the change?
                </h1>
                <button
                  onClick={editData}
                  type="button"
                  className="btn bg-brown text-white"
                >
                  Save change
                </button>
                <button
                  onClick={() => setShowButton(false)}
                  type="button"
                  className="btn bg-yellow text-brown"
                >
                  Cancel
                </button>
              </div>
              <Link to="/edit-password">
                <div className="btn w-full bg-white">
                  <h1 className="my-auto w-full font-semibold font-['Rubik'] text-brownpx-6">
                    Edit Password
                  </h1>
                </div>
              </Link>
              <div type="button" onClick={logout} className="btn bg-white">
                <h1 className="my-auto font-semibold font-['Rubik'] text-brown px-6">
                  Logout
                </h1>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Profile;
