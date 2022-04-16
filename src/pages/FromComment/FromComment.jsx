import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/Common/NavBar/NavBar.jsx";
import Cookies from "js-cookie";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addProjectsData } from "../../redux/actions/ProjectsActions";

const FromComment = () => {
  const [fromData, setFromData] = useState({});
  const navigate = useNavigate();

  const projectsData = useSelector((state) => state.service.projectsData);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const newObj = {};
    newObj[e.target.name] = e.target.value;
    setFromData({ ...fromData, ...newObj });
  }

  const handleSubmit = async () => {
    console.log(fromData);
    try {
      const response = await axios.post("https://ancient-gorge-88070.herokuapp.com/auth/signup", { ...fromData, postalCode: projectsData.postalCode });
      if (response) {
        Cookies.set("refreshToken", response?.data?.data?.refreshToken);
        Cookies.set("accessToken", response?.data?.data?.accessToken);
        Cookies.set("userId", response?.data?.data?.user?.userId);
        const res = await axios.post('https://ancient-gorge-88070.herokuapp.com/api/publishProject', { ...projectsData, contactEmail: fromData?.email, userId: response?.data?.data?.user?.userId });
        if (res?.data) {
          dispatch(addProjectsData({}));
          navigate('/');
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <NavBar />
      <div className="container">

        <div className="row">
          <div className="col col-md-6 col-lg-6">
            <h3 className="my-3">Enregistrer un nouveau compte</h3>
            <p>
              Vos coordonnées seront visibles uniquement par les artisans que
              vous aurez choisis.
            </p>
            <form >
              <div className="mb-3">
                <label htmlFor="">
                  E-mail<span className="text-danger">*</span>
                </label>
                <br />
                <input
                  className="form-control px-2 py-3 border border-3"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  id=""
                />
              </div>
              <div className="mb-3">
                <label htmlFor="">
                  Password<span className="text-danger">*</span>
                </label>
                <br />
                <input
                  className="form-control px-2 py-3 border border-3"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  id=""
                />
              </div>
              <div className="mb-3">
                <label htmlFor="">
                  Prénom<span className="text-danger">*</span>
                </label>
                <br />
                <input
                  className="form-control px-2 py-3 border border-3"
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  id=""
                />
              </div>
              <div className="mb-3">
                <label htmlFor="">
                  Nom<span className="text-danger">*</span>
                </label>
                <br />
                <input
                  className="form-control px-2 py-3 border border-3"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  id=""
                />
              </div>
              <div className="mb-3">
                <label htmlFor="">
                  Téléphone<span className="text-danger">*</span>
                </label>
                <br />
                <div className="input-group mb-3 ">
                  <button
                    className="btn btn-outline-secondary px-2 py-3 border border-3"
                    type="button"
                    id="button-addon1"
                  >
                    +33
                  </button>
                  <input
                    type="number"
                    name="phoneNumber"
                    className="form-control px-2 py-3 border border-3"
                    placeholder=""
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="d-flex">
                <input className="mt-2 me-3" type="checkbox" name="" id="" />
                <p>
                  Travaux.com peut être amené à m'envoyer des informations au
                  sujet de mon projet via{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="502 279 86.066 20"
                    className="w-25 h-50"
                  >
                    <defs>
                      <clipPath id="a">
                        <path d="M502 279h86.066v20H502z"></path>
                      </clipPath>
                    </defs>
                    <g clip-path="url(#a)">
                      <path
                        fill="#455A64"
                        d="M511.994 279c-5.463 0-9.909 4.446-9.911 9.91 0 1.747.456 3.451 1.323 4.954L502 299l5.254-1.378c1.447.789 3.077 1.205 4.736 1.206h.004c5.462 0 9.908-4.446 9.91-9.91.001-2.648-1.029-5.138-2.9-7.011-1.871-1.874-4.359-2.906-7.01-2.907zm0 18.154h-.004c-1.478 0-2.927-.397-4.192-1.148l-.301-.178-3.117.817.832-3.039-.196-.312c-.825-1.311-1.26-2.827-1.26-4.384.002-4.541 3.698-8.236 8.241-8.236 2.2.001 4.268.859 5.823 2.416 1.556 1.557 2.412 3.626 2.411 5.827-.002 4.542-3.697 8.237-8.237 8.237m4.518-6.169c-.248-.124-1.465-.723-1.692-.806-.227-.082-.392-.124-.557.124-.165.248-.64.806-.784.971-.145.165-.289.186-.537.062-.248-.124-1.045-.385-1.991-1.229-.736-.656-1.233-1.467-1.378-1.715-.144-.248-.015-.382.109-.505.111-.111.248-.29.371-.434.124-.145.165-.248.248-.414.082-.165.041-.309-.021-.433s-.557-1.343-.763-1.839c-.201-.483-.405-.417-.557-.425-.145-.007-.31-.009-.475-.009-.165 0-.433.062-.66.31-.227.248-.867.847-.867 2.066 0 1.219.887 2.396 1.011 2.561.124.166 1.746 2.667 4.23 3.74.591.255 1.052.407 1.412.521.593.189 1.133.162 1.56.098.475-.071 1.465-.599 1.671-1.177.206-.578.206-1.074.144-1.178-.061-.103-.226-.165-.474-.289zm17.532-.152h-.026l-1.644-6.628h-1.98l-1.67 6.548h-.027l-1.522-6.548h-2.114l2.545 9.619h2.142l1.603-6.547h.027l1.629 6.547h2.101l2.586-9.619h-2.074l-1.576 6.628zm10.101-3.374c-.188-.248-.446-.441-.774-.58-.328-.139-.748-.208-1.259-.208-.359 0-.727.092-1.105.276-.377.184-.687.478-.929.883h-.04v-3.625h-1.913v9.619h1.913v-3.651c0-.709.116-1.219.35-1.529.233-.309.61-.464 1.131-.464.458 0 .777.141.956.424.18.283.27.712.27 1.287v3.933h1.913v-4.284c0-.431-.039-.823-.115-1.179-.076-.354-.209-.655-.398-.902m7.879 4.816v-3.624c0-.422-.093-.761-.283-1.017-.188-.256-.43-.456-.726-.599-.297-.144-.625-.241-.984-.29-.359-.049-.714-.074-1.064-.074-.386 0-.77.038-1.151.114-.382.077-.725.205-1.031.384-.305.18-.557.418-.754.714-.198.297-.31.669-.337 1.119h1.912c.036-.378.163-.648.378-.809.216-.162.512-.242.889-.242.17 0 .33.011.478.033.148.023.278.067.39.135.113.067.202.161.27.283.067.121.101.286.101.491.009.199-.05.348-.175.452-.126.103-.296.182-.512.235-.216.055-.463.095-.741.122-.278.027-.561.064-.848.108-.288.045-.573.105-.855.182-.283.076-.535.191-.755.343-.22.154-.399.357-.539.613-.139.256-.209.582-.209.977 0 .359.061.669.182.929.121.262.29.476.505.647.216.171.467.297.754.378.287.081.598.121.93.121.431 0 .853-.063 1.265-.188.414-.127.773-.346 1.079-.661.009.117.024.232.046.344.023.111.052.222.088.33h1.94c-.09-.143-.153-.359-.189-.647-.036-.287-.054-.588-.054-.903m-1.912-1.146c0 .109-.011.253-.034.432-.022.18-.083.357-.181.532-.099.175-.253.326-.459.451-.206.126-.497.189-.875.189-.152 0-.301-.013-.444-.04-.144-.027-.27-.075-.378-.142-.107-.067-.193-.159-.256-.276-.062-.117-.094-.26-.094-.431 0-.179.032-.328.094-.444.063-.117.147-.214.25-.29.103-.076.224-.137.363-.182.139-.045.281-.081.425-.108.152-.026.305-.05.457-.067.153-.018.299-.041.438-.067.14-.027.269-.061.391-.102.121-.04.222-.096.303-.168v.713zm5.482-6.358h-1.913v2.088h-1.158v1.28h1.158v4.109c0 .351.059.633.175.849.117.215.276.382.478.499.202.117.435.195.701.235.264.041.545.061.841.061.19 0 .382-.005.58-.014.197-.009.376-.026.538-.054v-1.482c-.09.019-.184.032-.283.041-.098.009-.202.013-.309.013-.323 0-.539-.054-.647-.162-.107-.107-.161-.323-.161-.646v-3.449h1.4v-1.28h-1.4v-2.088zm7.905 6.002c-.125-.22-.291-.404-.498-.553-.206-.147-.443-.267-.707-.357-.265-.089-.537-.165-.815-.228-.27-.063-.534-.121-.794-.175-.261-.055-.493-.115-.695-.182-.201-.068-.365-.155-.49-.263-.127-.108-.189-.247-.189-.418 0-.144.035-.258.108-.344.072-.084.159-.15.262-.195.104-.045.218-.074.344-.088.125-.013.243-.019.35-.019.341 0 .638.065.889.195s.39.379.417.747h1.818c-.036-.43-.146-.787-.33-1.071-.183-.282-.415-.509-.693-.68-.278-.17-.595-.292-.95-.364-.355-.072-.72-.107-1.097-.107-.378 0-.746.034-1.104.1-.36.068-.683.185-.97.351-.288.166-.518.393-.694.68-.175.288-.263.656-.263 1.105 0 .305.064.564.189.775.125.211.292.386.498.525.207.139.443.252.707.337.265.086.537.16.815.223.683.143 1.215.287 1.596.431.382.143.573.359.573.647 0 .17-.04.311-.121.423-.081.113-.182.203-.303.27-.122.068-.257.117-.404.148-.148.032-.291.048-.425.048-.188 0-.37-.023-.545-.068-.175-.045-.33-.114-.465-.209-.134-.094-.245-.215-.33-.364-.085-.148-.128-.325-.128-.531h-1.818c.018.467.123.855.317 1.165.192.31.439.559.74.748.3.188.645.323 1.031.404.385.081.781.121 1.184.121.395 0 .784-.038 1.166-.114.381-.076.72-.209 1.017-.398.297-.188.536-.437.72-.747.184-.311.276-.694.276-1.152 0-.325-.063-.596-.189-.816zm3.798-6.568l-3.636 9.619h2.128l.754-2.142h3.597l.727 2.142h2.195l-3.595-9.619h-2.17zm-.201 5.901l1.252-3.53h.027l1.212 3.53h-2.491zm12.579-2.304c-.26-.341-.588-.615-.983-.821-.395-.207-.867-.31-1.414-.31-.432 0-.826.085-1.185.256-.36.17-.656.444-.889.822h-.027v-.89h-1.819v9.404h1.914v-3.3h.026c.233.341.532.599.896.773.363.176.761.264 1.192.264.512 0 .958-.1 1.34-.297.381-.197.7-.463.956-.795s.446-.714.573-1.145c.125-.431.189-.88.189-1.347 0-.494-.064-.968-.189-1.422-.127-.453-.32-.85-.58-1.192zm-1.225 3.382c-.054.269-.147.505-.277.707-.13.202-.3.367-.512.492-.21.126-.474.189-.788.189-.305 0-.565-.063-.78-.189-.216-.125-.389-.29-.519-.492s-.225-.438-.283-.707c-.058-.269-.087-.544-.087-.821 0-.289.026-.567.08-.836.054-.269.146-.507.277-.715.129-.206.3-.374.512-.504.21-.13.472-.196.787-.196.305 0 .564.066.774.196.211.13.385.3.519.511.135.212.231.452.289.721.059.27.088.544.088.823 0 .277-.026.552-.08.821zm9.427-2.19c-.126-.453-.318-.85-.579-1.192-.261-.341-.588-.615-.983-.821-.395-.207-.867-.31-1.415-.31-.43 0-.826.085-1.185.256-.359.17-.655.444-.889.822h-.026v-.89h-1.819v9.404h1.913v-3.3h.027c.233.341.532.599.896.773.363.176.761.264 1.192.264.511 0 .958-.1 1.34-.297.381-.197.701-.463.956-.795.256-.332.446-.714.572-1.145.127-.431.189-.88.189-1.347 0-.494-.062-.968-.189-1.422m-1.805 2.19c-.053.269-.145.505-.275.707-.131.202-.301.367-.513.492-.21.126-.473.189-.787.189-.306 0-.566-.063-.782-.189-.216-.125-.388-.29-.519-.492-.129-.202-.224-.438-.282-.707-.059-.269-.088-.544-.088-.821 0-.289.028-.567.081-.836.054-.269.146-.507.277-.715.129-.206.3-.374.511-.504.211-.13.474-.196.788-.196.306 0 .563.066.774.196.212.13.384.3.519.511.135.212.232.452.29.721.059.27.087.544.087.823 0 .277-.027.552-.081.821"
                      ></path>
                    </g>
                  </svg>
                </p>
              </div>
              <div className="d-flex">
                <input className="mt-2 me-3" type="checkbox" name="" id="" />
                <p>
                  Je souhaite recevoir des e-mails occasionnels concernant les
                  nouveaux produits, les promotions et les autres nouveautés.
                </p>
              </div>
              <p>
                n vous inscrivant, vous acceptez nos{" "}
                <span className="text_blue">
                  Conditions Générales d'Utilisation{" "}
                </span>{" "}
                <span>et notre </span>
                <span className="text_blue">Politique de confidentialité.</span>
              </p>
              <div></div>
            </form>
          </div>
          <div></div>
        </div>
        <div className="from_comment-btn">
          <button className="from_comment-btn1 ">Precedent</button>
          <button className="from_comment-btn2" onClick={handleSubmit}>Suivant</button>
        </div>
      </div>
    </div>
  );
};

export default FromComment;
