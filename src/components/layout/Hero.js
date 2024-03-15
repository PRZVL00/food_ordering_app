import Image from "next/image";
import RightArrow from "../icons/RightArrow";

export default function Hero() {
  return (
    <div className="max-w-9xl mx-auto p-4 mt-4  ">
      <section className="hero">
        <div className="p-12">
          <h1 className="text-9xl font-semibold ">
            Savor the Slice, Indulge in the Pleasure of{" "}
            <span className="text-primary">Pizza</span>!
          </h1>
          <p className="my-6 text-gray-500 text-xl">
            Indulge in our artisanal pizzas, meticulously crafted to bring joy
            with every bite. Experience the true essence of happiness, one slice
            at a time.
          </p>
          <div className="flex gap-4 text-sm items-center">
            <button className=" bg-primary text-white flex items-center gap-2 px-4 py-2 rounded-full">
              ORDER NOW
              <RightArrow />
            </button>
            <button className="flex gap-2 py-2 text-gray-600 font-semibold">
              Learn More
              <RightArrow />
            </button>
          </div>
        </div>

        <div className="relative">
          <Image
            src={"/pizza.png"}
            alt={"pizza"}
            layout={"fill"}
            objectFit={"contain"}
          />
        </div>
      </section>
    </div>
  );
}
