import React from "react";
import Feature1 from "../Images/FeatureProduct1.png";
import Feature2 from "../Images/FeatureProduct2.png";
import Feature3 from "../Images/Explore1.png";
import Feature4 from "../Images/FeatureProduct4.png";
import Feature5 from "../Images/TopCategory1.png";
import Feature6 from "../Images/Image (1).png";
import Feature7 from "../Images/Feature7.png";
import Feature8 from "../Images/FeatureProduct1.png";
import News1 from "../Images/TopCategory2.png";
import News2 from "../Images/TopCategory1.png";
import News3 from "../Images/FeatureProduct2.png";
function page() {
  return (
    <div>
      {/* Row 1 */}
      <div className="flex justify-center mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Product Card 1 */}
          <div className="w-[312px] h-[388px] flex flex-col bg-white rounded-lg shadow-lg hover:scale-105 transition-transform overflow-hidden">
            {/* Image Section */}
            <div className="w-full h-[312px] bg-yellow-200 rounded-t-lg">
              <img
                src={Feature1.src}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            {/* Content Section */}
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg font-medium">Library Stool Chair</h3>
                <p className="text-xl font-bold">$20</p>
                <p className="line-through text-sm text-gray-500">$39</p>
              </div>
              <div className="w-10 h-10 bg-gray-400 rounded-full self-end mt-2"></div>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="w-[312px] h-[388px] flex flex-col bg-white rounded-lg shadow-lg hover:scale-105 transition-transform overflow-hidden">
            <div className="w-full h-[312px] bg-blue-200 rounded-t-lg">
              <img
                src={Feature2.src}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg font-medium">Library Stool Chair</h3>
                <p className="text-xl font-bold">$20</p>
                <p className="line-through text-sm text-gray-500">$39</p>
              </div>
              <div className="w-10 h-10 bg-gray-400 rounded-full self-end mt-2"></div>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="w-[312px] h-[388px] flex flex-col bg-white rounded-lg shadow-lg hover:scale-105 transition-transform overflow-hidden">
            <div className="w-full h-[312px] bg-green-200 rounded-t-lg">
              <img
                src={Feature3.src}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg font-medium">Library Stool Chair</h3>
                <p className="text-xl font-bold">$20</p>
                <p className="line-through text-sm text-gray-500">$39</p>
              </div>
              <div className="w-10 h-10 bg-gray-400 rounded-full self-end mt-2"></div>
            </div>
          </div>

          {/* Product Card 4 */}
          <div className="w-[312px] h-[388px] flex flex-col bg-white rounded-lg shadow-lg hover:scale-105 transition-transform overflow-hidden">
            <div className="w-full h-[312px] bg-red-200 rounded-t-lg">
              <img
                src={Feature4.src}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg font-medium">Library Stool Chair</h3>
                <p className="text-xl font-bold">$20</p>
                <p className="line-through text-sm text-gray-500">$39</p>
              </div>
              <div className="w-10 h-10 bg-gray-400 rounded-full self-end mt-2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Product Card 1 */}
          <div className="w-[312px] h-[388px] flex flex-col bg-white rounded-lg shadow-lg hover:scale-105 transition-transform overflow-hidden">
            {/* Image Section */}
            <div className="w-full h-[312px] bg-yellow-200 rounded-t-lg">
              <img
                src={Feature5.src}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            {/* Content Section */}
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg font-medium">Library Stool Chair</h3>
                <p className="text-xl font-bold">$20</p>
                <p className="line-through text-sm text-gray-500">$39</p>
              </div>
              <div className="w-10 h-10 bg-gray-400 rounded-full self-end mt-2"></div>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="w-[312px] h-[388px] flex flex-col bg-white rounded-lg shadow-lg hover:scale-105 transition-transform overflow-hidden">
            <div className="w-full h-[312px] bg-blue-200 rounded-t-lg">
              <img
                src={Feature6.src}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg font-medium">Library Stool Chair</h3>
                <p className="text-xl font-bold">$20</p>
                <p className="line-through text-sm text-gray-500">$39</p>
              </div>
              <div className="w-10 h-10 bg-gray-400 rounded-full self-end mt-2"></div>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="w-[312px] h-[388px] flex flex-col bg-white rounded-lg shadow-lg hover:scale-105 transition-transform overflow-hidden">
            <div className="w-full h-[312px] bg-green-200 rounded-t-lg">
              <img
                src={Feature7.src}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg font-medium">Library Stool Chair</h3>
                <p className="text-xl font-bold">$20</p>
                <p className="line-through text-sm text-gray-500">$39</p>
              </div>
              <div className="w-10 h-10 bg-gray-400 rounded-full self-end mt-2"></div>
            </div>
          </div>

          {/* Product Card 4 */}
          <div className="w-[312px] h-[388px] flex flex-col bg-white rounded-lg shadow-lg hover:scale-105 transition-transform overflow-hidden">
            <div className="w-full h-[312px] bg-red-200 rounded-t-lg">
              <img
                src={Feature8.src}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg font-medium">Library Stool Chair</h3>
                <p className="text-xl font-bold">$20</p>
                <p className="line-through text-sm text-gray-500">$39</p>
              </div>
              <div className="w-10 h-10 bg-gray-400 rounded-full self-end mt-2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Product Card 1 */}
          <div className="w-[312px] h-[388px] flex flex-col bg-white rounded-lg shadow-lg hover:scale-105 transition-transform overflow-hidden">
            {/* Image Section */}
            <div className="w-full h-[312px] bg-yellow-200 rounded-t-lg">
              <img
                src={Feature1.src}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            {/* Content Section */}
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg font-medium">Library Stool Chair</h3>
                <p className="text-xl font-bold">$20</p>
                <p className="line-through text-sm text-gray-500">$39</p>
              </div>
              <div className="w-10 h-10 bg-gray-400 rounded-full self-end mt-2"></div>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="w-[312px] h-[388px] flex flex-col bg-white rounded-lg shadow-lg hover:scale-105 transition-transform overflow-hidden">
            <div className="w-full h-[312px] bg-blue-200 rounded-t-lg">
              <img
                src={Feature2.src}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg font-medium">Library Stool Chair</h3>
                <p className="text-xl font-bold">$20</p>
                <p className="line-through text-sm text-gray-500">$39</p>
              </div>
              <div className="w-10 h-10 bg-gray-400 rounded-full self-end mt-2"></div>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="w-[312px] h-[388px] flex flex-col bg-white rounded-lg shadow-lg hover:scale-105 transition-transform overflow-hidden">
            <div className="w-full h-[312px] bg-green-200 rounded-t-lg">
              <img
                src={Feature3.src}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg font-medium">Library Stool Chair</h3>
                <p className="text-xl font-bold">$20</p>
                <p className="line-through text-sm text-gray-500">$39</p>
              </div>
              <div className="w-10 h-10 bg-gray-400 rounded-full self-end mt-2"></div>
            </div>
          </div>

          {/* Product Card 4 */}
          <div className="w-[312px] h-[388px] flex flex-col bg-white rounded-lg shadow-lg hover:scale-105 transition-transform overflow-hidden">
            <div className="w-full h-[312px] bg-red-200 rounded-t-lg">
              <img
                src={Feature4.src}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg font-medium">Library Stool Chair</h3>
                <p className="text-xl font-bold">$20</p>
                <p className="line-through text-sm text-gray-500">$39</p>
              </div>
              <div className="w-10 h-10 bg-gray-400 rounded-full self-end mt-2"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center px-4 md:px-8 lg:px-16 bg-gray-50 py-16">
        {/* Main Container */}
        <div className="max-w-[1321px] w-full text-center">
          {/* Subscribe Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Or Subscribe To The Newsletter
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <input
                type="email"
                placeholder="Email Address..."
                className="w-full md:w-[400px] px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Submit
              </button>
            </div>
          </section>

          {/* Instagram Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Follow Products And Discounts On Instagram
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {/* Placeholder Boxes */}
              <div className="bg-gray-300 rounded-md w-full h-[150px] md:h-[200px]">
                <img className="w-full h-full" src={News1.src} alt="" />
              </div>
              <div className="bg-gray-300 rounded-md w-full h-[150px] md:h-[200px]">
                <img className="w-full h-full" src={News2.src} alt="" />
              </div>
              <div className="bg-gray-300 rounded-md w-full h-[150px] md:h-[200px]">
                <img className="w-full h-full" src={News3.src} alt="" />
              </div>
              <div className="bg-gray-300 rounded-md w-full h-[150px] md:h-[200px]">
                <img className="w-full h-full" src={Feature1.src} alt="" />
              </div>
              <div className="bg-gray-300 rounded-md w-full h-[150px] md:h-[200px]">
                <img className="w-full h-full" src={Feature3.src} alt="" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default page;
