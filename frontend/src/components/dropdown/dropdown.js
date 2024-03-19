import React from "react";
import Select from "react-select";

import "./dropdown.css";

const Dropdown = ({placeholder, options, handleSelectedOptions, selectedOption}) => {

    return (
        <Select
            className="react-select"
            classNamePrefix="react-select"
            placeholder={placeholder}
            options={options}
            onChange={handleSelectedOptions}
            value={selectedOption}
            isSearchable={true}
        />
    );
};

export default Dropdown;