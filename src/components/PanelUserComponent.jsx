const PanelUserComponent = ({tipo, dato}) => (
    <div className="border p-8 rounded-md hover:bg-white mb-4 shadow-sm hover:shadow-md duration-500 cursor-pointer flex flex-row w-[90%]">
        <div className="h-full border-r-2 w-[10rem]">
            <p>{tipo}</p>
        </div>
        <div className="ml-6">
            <p>{dato}</p>
        </div>
    </div>
  );
  
  
  export default PanelUserComponent;
  