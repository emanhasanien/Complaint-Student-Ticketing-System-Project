import React, { useState } from "react";
import { ListItem } from "../../UI-Components/ListItem";
import complaintsData from "../../MocData/Complaints.json";

const ComplaintsManagement = () => {
  const [complaints, setComplaints] = useState(complaintsData);
  const [search, setSearch] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [filters, setFilters] = useState([]);

  const handleChange = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue);

    const regex = new RegExp(searchValue);

    const newComplaints = complaintsData.filter((item) =>
      regex.test(item.title)
    );
    setComplaints(newComplaints);
  };

  const handleClick = (e) => {
    const filterValue = e.target.innerText;
    let newFilters = [...filters]; // Create a copy of the filters array

    e.target.classList.toggle("clicked");

    if (filters.includes(filterValue)) {
      newFilters = newFilters.filter((item) => item !== filterValue); // Remove item
    } else {
      newFilters.push(filterValue); // Add item
    }

    setFilters(newFilters); // Update filters state

    // If no filters are selected, show the full list
    const newComplaints =
      newFilters.length === 0
        ? complaintsData
        : complaintsData.filter((item) =>
            newFilters.some((filter) =>
              new RegExp(filter, "i").test(item.status)
            )
          );

    setComplaints(newComplaints); // Update complaints state
  };

  const changeStatus = (e, id) => {
    const newStatus = e.target.innerText;
    const updatedComplaints = complaints.map((c) =>
      c.id == id ? { ...c, status: newStatus } : c
    );

    setComplaints(updatedComplaints);
  };

  return (
    <div className="box">
      <h1>قائمة الشكاوي</h1>

      <div className="search-box">
        <i className="fa-solid fa-magnifying-glass search_icon"></i>
        <input
          className="search-input"
          type="text"
          name="userInput"
          value={search}
          placeholder="اسم الشكوة"
          onChange={handleChange}
        />
        <i
          className="fa-solid fa-filter filter_icon"
          onClick={() => setIsVisible(!isVisible)}
        ></i>
        {isVisible && (
          <div className="filter_list">
            <div
              className="filter_list-item"
              onClick={handleClick}
              value="جديدة"
            >
              جديد
            </div>
            <div
              className="filter_list-item"
              onClick={handleClick}
              value="تم الحل"
            >
              تم الحل
            </div>
            <div
              className={`filter_list-item `}
              onClick={handleClick}
              value="قيد المعالجة"
            >
              قيد المعالجة
            </div>
          </div>
        )}
      </div>

      {complaints.map((complaint) => (
        <ListItem
          key={complaint.id}
          id={complaint.id}
          title={complaint.title}
          status={complaint.status}
          handelClick={changeStatus}
        ></ListItem>
      ))}
    </div>
  );
};

export default ComplaintsManagement;
