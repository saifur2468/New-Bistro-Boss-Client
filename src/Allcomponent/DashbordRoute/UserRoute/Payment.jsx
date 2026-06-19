import React from "react";
import useAuth from "../../AuthSection/Authprovider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

// import useCart from "../../../Hooks/UseCart";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Payment = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // const [cart, refetch] = useCart();
  // const axiosSecure = useAxiosSecure();

  // 👉 TEMP cart (remove when real hook ready)
  const cart = [
    { _id: "1", price: 20, menuId: "m1" },
    { _id: "2", price: 30, menuId: "m2" },
  ];

  const totalPrice =
    cart?.reduce((total, item) => total + item.price, 0) || 0;

  const handleProcessPayment = () => {
    if (!cart || cart.length === 0) {
      return Swal.fire("Error", "Your cart is empty!", "error");
    }

    Swal.fire({
      title: "Confirm Payment?",
      text: `Total Amount: $${totalPrice.toFixed(2)}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#570DF8",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Pay Now!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const paymentInfo = {
            email: user?.email,
            price: totalPrice,
            transactionId: `TXN-${Date.now()}-${Math.random()
              .toString(36)
              .substr(2, 5)
              .toUpperCase()}`,
            date: new Date(),
            cartIds: cart.map((item) => item._id),
            menuItemIds: cart.map((item) => item.menuId || item._id),
            status: "pending",
          };

          // const res = await axiosSecure.post("/payments", paymentInfo);

          const res = { data: { insertedId: "demo-id" } }; // TEMP FIX

          if (res.data?.insertedId || res.data?.result?.insertedId) {
            // await refetch();

            Swal.fire({
              title: "Payment Successful!",
              text: "Your order has been placed.",
              icon: "success",
            });

            navigate("/dashboard/paymentHistory");
          }
        } catch (error) {
          console.log(error);
          Swal.fire("Error", "Payment failed!", "error");
        }
      }
    });
  };

  return (
    <div className="bg-gray-50 p-10 rounded-xl shadow-sm border max-w-3xl mx-auto">

      <p className="mb-6 text-xl font-semibold text-center">
        Amount to Pay:{" "}
        <span className="text-purple-600">
          ${totalPrice.toFixed(2)}
        </span>
      </p>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
        <input
          type="text"
          placeholder="Card number"
          className="input input-bordered w-full max-w-xs h-14"
        />
        <input
          type="text"
          placeholder="MM/YY/CVC"
          className="input input-bordered w-full max-w-xs h-14"
        />
      </div>

      <div className="text-center">
        <button
          onClick={handleProcessPayment}
          className="btn bg-[#570DF8] hover:bg-[#4506cb] text-white px-20 border-none h-14 text-lg"
        >
          Pay
        </button>
      </div>
    </div>
  );
};

export default Payment;