"use client";
import { fbIcon, ggIcon, logo } from "@/src/assests";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { LoadingButton } from "@mui/lab";
import { ErrorMessage, Field, Form, Formik } from "formik";
import CircularProgress from "@mui/material/CircularProgress";
import ErrorIcon from "@mui/icons-material/Error";
import ShowHidePassword from "./ShowHidePassword";
import { fbImage, ggImage } from "@/src/constants/imageUrls";
interface LoginProps {
  // Add any props you need for the LoginComponent
}

const LoginComponent: React.FC<LoginProps> = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [fbLoading, setFbLoading] = useState(false);
  const [ggLoading, setGgLoading] = useState(false);
  const emailFocusRef = useRef<HTMLInputElement | null>(null);
  const passwordFocusRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    emailFocusRef.current?.focus();
  }, []);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSocialLogin = (name: string) => {
    if (name === "facebook") {
      setFbLoading(true);
    }
    // Add your social login logic here
    else setGgLoading(true);
    setLoading(true);
  };

  return (
    <>
      <div className="bg-white shadow-md py-8 px-10 rounded-xl flex flex-col items-center gap-y-4 relative z-10 -top-[87px]">
        <div>
          <Link href="/">
            <Image
              width={60}
              height={60}
              className="size-full object-cover object-center z-0"
              src={logo}
              alt="logo"
            ></Image>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-lg font-semibold">Đăng Nhập Tài Khoản</h1>
          <p className="font-medium text-base text-gray-500">
            Chào mừng quý khách quay trở lại !
          </p>
        </div>
        <div className="pt-4 flex gap-x-3 w-full">
          <LoadingButton
            startIcon={
              <Image
                placeholder="blur"
                blurDataURL={fbImage}
                width={30}
                height={30}
                className="size-6 object-cover object-center z-0"
                src={fbImage}
                alt="fb-icon"
              ></Image>
            }
            disabled={loading}
            size="small"
            className={`border border-gray-300 px-4 py-1 space-x-2 rounded-md hover:bg-[rgba(0,0,0,0.1)] ${
              loading && "opacity-55"
            }`}
            onClick={() => handleSocialLogin("facebook")}
            loading={fbLoading}
            loadingPosition="start"
            variant="outlined"
          >
            <span className="text-sm w-24 text-left">Facebook</span>
          </LoadingButton>
          <LoadingButton
            startIcon={
              <Image
                placeholder="blur"
                blurDataURL={ggImage}
                width={30}
                height={30}
                className="size-6 object-cover object-center z-0"
                src={ggImage}
                alt="gg-icon"
              ></Image>
            }
            disabled={loading}
            size="small"
            className={`border border-gray-300 px-4 py-1 space-x-2 rounded-md hover:bg-[rgba(0,0,0,0.1)] ${
              loading && "opacity-55"
            }`}
            onClick={() => handleSocialLogin("google")}
            loading={ggLoading}
            loadingPosition="start"
            variant="outlined"
          >
            <span className="text-sm w-24 text-left">Google</span>
          </LoadingButton>
        </div>
        <div className="w-full flex justify-center items-center">
          <span className="left-right-line text-sm text-center w-full">
            Hoặc
          </span>
        </div>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validateOnChange={false}
          validateOnBlur={false}
          validate={(values) => {
            const errors: { email?: string; password?: string } = {}; // Add type annotation for errors object
            if (!values.email) {
              errors.email = "Vui lòng nhập email";
              emailFocusRef.current?.focus();
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Email không hợp lệ";
              emailFocusRef.current?.focus();
            } else if (!values.password) {
              errors.password = "Vui lòng nhập mật khẩu";
              passwordFocusRef.current?.focus();
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setLoading(true);

            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              setLoading(false);
            }, 3000);
          }}
        >
          {({ isSubmitting, errors }) => (
            <Form className="w-full flex flex-col">
              {/* Email Field */}
              <label
                className="py-1 px-0.5 text-sm font-semibold"
                htmlFor="email"
              >
                Tài khoản
              </label>
              <Field
                disabled={loading}
                className={`rounded-md px-3 py-1.5 mb-3 text-sm font-serif ${
                  loading && "opacity-55"
                } ${errors.email && "border-red-500"} transition-all`}
                type="email"
                name="email"
                placeholder="Nhập tài khoản của bạn..."
                innerRef={emailFocusRef}
              />

              {/* Password Field */}
              <label
                className="py-1 px-0.5 text-sm font-semibold"
                htmlFor="password"
              >
                Mật khẩu
              </label>
              <div className="relative">
                <Field
                  disabled={loading}
                  className={`rounded-md px-3 py-1.5 mb-3 text-sm font-serif ${
                    loading && "opacity-55"
                  } ${
                    errors.password && "border-red-500"
                  } w-full transition-all`}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Nhập mật khẩu của bạn..."
                  innerRef={passwordFocusRef}
                />
                <div
                  className={`absolute right-2 top-1 ${
                    loading && "opacity-55"
                  } `}
                >
                  <ShowHidePassword
                    disabled={loading}
                    showPassword={showPassword}
                    click={handleClickShowPassword}
                    mousedownPassword={handleMouseDownPassword}
                  />
                </div>
              </div>
              <ErrorMessage className="mb-3" name="email" component="div">
                {(msg) => (
                  <div className="border border-red-500 bg-red-100 px-4 py-1 rounded-md">
                    <div
                      className="flex gap-x-2 items-center text-sm justify-center text-red-500 animate-appear
                    "
                    >
                      <ErrorIcon className="size-5" />
                      {msg}
                    </div>
                  </div>
                )}
              </ErrorMessage>

              <LoadingButton
                type="submit"
                size="small"
                className={`mt-2 px-4 py-1 rounded-md
               bg-[#8E71FF] text-white hover:opacity-70 ${
                 loading && "opacity-55"
               } transition-all`}
                loading={isSubmitting}
                loadingIndicator={
                  <CircularProgress className="text-white" size={16} />
                }
                disabled={loading}
                variant="outlined"
              >
                <span className={`${isSubmitting && "text-[#8E71FF]"}`}>
                  Đăng Nhập
                </span>
              </LoadingButton>
            </Form>
          )}
        </Formik>
      </div>
      <div className="bg-[#F7F7F7] shadow-md absolute top-0 bottom-[30px] flex items-end right-0 left-0 rounded-xl">
        <div className="w-full flex gap-x-2 items-center p-4 justify-center text-sm font-medium">
          <span className=" ">Chưa có tài khoản?</span>
          <Link href="/register">
            <span className="text-[#8E71FF] text-base hover:opacity-70 font-semibold">
              Đăng ký
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
