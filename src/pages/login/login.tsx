import { TbPhone, TbUser, TbLock } from "react-icons/tb";
import { FiEye, FiEyeOff, FiCheck } from "react-icons/fi";
import React, { useState } from "react";
import FormImg from
const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-400">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md relative">

        <div
          className="absolute top-0 left-0 w-full h-16 bg-orange-400 rounded-t-lg"
          style={{ clipPath: "ellipse(70% 100% at 50% 0)" }}
        ></div>

        <div className="relative mt-8">
          <div className="text-textcolor hover:text-secondary">
            <div className="flex items-center ">
              <TbPhone size={24} className=" mr-2" />
              <label htmlFor="phone" className="text-xs  font-bold mb-2">
                НОМЕР ТЕЛЕФОНА
              </label>
            </div>
            <div className="relative mb-6">
              <input
                type="text"
                id="phone"
                placeholder="+998 99 880 80-80 "
                className="block w-full border-b focus:outline-none text-sm px-2 py-1"
              />
              <FiCheck
                size={20}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-500"
              />
            </div>
          </div>

          <div className="text-textcolor hover:text-secondary">
            <div className="flex items-center mb-4">
              <TbUser size={24} className=" mr-2" />
              <label htmlFor="name" className="text-xs ">
                ИМЯ
              </label>
            </div>
            <div className="relative mb-6">
              <input
                type="text"
                id="name"
                placeholder="Введите ваше имя"
                className="block w-full border-b border-gray-300 focus:border-orange-600 focus:outline-none text-sm px-2 py-1"
              />
            </div>
          </div>

          <div className="text-textcolor hover:text-secondary">
            <div className="flex items-center mb-4">
              <TbLock size={24} className="text-gray-500 mr-2" />
              <label htmlFor="password" className="text-xs text-gray-500">
                ПАРОЛЬ
              </label>
            </div>
            <div className="relative mb-6">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Пароль"
                className="block w-full border-b border-gray-300 focus:border-orange-600 focus:outline-none text-sm px-2 py-1"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>
          <div className="text-textcolor hover:text-secondary">
            <div className="flex items-center mb-4 ">
              <TbLock size={24} className="text-red-500 mr-2" />
              <label
                htmlFor="confirmPassword"
                className="text-xs text-red-500 font-bold"
              >
                ПОДТВЕРЖДЕНИЕ ПАРОЛЯ
              </label>
            </div>
            <div className="relative mb-6 ">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder="Подтвердите пароль"
                className="block w-full border-b border-gray-300 focus:border-orange-600 focus:outline-none text-sm px-2 py-1"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-[154px] bg-secondary font-medium text-center rounded-[5px] mt-[30px]"
          >
            Далее
          </button>

          <div className="mt-4 text-center text-sm text-gray-500">
            Уже есть аккаунт?{" "}
            <a href="#" className="text-secondary font-semibold">
              Войти
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
