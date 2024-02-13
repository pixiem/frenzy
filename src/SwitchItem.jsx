/* eslint-disable react/prop-types */
const SwitchItem = ({ data, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left border-[0.5px] border-gray-700 px-4 py-2 rounded-md cursor-pointer ${
        isSelected ? 'bg-primary text-secondary' : 'text-white'
      }`}
    >
      <p className="leading-tight tracking-tight md:text-md font-medium">
        {data.title}
      </p>
      <p className={`${isSelected ? 'text-gray-200' : 'text-gray-400'}`}>
        {data.description}
      </p>
    </button>
  );
};

export default SwitchItem;
