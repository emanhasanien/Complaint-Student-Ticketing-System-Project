import complaints from "../../MocData/Complaints.json";

export const saveDataToJsonFile = (data) => {
  // Save Data


 //   getting last id from data 
  const lastItemInArray = complaints[complaints.length - 1];
  data.id = lastItemInArray.id + 1;

  complaints.push(data);

  // Post data (complaints) to backend or database
};
