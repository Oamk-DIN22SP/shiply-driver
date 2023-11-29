const LocationItem = () => {
  return (
    <div className="flex flex-row gap-1 items-center hover:cursor-pointer hover:bg-[#FEDBC2] p-4 border rounded-sm">
      <p className="bg-[#686868] text-white w-8 text-center border rounded-sm text-sm h-6">
        1
      </p>
      <p className="text-xs leading-3">
        Market Street 9876F / Plaza Drive, Springfield, The Simpsons /
        Springfield
      </p>
    </div>
  );
};

export default LocationItem;
