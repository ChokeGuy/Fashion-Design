"use client";
import { LoadingButton } from "@mui/lab";
import { CircularProgress } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import ErrorIcon from "@mui/icons-material/Error";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Link from "next/link";
import ShowHidePassword from "./ShowHidePassword";
import { fbImage, ggImage } from "@/src/constants/imageUrls";
import { useRouter } from "next/navigation";

interface RegisterProps {
  // Add any props you need for the LoginComponent
}

const RegisterComponent: React.FC<RegisterProps> = () => {
  const [loading, setLoading] = useState(false);
  const [fbLoading, setFbLoading] = useState(false);
  const [ggLoading, setGgLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const emailFocusRef = useRef<HTMLInputElement | null>(null);
  const passwordFocusRef = useRef<HTMLInputElement | null>(null);
  const confirmPasswordFocusRef = useRef<HTMLInputElement | null>(null);
  const firstNameFocusRef = useRef<HTMLInputElement | null>(null);
  const lastNameFocusRef = useRef<HTMLInputElement | null>(null);
  const phoneNumberFocusRef = useRef<HTMLInputElement | null>(null);

  const router = useRouter();

  useEffect(() => {
    firstNameFocusRef.current?.focus();
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
      <div className="bg-white shadow-md py-8 px-10 rounded-xl flex flex-col items-center relative z-10">
        <div className="flex flex-col items-center">
          <h1 className="text-lg font-semibold">Đăng Ký Tài Khoản</h1>
          <p className="font-medium text-base text-gray-500">
            Chào mừng! Điền thông tin để tạo tài khoản.
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
        <div className="pt-4 w-full flex justify-center items-center">
          <span className="left-right-line text-sm text-center w-full">
            Hoặc
          </span>
        </div>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validateOnChange={false}
          validateOnBlur={false}
          validate={(values) => {
            const errors: {
              firstName?: string;
              lastName?: string;
              phoneNumber?: string;
              email?: string;
              password?: string;
              confirmPassword?: string;
            } = {}; // Add type annotation for errors object
            if (!values.firstName) {
              errors.firstName = "Vui lòng nhập họ";
              firstNameFocusRef.current?.focus();
              return errors;
            }
            if (!values.lastName) {
              errors.lastName = "Vui lòng nhập tên";
              lastNameFocusRef.current?.focus();
              return errors;
            }
            if (!values.phoneNumber) {
              errors.phoneNumber = "Vui lòng nhập số điện thoại";
              phoneNumberFocusRef.current?.focus();
              return errors;
            } else if (!/^(0)\d{9}$/i.test(values.phoneNumber)) {
              errors.phoneNumber = "Số điện thoại không hợp lệ";
              phoneNumberFocusRef.current?.focus();
              return errors;
            }
            if (!values.email) {
              errors.email = "Vui lòng nhập email";
              emailFocusRef.current?.focus();
              return errors;
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Email không hợp lệ";
              emailFocusRef.current?.focus();
              return errors;
            }
            if (!values.password) {
              errors.password = "Vui lòng nhập mật khẩu";
              passwordFocusRef.current?.focus();
              return errors;
            } else {
              if (values.password.length < 8) {
                errors.password = "Mật khẩu phải có ít nhất 8 ký tự";
                passwordFocusRef.current?.focus();
                return errors;
              }
              if (!/[a-z]/.test(values.password)) {
                errors.password = "Mật khẩu phải chứa ít nhất 1 ký tự thường";
                passwordFocusRef.current?.focus();
                return errors;
              }
              if (!/[A-Z]/.test(values.password)) {
                errors.password = "Mật khẩu phải chứa ít nhất 1 ký tự hoa";
                passwordFocusRef.current?.focus();
                return errors;
              }
              if (!/\d/.test(values.password)) {
                errors.password = "Mật khẩu phải chứa ít nhất 1 chữ số";
                passwordFocusRef.current?.focus();
                return errors;
              }
              if (!/[@$!%*?&]/.test(values.password)) {
                errors.password = "Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt";
                passwordFocusRef.current?.focus();
                return errors;
              }
            }
            if (!values.confirmPassword) {
              errors.confirmPassword = "Vui lòng xác nhận mật khẩu";
              confirmPasswordFocusRef.current?.focus();
              return errors;
            } else if (values.confirmPassword !== values.password) {
              errors.confirmPassword = "Mật khẩu không khớp";
              confirmPasswordFocusRef.current?.focus();
              return errors;
            }
          }}
          onSubmit={(values, { setSubmitting }) => {
            setLoading(true);

            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              setLoading(false);
            }, 3000);
            router.push("/register/verify-email");
          }}
        >
          {({ isSubmitting, errors }) => (
            <Form className="w-full flex flex-col ">
              {/* firstName and lastName Field */}
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <label
                    className="py-1 px-0.5 text-sm font-semibold"
                    htmlFor="firstName"
                  >
                    Họ
                  </label>
                  <Field
                    disabled={loading}
                    className={`rounded-md px-3 py-1.5 mb-3 text-sm ${
                      loading && "opacity-55"
                    } ${errors.firstName && "border-red-500"} transition-all`}
                    type="text"
                    name="firstName"
                    placeholder="Họ"
                    innerRef={firstNameFocusRef}
                  />
                  <ErrorMessage
                    className="mb-3"
                    name="firstName"
                    component="div"
                  >
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
                </div>

                <div className="flex flex-col">
                  <label
                    className="py-1 px-0.5 text-sm font-semibold"
                    htmlFor="lastName"
                  >
                    Tên
                  </label>
                  <Field
                    disabled={loading}
                    className={`rounded-md px-3 py-1.5 mb-3 text-sm ${
                      loading && "opacity-55"
                    } ${errors.lastName && "border-red-500"} transition-all`}
                    type="text"
                    name="lastName"
                    placeholder="Tên"
                    innerRef={lastNameFocusRef}
                  />
                  <ErrorMessage
                    className="mb-3"
                    name="lastName"
                    component="div"
                  >
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
                </div>
              </div>

              {/* phoneNumber Field */}
              <label
                className="py-1 px-0.5 text-sm font-semibold"
                htmlFor="phoneNumber"
              >
                Số điện thoại
              </label>
              <Field
                disabled={loading}
                className={`rounded-md px-3 py-1.5 mb-3 text-sm ${
                  loading && "opacity-55"
                } ${errors.phoneNumber && "border-red-500"} transition-all`}
                type="text"
                name="phoneNumber"
                placeholder="Số điện thoại"
                innerRef={phoneNumberFocusRef}
              />
              <ErrorMessage className="mb-3" name="phoneNumber" component="div">
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
                placeholder="Nhập tài khoản"
                innerRef={emailFocusRef}
              />
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
                  className={`rounded-md px-3 py-1.5 mb-3 text-sm font-serif  ${
                    loading && "opacity-55"
                  } ${
                    errors.password && "border-red-500"
                  } w-full transition-all`}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Nhập mật khẩu"
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
              <ErrorMessage name="password" component="div">
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

              {/* Confirm Password Field */}
              <label
                className="py-1 px-0.5 text-sm font-semibold"
                htmlFor="confirmPassword"
              >
                Xác Nhận Mật khẩu
              </label>
              <Field
                disabled={loading}
                className={`rounded-md px-3 py-1.5 mb-3 text-sm font-serif  ${
                  loading && "opacity-55"
                } ${
                  errors.confirmPassword && "border-red-500"
                } w-full transition-all`}
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Xác nhận mật khẩu"
                innerRef={confirmPasswordFocusRef}
              />
              <ErrorMessage name="confirmPassword" component="div">
                {(msg) => (
                  <div className="border border-red-500 bg-red-100 px-4 py-1 rounded-md mb-1">
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
                <div className="flex items-center justify-center">
                  <span className={`${isSubmitting && "text-[#8E71FF]"} pl-4`}>
                    Đăng Ký
                  </span>
                  <ArrowRightIcon
                    className={`text-white size-5 ${
                      isSubmitting && "hidden"
                    } transition-all`}
                  />
                </div>
              </LoadingButton>
            </Form>
          )}
        </Formik>
      </div>
      <div className="w-full flex gap-x-2 items-center p-4 justify-center text-sm font-medium text-white">
        <span>Đã có tài khoản?</span>
        <Link href="/login">
          <span className="text-base hover:opacity-70 font-semibold">
            Đăng nhập
          </span>
        </Link>
      </div>
    </>
  );
};

export default RegisterComponent;
