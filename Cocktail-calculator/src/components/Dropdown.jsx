const Dropdown = ({ options, onSelect, value }) => {
    const sortedOptions = [...options].sort((a, b) => a.name.localeCompare(b.name));

    return (
        <select onChange={onSelect} value={value} className={"border-solid border-2 border-gray-900 rounded-lg"}>
            <option value="">Select a Drink</option>
            {sortedOptions.map((option) => (
                <option key={option.id} value={option.id}>
                    {option.name}
                </option>
            ))}
        </select>
    );
};

export default Dropdown;
