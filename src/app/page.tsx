import OurProducts from "./components/OurProducts";
import HeroImg from "./Images/heroimg.png";
import Logo1 from "./Images/Logo1.png";
import Logo2 from "./Images/Logo2.png";
import Logo3 from "./Images/Logo3.png";
import Logo4 from "./Images/Logo4.png";
import Logo5 from "./Images/Logo5.png";
import Logo6 from "./Images/Logo6.png";
import Logo7 from "./Images/Logo7.png";
import Feature1 from "./Images/FeatureProduct1.png";
import Feature2 from "./Images/FeatureProduct2.png";
import Feature3 from "./Images/FeatureProduct3.png";
import Feature4 from "./Images/FeatureProduct4.png";
import TopCategory1 from "./Images/TopCategory1.png";
import TopCategory2 from "./Images/TopCategory2.png";
import TopCategory3 from "./Images/TopCategory3.png";
import Explore1 from "./Images/Explore1.png";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        {/* Main Container */}
        <div className="max-w-[1321px] w-full">
          {/* Header Section */}
          <section className="flex flex-col md:flex-row items-center justify-between py-10 px-6 mt-6 md:px-20 bg-[#F0F2F3]">
            {/* Left Text Section */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                Best Furniture Collection <br /> For Your Interior.
              </h1>
              <button className="mt-6 px-6 py-3 bg-[#029FAE] text-white rounded-md shadow-lg hover:bg-[#37b2bd]">
                Shop Now →
              </button>
            </div>

            {/* Right Image Section */}
            <div className="mt-8 md:mt-0 flex justify-center">
              <div className="w-full max-w-[434px] h-auto overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={HeroImg.src}
                  alt="Furniture Collection"
                />
              </div>
            </div>
          </section>

          {/* Logos Section */}
          <section className="flex flex-wrap items-center justify-between gap-6 m-10">
            <div className="w-[85px] h-[87px] ">
              <img className="w-full h-full" src={Logo1.src} alt="" />
            </div>
            <div className="w-[107px] h-[109px] ">
              <img className="w-full h-full" src={Logo2.src} alt="" />
            </div>
            <div className="w-[135px] h-[139px] ">
              <img className="w-full h-full" src={Logo3.src} alt="" />
            </div>
            <div className="w-[63px] h-[65px] ">
              <img className="w-full h-full" src={Logo4.src} alt="" />
            </div>
            <div className="w-[98px] h-[101px] ">
              <img className="w-full h-full" src={Logo5.src} alt="" />
            </div>
            <div className="w-[113px] h-[115px] ">
              <img className="w-full h-full" src={Logo6.src} alt="" />
            </div>
            <div className="w-[84px] h-[87px] ">
              <img className="w-full h-full" src={Logo7.src} alt="" />
            </div>
          </section>

          {/* Featured Products Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Featured Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Product 1 */}
              <div className="w-full max-w-[312px] mx-auto h-auto flex flex-col items-center rounded-md">
                {/* Product Image */}
                <div className="w-full h-[312px] bg-gray-300 rounded-md mb-2">
                  <img
                    className="w-full h-full object-cover rounded-md"
                    src={Feature1.src}
                    alt="Product 1"
                  />
                </div>
                {/* Product Info */}
                <p className="text-lg font-medium text-gray-700">
                  Library Stool Chair
                </p>
                <p className="text-gray-500">$20</p>
              </div>
              {/* Product 2 */}
              <div className="w-full max-w-[312px] mx-auto h-auto flex flex-col items-center rounded-md">
                {/* Product Image */}
                <div className="w-full h-[312px] bg-gray-300 rounded-md mb-2">
                  <img
                    className="w-full h-full object-cover rounded-md"
                    src={Feature2.src}
                    alt="Product 2"
                  />
                </div>
                {/* Product Info */}
                <p className="text-lg font-medium text-gray-700">
                  Library Stool Chair
                </p>
                <p className="text-gray-500">$20</p>
              </div>
              {/* Product 3 */}
              <div className="w-full max-w-[312px] mx-auto h-auto flex flex-col items-center rounded-md">
                {/* Product Image */}
                <div className="w-full h-[312px] bg-gray-300 rounded-md mb-2">
                  <img
                    className="w-full h-full object-cover rounded-md"
                    src={Feature3.src}
                    alt="Product 3"
                  />
                </div>
                {/* Product Info */}
                <p className="text-lg font-medium text-gray-700">
                  Library Stool Chair
                </p>
                <p className="text-gray-500">$20</p>
              </div>
              {/* Product 4 */}
              <div className="w-full max-w-[312px] mx-auto h-auto flex flex-col items-center rounded-md">
                {/* Product Image */}
                <div className="w-full h-[312px] bg-gray-300 rounded-md mb-2">
                  <img
                    className="w-full h-full object-cover rounded-md"
                    src={Feature4.src}
                    alt="Product 4"
                  />
                </div>
                {/* Product Info */}
                <p className="text-lg font-medium text-gray-700">
                  Library Stool Chair
                </p>
                <p className="text-gray-500">$20</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        {/* Main Container */}
        <div className="max-w-[1321px] w-full">
          {/* Top Categories Section */}
          <section className="py-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Top Categories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative rounded-lg w-full max-w-[424px] mx-auto h-[300px] sm:h-[424px] overflow-hidden">
                <img
                  src={TopCategory1.src}
                  alt="Category"
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                  <h3 className="text-lg font-medium">Wing Chair</h3>
                  <p className="text-sm">3,584 Products</p>
                </div>
              </div>
              <div className="relative rounded-lg w-full max-w-[424px] mx-auto h-[300px] sm:h-[424px] overflow-hidden">
                {/* Background Image */}
                <img
                  src={TopCategory2.src}
                  alt="Category"
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                  <h3 className="text-lg font-medium">Wooden Chair</h3>
                  <p className="text-sm">157 Products</p>
                </div>
              </div>
              <div className="relative rounded-lg w-full max-w-[424px] mx-auto h-[300px] sm:h-[424px] overflow-hidden">
                {/* Background Image */}
                <img
                  src={TopCategory3.src}
                  alt="Category"
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                  <h3 className="text-lg font-medium">Desk Chair</h3>
                  <p className="text-sm">154 Products</p>
                </div>
              </div>
            </div>
          </section>

          {/* Explore Styles Section */}
          <section className="py-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Explore New and Popular Styles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 p-4">
              {/* Large Featured Box */}
              <div className="col-span-1 md:col-span-2 bg-gray-300 rounded-lg w-full h-auto">
                <img
                  src={Explore1.src}
                  alt=""
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>

              {/* Smaller Boxes */}
              <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-4">
                <div className="bg-gray-300 rounded-lg w-full h-auto">
                  <img
                    src={Feature1.src}
                    alt=""
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div className="bg-gray-300 rounded-lg w-full h-auto">
                  <img
                    src={Feature2.src}
                    alt=""
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div className="bg-gray-300 rounded-lg w-full h-auto">
                  <img
                    src={Feature3.src}
                    alt=""
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div className="bg-gray-300 rounded-lg w-full h-auto">
                  <img
                    src={Feature4.src}
                    alt=""
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <OurProducts />
    </div>
  );
}
