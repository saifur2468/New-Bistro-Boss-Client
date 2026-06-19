
import { useAuth } from "../../AuthSection/Authprovider";
import {
  FaWallet,
  FaStore,
  FaPhoneAlt,
  FaCar,
  FaStar,
  FaBookmark,
  FaCoins,
} from "react-icons/fa";

const UserHome = () => {
  const { user } = useAuth();


  const stats = {
    orderCount: 0,
    totalSpent: 0,
    bookingCount: 0,
    reviewCount: 0,
  };

  return (
    <div className="w-full px-4 py-6">

      {/* Welcome Text */}
      <h2 className="text-3xl font-serif uppercase mb-8">
        Hi, Welcome {user?.displayName ? user.displayName : "Back"}!
      </h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-white">

        <div className="bg-gradient-to-r from-purple-500 to-purple-200 p-8 rounded-lg flex items-center gap-4">
          <FaWallet className="text-4xl" />
          <div>
            <p className="text-3xl font-bold">{stats.orderCount}</p>
            <p className="text-xl">Orders</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-600 to-yellow-200 p-8 rounded-lg flex items-center gap-4">
          <FaStore className="text-4xl" />
          <div>
            <p className="text-3xl font-bold">{stats.totalSpent}$</p>
            <p className="text-xl">Spent</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-500 to-pink-200 p-8 rounded-lg flex items-center gap-4">
          <FaPhoneAlt className="text-4xl" />
          <div>
            <p className="text-3xl font-bold">{stats.bookingCount}</p>
            <p className="text-xl">Bookings</p>
          </div>
        </div>
      </div>

      {/* Profile + Activities Section */}
      <div className="flex flex-col md:flex-row shadow-lg border rounded-lg overflow-hidden">

        {/* Profile */}
        <div className="flex-1 bg-[#FFEDD5] p-10 flex flex-col items-center justify-center border-r">
          <div className="w-40 h-40 rounded-full border-4 border-yellow-600 mb-4 overflow-hidden bg-white">
            <img
              src={user?.photoURL || "https://i.ibb.co/PNG-image.png"}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-2xl font-serif uppercase text-center">
            {user?.displayName || "User"}
          </h3>

          <p className="text-gray-600 text-sm mt-2">
            {user?.email}
          </p>
        </div>

        {/* Activities */}
        <div className="flex-1 bg-[#FEF9C3] p-10">
          <h3 className="text-3xl font-serif uppercase mb-6">
            Your Activities
          </h3>

          <ul className="space-y-4 text-lg font-semibold uppercase">

            <li className="flex items-center gap-2 text-blue-500">
              <FaCar /> Orders: {stats.orderCount}
            </li>

            <li className="flex items-center gap-2 text-teal-500">
              <FaStar /> Reviews: {stats.reviewCount}
            </li>

            <li className="flex items-center gap-2 text-yellow-600">
              <FaBookmark /> Bookings: {stats.bookingCount}
            </li>

            <li className="flex items-center gap-2 text-orange-500">
              <FaCoins /> Total Spent: ${stats.totalSpent}
            </li>

          </ul>
        </div>

      </div>
    </div>
  );
};

export default UserHome;