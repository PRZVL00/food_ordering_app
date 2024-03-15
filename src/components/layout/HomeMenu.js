import Image from "next/legacy/image";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

export default function HomeMenu() {
  return (
    <>
      <section>
        <div className="absolute  left-0 right-0  w-full ">
          <div
            className="absolute -left-4 -z-10 transform scale-x-(-1)"
            style={{ top: "-170px", height: "20rem", width: "20rem" }}
          >
            <Image
              src={"/salad2.png"}
              alt={"salad"}
              layout={"fill"}
              objectFit={"contain"}
            />
          </div>
          <div
            className="absolute right-0"
            style={{ top: "-270px", height: "30rem", width: "30rem" }}
          >
            <Image
              src={"/salad1.png"}
              alt={"salad"}
              layout={"fill"}
              objectFit={"contain"}
            />
          </div>
        </div>
        <SectionHeaders subHeader={"Check out"} mainHeader={"Menu"} />
        <div className="grid grid-cols-5 gap-8 px-60 py-20">
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </div>
      </section>
    </>
  );
}
