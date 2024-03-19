import LocationOnIcon from "@mui/icons-material/LocationOn";
import PaidIcon from "@mui/icons-material/Paid";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PaymentIcon from "@mui/icons-material/Payment";
export default function Service() {
  return (
    <section className="lg:container mt-4 lg:mt-10 transition-all">
      <div className="">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-x-8 px-4">
          <li className="flex gap-x-4">
            <div>
              <LocationOnIcon className="size-10 fill-primary-color" />
            </div>
            <div className="inline space-y-2">
              <h1 className="text-lg font-medium">Free Shipping</h1>
              <p className="text-base font-light">
                Free Shipping for orders over £130.
              </p>
            </div>
          </li>
          <li className="flex gap-x-4">
            <div>
              <PaidIcon className="size-10 fill-primary-color" />
            </div>
            <div className="inline space-y-2">
              <h1 className="text-lg font-medium">Money Guarantee</h1>
              <p className="text-base font-light">
                Within 30 days for an exchange.
              </p>
            </div>
          </li>
          <li className="flex gap-x-4">
            <div>
              <SupportAgentIcon className="size-10 fill-primary-color" />
            </div>
            <div className="inline space-y-2">
              <h1 className="text-lg font-medium">Online Support</h1>
              <p className="text-base font-light">Online support 24/7</p>
            </div>
          </li>
          <li className="flex gap-x-4">
            <div>
              <PaymentIcon className="size-10 fill-primary-color" />
            </div>
            <div className="inline space-y-2">
              <h1 className="text-lg font-medium">Flexible Payment</h1>
              <p className="text-base font-light">Pay with multiple methods.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
