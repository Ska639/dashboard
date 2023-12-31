import {
  ArrowUpIcon,
  BellIcon,
  ChartBarIcon,
  CreditCardIcon,
  DocumentSearchIcon,
  ExternalLinkIcon,
  HomeIcon,
  MailIcon,
} from "@heroicons/react/solid";

const Sidebar = ({ usefulFunction }) => {
  const handleHome = () => {
    usefulFunction(1);
  };
  const handleBar = () => {
    usefulFunction(2);
  };

  const handleDocument = () => {
    usefulFunction(3);
  };
  const handleMessages = () => {
    usefulFunction(4);
  };
  const handleCreditCard = () => {
    usefulFunction(5);
  };
  const handleNotifications = () => {
    usefulFunction(6);
  };
  const handleExternal = () => {
    window.open("https://russianspacesystems.ru/");
  };
  return (
    <div className="bg-slate-800 flex-none w-14 sm:w-15 h-screen">
      <div className="h-20 items-center flex">
        <HomeIcon
          width={40}
          className="text-gray-300 left-3 sm:left-3 fixed"
          onClick={handleHome}
        />
      </div>
      <div className="fixed left-3 sm:leeft-6 top-[100px]">
        <ChartBarIcon
          width={40}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
          onClick={handleBar}
        />
        <DocumentSearchIcon
          width={40}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
          onClick={handleDocument}
        />
        <MailIcon
          width={40}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
          onClick={handleMessages}
        />
        <CreditCardIcon
          width={40}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
          onClick={handleCreditCard}
        />
        <BellIcon
          width={40}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
          onClick={handleNotifications}
        />
      </div>
      <div className="fixed bottom-4 left-3 sm:left-6">
        <a href="#top">
          <ArrowUpIcon
            width={40}
            className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
          />
        </a>
        <ExternalLinkIcon
          width={40}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
          onClick={handleExternal}
        />
      </div>
    </div>
  );
};

export default Sidebar;
