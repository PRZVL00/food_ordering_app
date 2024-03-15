import Link from "next/link";
import Hero from "../components/layout/Hero";
import HomeMenu from "../components/layout/HomeMenu";
import SectionHeaders from "../components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-8">
        <SectionHeaders subHeader={"Our Story"} mainHeader={"About Us"} />
        <div className="text-gray-500 max-w-5xl mx-auto mt-4 flex flex-col gap-4 text-lg">
          <p>
            Discover the unforgettable taste of ST Pizza, where every slice is a
            testament to our dedication to culinary excellence. Our tagline,
            "Savor the Slice, Indulge in the Pleasure of Pizza!" encapsulates
            the heart and soul of our establishment. With a commitment to using
            only the finest ingredients and artisanal techniques, each pizza is
            carefully crafted to deliver a moment of pure delight.
          </p>
          <p>
            Step into our welcoming atmosphere, where the aroma of freshly baked
            dough and savory toppings beckons you to indulge in a truly
            exceptional dining experience. Whether you're a fan of classic
            flavors or crave the excitement of our specialty pies, our diverse
            menu offers something to satisfy every craving.
          </p>
          <p>
            But ST Pizza is more than just a place to enjoy great food; it's a
            community hub where friends and family come together to share in the
            simple joy of delicious meals and cherished moments. Join us at ST
            Pizza, and let us redefine your pizza experience, one slice at a
            time.
          </p>
        </div>
      </section>
      <section className="text-center mt-32">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact Us"}
        />
        <div className="mt-8">
          <a href="/" className="text-4xl underline text-gray-500">
            0912-345-6789
          </a>
        </div>
      </section>
    </>
  );
}
