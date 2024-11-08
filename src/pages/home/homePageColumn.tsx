import { HiOutlineHeart } from "react-icons/hi2";
import products from "./data";
import allProducts from "./alldata";
import { FC } from "react";
type Product = {
	id: number;
	img: string;
	isLiked: boolean;
	title: string;
	price: string;
};
const HomePageColumn: FC = () => {
	return (
		<div className="">
			<div>
				<ul className=" gap-10 flex flex-col">
					{products.map((product: Product) => (
						<li key={product.id} className=" flex shadow-lg relative max-w-[1400px] bg-[white]">
							<div>
								<img className="w-[290px] h-[200px] rounded-l-[10px]" src={product.img} alt="" />
							</div>
							<div className=" px-10">
								<div className="flex items-center mb-[57px] justify-between w-[1075px]">
									<h2 className="font-normal text-[22px] text-primary mt-4">{product.title}</h2>
									<p className="text-2xl">
										<HiOutlineHeart />
									</p>
								</div>

								<div className="flex justify-between"></div>

								<div className="flex items-center justify-between">
									<div className="flex items-center gap-2">
										<img src="./sofa_img.svg" alt="img" />
										<p className="text-base text-[#999] font-normal">10</p>
										<img src="./Area_icon.svg" alt="img" />
										<p className="text-base text-[#999] font-normal">
											60M<sup>2</sup>
										</p>
										<img src="./brush.svg" alt="img" />
										<p className="text-base text-[#999] font-normal">Евроремонт</p>
									</div>
									<p className="font-light text-2xl text-third">{product.price}</p>
								</div>

								<div className="flex items-center justify-between mt-4 mb-[17px]">
									<p className="text-primary text-xs font-normal">
										г.Ташкент, Юнусабадский р-н, ул.Янгишахар
									</p>

									<div className="gap-[43px] flex items-center">
										<div className="flex items-center gap-[6px]">
											<img src="eye_icon.svg" alt="img" />
											<p className="text-base text-[#999] font-normal">12983</p>
										</div>
										<p className="text-base text-[#999] font-normal">
											Опубликовано 22:38 25-Окт 2021
										</p>
									</div>
								</div>
							</div>
							<div>
								<span className="w-[10px] h-[200px] bg-secondary block rounded-br-[10px] rounded-r-[10px]  absolute right-[-7px]"></span>
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
						<option className="font-medium text-primary text-sm" value="expensive">
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
				<ul className=" gap-10 flex flex-col">
					{allProducts.map((product: Product) => (
						<li
							key={product.id}
							className=" flex shadow-lg relative max-w-[1400px] bg-[white] rounded-[10px]"
						>
							<div>
								<img className="w-[250px] h-[200px] rounded-l-[10px]" src={product.img} alt="" />
							</div>
							<div className=" px-10">
								<div className="flex items-center mb-[57px] justify-between w-[1075px]">
									<h2 className="font-normal text-[22px] text-primary mt-4">{product.title}</h2>
									<p className="text-2xl">
										<HiOutlineHeart />
									</p>
								</div>

								<div className="flex justify-between"></div>

								<div className="flex items-center justify-between">
									<div className="flex items-center gap-2">
										<img src="./sofa_img.svg" alt="img" />
										<p className="text-base text-[#999] font-normal">10</p>
										<img src="./Area_icon.svg" alt="img" />
										<p className="text-base text-[#999] font-normal">
											60M<sup>2</sup>
										</p>
										<img src="./brush.svg" alt="img" />
										<p className="text-base text-[#999] font-normal">Евроремонт</p>
									</div>
									<p className="font-light text-2xl text-third">{product.price}</p>
								</div>

								<div className="flex items-center justify-between mt-4 mb-[17px]">
									<p className="text-primary text-xs font-normal">
										г.Ташкент, Юнусабадский р-н, ул.Янгишахар
									</p>

									<div className="gap-[43px] flex items-center">
										<div className="flex items-center gap-[6px]">
											<img src="eye_icon.svg" alt="img" />
											<p className="text-base text-[#999] font-normal">12983</p>
										</div>
										<p className="text-base text-[#999] font-normal">
											Опубликовано 22:38 25-Окт 2021
										</p>
									</div>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default HomePageColumn;
