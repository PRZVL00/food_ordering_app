export default function MenuItem() {
  return (
    <div className="bg-gray-300 p-4 rounded-lg text-center group hover:bg-white hover:shadow-2xl hover:shadow-black/50 transition-all">
      <div className="text-center">
        <img
          src="/pizza.png"
          alt="pizza"
          className="max-h-auto max-h-32 block mx-auto"
        />
      </div>
      <h4 className="font-semibold text-xl my-2">Peperoni Pizza</h4>
      <p className="text-gray-500 text-sm my-4 mx-4">
        This is a sample text that will describe the selling pizza on the card
      </p>
      <button className="bg-primary text-white rounded-full px-8 py-2">
        Add to cart $12
      </button>
    </div>
  );
}
