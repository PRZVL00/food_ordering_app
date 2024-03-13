import Image from "next/image";

export default function HomeMenu() {
  return (
    <>
      <section>
        <div className="absolute h-full left-0 right-0  w-full ">
          <div className="h-48 w-48 absolute left-0">
            <Image
              src={"/salad1.png"}
              alt={"salad"}
              layout={"fill"}
              objectFit={"contain"}
            />
          </div>
          <div
            className="absolute right-0"
            style={{ top: "-250px", height: "30rem", width: "30rem" }}
          >
            <Image
              src={"/salad1.png"}
              alt={"salad"}
              layout={"fill"}
              objectFit={"contain"}
            />
          </div>
        </div>
        <div className="text-center">
          <h3 className="uppercase text-gray-500 leading-4">Check Out</h3>
          <h2 className="text-primary font-bold text-4xl italic">Menu</h2>
        </div>
      </section>
    </>
  );
}
