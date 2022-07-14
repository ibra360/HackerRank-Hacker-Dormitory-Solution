import React from "react";

function ResidentsList({ residents }) {
  console.log({ residents });
  return (
    <div className="pa-10 mt-10 w-75">
      <div className="font-weight-bold text-center">Residents List</div>
      <ul className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList">
        {residents.map((name, index) => {
          return (
            <li key={index} className="slide-up-fade-in">
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ResidentsList;
