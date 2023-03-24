/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable operator-linebreak */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

function Profile() {
  const user = useSelector((state) => state.user.data.data);
  const [setModal, setShowModal] = useState(false);
  console.log(user);
  return (
    <>
      <Navbar />
      {setModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w- my-6 mx-auto ">
              {/* content */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* header */}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Change Image</h3>
                  <button
                    type="button"
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/* body */}
                <div className="relative p-6 flex-auto">
                  <input type="file" name="image" id="" />
                </div>
                {/* footer */}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
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
      <main className="bg-[url('/src/assets/img/coffeebreak.jpeg')] flex h-full md:h-screen w-screen bg-center bg-no-repeat bg-cover pb-10">
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
                      <div
                        onClick={() => setShowModal(!setModal)}
                        className="relative w-20 h-20 rounded-full justify-center mx-auto cursor-pointer"
                      >
                        <div className="bg-brown h-5 w-5 flex rounded-full absolute right-0">
                          <img
                            className="h-2 justify-center m-auto"
                            src={require("../../assets/img/pena.png")}
                            alt=""
                          />
                        </div>
                        <img
                          className="h-20 w-20 rounded-full object-cover object-center mx-auto"
                          src={
                            user.image
                              ? process.env.REACT_APP_URL_CLOUDINARY +
                                user.image
                              : `${process.env.REACT_APP_URL_CLOUDINARY}Coffee%20Shop/Basic_Ui__186_rcq7oe.jpg`
                          }
                          alt=""
                        />
                      </div>
                      <h1 className="font-['Poppins'] font-semibold text-black text-xl justify-center mx-auto">
                        {user.display_name ? user.display_name : "New User"}
                      </h1>
                      <h6 className="font-['Rubik'] text-xs justify-center mx-auto">
                        {user.email}
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
                        name=""
                        placeholder={user.email}
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
                        placeholder={user.phone}
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
                        name=""
                        placeholder={
                          user.address
                            ? user.address
                            : "Please input your address"
                        }
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
                        id="displayName"
                        placeholder={
                          user.display_name ? user.display_name : "New User"
                        }
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
                        placeholder={
                          user.dateofbirth ? user.dateofbirth : Date.now()
                        }
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
                        placeholder={
                          user.first_name
                            ? user.first_name
                            : "input your first name"
                        }
                      />
                    </div>
                  </div>
                  <div className="flex">
                    <div>
                      <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                        <input
                          className="relative float-left mt-0.5 mr-1 -ml-[1.5rem] h-5 w-5 appearance-none rounded-full border-2 border-solid border-[rgba(0,0,0,0.25)] bg-white before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:bg-white after:content-[''] checked:border-blue-500 checked:bg-white checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-blue-500 checked:after:bg-blueborder-blue-500 checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-blue-500 checked:focus:bg-white checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                          type="radio"
                          name="flexRadioDefault"
                          id="radioDefault01"
                        />
                        <label
                          className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                          htmlFor="radioDefault01"
                        >
                          Male
                        </label>
                      </div>
                      <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                        <input
                          className="relative float-left mt-0.5 mr-1 -ml-[1.5rem] h-5 w-5 appearance-none rounded-full border-2 border-solid border-[rgba(0,0,0,0.25)] bg-white before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:bg-white after:content-[''] checked:border-blue-500 checked:bg-white checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-blue-500 checked:after:bg-blueborder-blue-500 checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-blue-500 checked:focus:bg-white checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                          type="radio"
                          name="flexRadioDefault"
                          id="radioDefault02"
                          checked
                        />
                        <label
                          className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                          htmlFor="radioDefault02"
                        >
                          Female
                        </label>
                      </div>
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
                        placeholder={
                          user.last_name
                            ? user.last_name
                            : "input your last name"
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[30%] h-full flex flex-col gap-3">
              <h1 className="font-['Rubik'] text-center font-semibold text-2xl text-primary">
                Do you want to save the change?
              </h1>
              <button type="button" className="btn bg-brown text-white">
                Save change
              </button>
              <button type="button" className="btn bg-yellow text-brown">
                Cancel
              </button>
              <div className="btn flex justify-between bg-white">
                <h1 className="my-auto font-semibold font-['Rubik'] text-brown px-6">
                  Edit Password
                </h1>
                <h2 className="my-auto font-semibold font-['Rubik'] text-brown px-6">
                  {" >"}
                </h2>
              </div>
              <div className="btn flex justify-between bg-white">
                <h1 className="my-auto font-semibold font-['Rubik'] text-brown px-6">
                  Logout
                </h1>
                <h2 className="my-auto font-semibold font-['Rubik'] text-brown px-6">
                  {" >"}
                </h2>
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
