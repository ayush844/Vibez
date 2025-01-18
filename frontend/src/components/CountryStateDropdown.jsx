import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Select from "react-select";

const CountryStateDropdown = () => {
  const [dataFetched, setDataFetched] = useState(false); // To ensure we fetch only once
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  // Fetch data from API and prepare options
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!dataFetched) {
          const response = await axios.get(
            "https://countriesnow.space/api/v0.1/countries/states"
          );

          const countries = response.data.data;

          // Flatten the data into searchable options
          const combinedOptions = countries.flatMap((country) => {
            // Add the country as an option
            const countryOption = {
              value: `${country.name} - Country`,
              label: country.name,
            };

            // Add the states for this country as options
            const stateOptions = country.states.map((state) => ({
              value: `${state.name} (${country.name})`,
              label: `${state.name}, ${country.name}`,
            }));

            return [countryOption, ...stateOptions];
          });

          setOptions(combinedOptions);
          setDataFetched(true); // Mark data as fetched
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dataFetched]);

  const memoizedOptions = useMemo(() => options, [options]);

  const handleChange = (selected) => {
    setSelectedOption(selected);
  };

  return (
    <div className="flex flex-col items-start gap-6 w-full max-w-md text-left m-0">
      <div className="w-full">
        <label className="block  text-gray-700 mb-2  text-lg font-bold ">
          Location
        </label>
        <Select
          options={memoizedOptions}
          value={selectedOption}
          onChange={handleChange}
          placeholder="Type to search..."
          className="shadow-sm focus:outline-purple-600"
          styles={{
            control: (base) => ({
              ...base,
              borderColor: "rgb(209 213 219)", // Tailwind gray-300
              "&:hover": { borderColor: "rgb(173, 73, 225)" }, // Tailwind blue-500
            }),
          }}
        />
      </div>
      {/* {selectedOption && (
        <div className="mt-4 text-center">
          <h3 className="text-lg font-semibold">You selected:</h3>
          <p>{selectedOption.label}</p>
        </div>
      )} */}
    </div>
  );
};

export default CountryStateDropdown;
