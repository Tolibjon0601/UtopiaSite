
import { HiOutlineHeart } from 'react-icons/hi2';
import allProducts from './alldata';
import products from './data';
import { FC } from 'react';
type Product = {
  id: number;
  img: string;
  isLiked: boolean;
  title: string;
  price: string;
};
const HomePageRow :FC= () => {
  return (
    <div className=''>
        <div>
        <ul className="flex flex-wrap gap-[52px] mx-auto ">
          {products.map((product: Product) => (
            <li key={product.id} className="max-w-[390px] shadow-lg relative">
              <div>
                <img className="" src={product.img} alt="" />
              </div>
              <div className="p-4">
                <h2 className="font-normal text-[22px] text-primary mb-7">
                  {product.title}
                </h2>
                <div className="flex justify-between">
                  <p className="font-light text-2xl text-third">
                    {product.price}
                  </p>
                  <p className="text-2xl">
                    <HiOutlineHeart />
                  </p>
                </div>

                <div className="flex justify-between items-center mt-8">
                  <div className="flex items-center gap-2">
                    <img src="./sofa_img.svg" alt="img" />
                    <p className="text-base text-[#999] font-normal">10</p>
                    <img src="./Area_icon.svg" alt="img" />
                    <p className="text-base text-[#999] font-normal">
                      60M<sup>2</sup>
                    </p>
                    <img src="./brush.svg" alt="img" />
                    <p className="text-base text-[#999] font-normal">
                      Евроремонт
                    </p>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <img src="eye_icon.svg" alt="img" />
                    <p className="text-base text-[#999] font-normal">12983</p>
                  </div>
                </div>
                <div className=" flex justify-between items-center mt-5 mb-4">
                  <p className="text-primary text-xs font-normal">
                    г.Ташкент, Юнусабадский р-н, ул.Янгишахар
                  </p>
                  <p className="text-base text-[#999] font-normal">
                    22:38 25-Окт
                  </p>
                </div>
              </div>
              <div>
                <span className="w-[10px] h-[390px] bg-secondary block rounded-br-[10px] rounded-r-[10px] rotate-90 absolute left-[190px] top-[280px]"></span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="my-[68px] flex justify-between ">
        <h1 className="font-medium text-3xl  text-primary flex items-center gap-4">
          {" "}
          Все объявления
        </h1>
        <div className="flex gap-[30px]">
          <select id="category">
            <option className="font-medium text-primary text-sm" value="new">
              Самые новые
            </option>
            <option className="font-medium text-primary text-sm" value="modern">
              Самые дешевые
            </option>
            <option
              className="font-medium text-primary text-sm"
              value="expensive"
            >
              Самые дорогие
            </option>
          </select>
          <select id="category" className="font-medium text-textcolor text-sm">
            <option value="modern">Самые дешевые</option>
            <option value="new">Самые новые</option>
            <option value="expensive">Самые дорогие</option>
          </select>
          <select id="category" className="font-medium text-textcolor text-sm">
            <option value="expensive">Самые дорогие</option>
            <option value="new">Самые новые</option>
            <option value="modern">Самые дешевые</option>
          </select>
        </div>
      </div>
      <div>
        <ul className="flex flex-wrap gap-[52px] mx-auto ">
          {allProducts.map((product: Product) => (
            <li
              key={product.id}
              className="max-w-[390px] shadow-lg relative rounded-[10px]"
            >
              <div>
                <img className="" src={product.img} alt="" />
              </div>
              <div className="p-4">
                <h2 className="font-normal text-[22px] text-primary mb-7">
                  {product.title}
                </h2>
                <div className="flex justify-between">
                  <p className="font-light text-2xl text-third">
                    {product.price}
                  </p>
                  <p className="text-2xl">
                    <HiOutlineHeart />
                  </p>
                </div>

                <div className="flex justify-between items-center mt-8">
                  <div className="flex items-center gap-2">
                    <img src="./sofa_img.svg" alt="img" />
                    <p className="text-base text-[#999] font-normal">10</p>
                    <img src="./Area_icon.svg" alt="img" />
                    <p className="text-base text-[#999] font-normal">
                      60M<sup>2</sup>
                    </p>
                    <img src="./brush.svg" alt="img" />
                    <p className="text-base text-[#999] font-normal">
                      Евроремонт
                    </p>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <img src="eye_icon.svg" alt="img" />
                    <p className="text-base text-[#999] font-normal">12983</p>
                  </div>
                </div>
                <div className=" flex justify-between items-center mt-5 mb-[26px]">
                  <p className="text-primary text-xs font-normal">г.Ташкент</p>
                  <p className="text-base text-[#999] font-normal">
                    22:38 25-Окт
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default HomePageRow
