import PropTypes from "prop-types";
const NavigationButtons = ({ setQuery }) => {
  const metro_cities = [
    { id: 1, name: "Jaipur" },
    { id: 2, name: "Delhi" },
    { id: 3, name: "Mumbai" },
    { id: 4, name: "Chennai" },
    { id: 5, name: "Bangalore" },
    { id: 6, name: "Kolkata" },
    { id: 7, name: "Hyderabad" },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {metro_cities.map((city) => (
        <button
          key={city.id}
          className="text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in"
          onClick={() => setQuery({ q: city.name })}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};

NavigationButtons.propTypes = {
  setQuery: PropTypes.func.isRequired,
};
export default NavigationButtons;
