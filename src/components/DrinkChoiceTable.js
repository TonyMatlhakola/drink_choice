import React, { useState } from "react";

const DrinkChoiceTable = (props) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <div>
        <h4 className="text-center">{props.props.name}</h4>
        <p className="text-center">{props.props.description}</p>
        <br />
        <br />
        <div>
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Name"
          />
        </div>
        <br />
        <div className="row">
          <div className="col">
            <table className="table table-auto">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Question</th>
                  <th scope="col">Type</th>
                </tr>
              </thead>
              <tbody>
                {props.props.metadata.attributes &&
                  props.props.metadata.attributes
                    .filter((li) =>
                      li.name
                        .toString()
                        .toLowerCase()
                        .includes(search.toString().toLowerCase())
                    )
                    .map((drinkItem, index) => {
                      return (
                        <tr key={index}>
                          <td>{drinkItem.name}</td>
                          <td>{drinkItem.question}</td>
                          <td>{drinkItem.type}</td>
                        </tr>
                      );
                    })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default DrinkChoiceTable;
