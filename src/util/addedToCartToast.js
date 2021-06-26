import Link from "next/link";
import { toast } from "react-toastify";
import Image from "next/image";
import { CreditCardIcon } from "@heroicons/react/outline";

const addedToCartToast = (image, title) => {
  toast(
    <div className="flex text-gray-800 gap-4">
      <div className="w-3/12 my-auto">
        <Image
          src={image}
          width={40}
          height={40}
          objectFit="contain"
          className="min-w-max"
        />
      </div>
      <div className="w-full">
        <h3 className="font-bold">Added to cart</h3>
        <p className="text-sm mb-2">
          {title.slice(0, 22)}
          {title.length > 22 ? "…" : ""}
        </p>
        <Link href="/cart">
          <button className="button-green px-8 py-2 w-full flex items-center justify-center">
            <CreditCardIcon className="w-4" /> &nbsp;Checkout
          </button>
        </Link>
      </div>
    </div>,

    {
      position: "top-right",
      autoClose: 6000,
      style: {
        background: "white",
        color: "#1f2937",
        fontFamily: "Poppins",
        height: "auto",
      },
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      draggablePercent: 20,
    }
  );
};

export default addedToCartToast;