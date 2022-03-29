export const DashboardClientsTable = () => (
  <div className="border-gray-300 border-[1px] rounded-md">
    <div className="bg-gray-500 rounded-tl-md rounded-tr-md py-4 px-6 flex justify-between text-gray-50 text-sm font-normal">
      <span>Name</span>
      <span>Company</span>
      <span>Tax</span>
    </div>
    <div>
      <div className="py-4 px-6 flex justify-between bg-gray-300 border-t-[1px]">
        <div className="flex flex-col text-xs">
          <span className="text-darkPurple-100 font-bold">João Amadeu</span>
          <span className="text-gray-200">joao.amadeu@toptal.com</span>
        </div>
        <div className="flex flex-col text-xs">
          <span className="text-darkPurple-100">TopTal Inc</span>
          <span className="text-gray-200">LA, United States</span>
        </div>
        <span className="text-darkPurple-100 text-xs">2000 USD</span>
      </div>
    </div>
  </div>
);
