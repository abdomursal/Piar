import { useState, useEffect } from "react";
import { dropAuthToken, onApiError } from "../../../lib/api";
import { dropToken } from "../../../store/authReducer";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { addToModal } from "../../../store/modalReducer";
import { getStations } from "../../../store/stationReducer";
import { getUsers } from "../../../store/userReducer";
import { getUsers as getAllUsers } from "../../../lib/users";
import { getStations as getAllStations } from "../../../lib/stations";

import Button from "../../ui/Button";
import Card from "../../ui/Card";
import Modal from "../../ui/Modal";
import "./dashboard.css";

const Dashboard = () => {
  const [activeNavBottom, setActiveNavBottom] = useState("users");
  const [error, setError] = useState(false);
  const modalItems = useAppSelector((state) => state.modal);
  const currentUser = useAppSelector((state) => state.currentUser);
  const users = useAppSelector((state) => state.users.users);
  const stations = useAppSelector((state) => state.stations.stations);
  const showModal = modalItems.isOpen;
  const dispatch = useAppDispatch();

  const display = activeNavBottom == "users" ? users : stations;

  useEffect(() => {
    getData();
  }, [activeNavBottom]);

  const getData = async () => {
    try {
      if (activeNavBottom == "users") {
        const usersResult = await getAllUsers();
        return dispatch(getUsers(usersResult));
      } else if (activeNavBottom == "stations") {
        const stationsResult = await getAllStations();
        return dispatch(getStations(stationsResult));
      }
    } catch (e) {
      onApiError();
    }
    setError(true);
  };

  const logoutHandler = () => {
    dropAuthToken();
    dispatch(dropToken());
  };

  return (
    <>
      <header className="header">
        <img src="./admin.png" height={50} width={50} alt={"admin avatar"} />
        <p className="headerTitle">{currentUser.name || currentUser.name}</p>
        <p className="logout" onClick={() => logoutHandler()}>
          Logout
        </p>
      </header>
      <nav className="nav">
        <div
          className={
            activeNavBottom === "users" ? "activeNavBottom" : "navButton"
          }
          onClick={() => setActiveNavBottom("users")}
        >
          users
        </div>
        <div
          className={
            activeNavBottom === "stations" ? "activeNavBottom" : "navButton"
          }
          onClick={() => setActiveNavBottom("stations")}
        >
          stations
        </div>
      </nav>
      <div className="addWrap">
        <Button
          title="+"
          className="addButton"
          onClick={() =>
            dispatch(
              addToModal({
                activeSection: activeNavBottom,
                isOpen: true,
                modalType: "create",
              })
            )
          }
        />
        <p> Create {activeNavBottom} </p>
      </div>
      <section className="sectionContainer">
        {display?.map((item: any) => {
          return <Card typeCard={activeNavBottom} items={item} key={item.id} />;
        })}
      </section>
      <Modal show={showModal} />
    </>
  );
};

export default Dashboard;
