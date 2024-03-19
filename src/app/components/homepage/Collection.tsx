import { collection1, collection2 } from "@/src/assests";
import Image from "next/image";
import EastIcon from "@mui/icons-material/East";

export default function Collection() {
  return (
    <section className="lg:container mt-0 md:mt-16 transition-all">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-8">
          <div className="flex flex-col xl:justify-between px-4 max-xl:gap-y-6">
            <Image
              src={collection1}
              alt="collection-img"
              className="w-full"
              width={620}
              height={780}
            />
            <div className="text-base space-y-4 xl:pl-28">
              <p className="font-normal text-text-light-color">
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Quis ipsum suspendisse ultrices gravida.
              </p>
              <h2 className="font-medium">Petra van der Meer</h2>
            </div>
          </div>
          <div className="px-4">
            <div className="flex flex-col gap-y-6 justify-start">
              <h1 className="text-ssm uppercase font-semibold">
                New Collections
              </h1>
              <h2 className="text-3xl font-medium">
                Best Sweatshirts and tracksuits for everyone!
              </h2>
              <p className="text-text-light-color text-sm lg:text-lg">
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                viverra maecenas accumsan lacus vel facilisis.
              </p>
              <button
                className="w-fit hover:bg-primary-color hover:text-white border border-border-color
               py-2 px-4 flex items-center gap-x-4 transition-colors"
              >
                Mua ngay
                <EastIcon />
              </button>
              <div className="mt-4">
                <Image
                  src={collection2}
                  alt="collection-img"
                  className="size-full"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
