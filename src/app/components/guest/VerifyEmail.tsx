"use client";
import { LoadingButton } from "@mui/lab";
import { CircularProgress } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function VerifyEmailComponent() {
  const [loading, setLoading] = useState(false);
  const otpfocusRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
  return (
    <>
      <div className="bg-white shadow-md py-8 px-10 rounded-xl flex flex-col items-center relative z-10">
        <div className="flex flex-col items-center gap-y-1 mb-10">
          <h1 className="text-lg font-semibold">Xác thực tài khoản</h1>
          <p className="font-medium text-sm text-gray-500">
            Nhập mã xác thực đã được gửi đến email của bạn
          </p>
          <span className="text-sm text-gray-500">{123}</span>
        </div>
        <Formik
          initialValues={{
            otpCode: "",
          }}
          validateOnChange={false}
          validateOnBlur={false}
          validate={(values) => {
            const errors: {
              otpCode?: string;
            } = {}; // Add type annotation for errors object
            if (!values.otpCode) {
              errors.otpCode = "Vui lòng nhập mã";
              otpfocusRef.current?.focus();
            } else if (values.otpCode.trim().length !== 6) {
              errors.otpCode = "Mã không hợp lệ";
              otpfocusRef.current?.focus();
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
            // router.push("/login");
          }}
        >
          {({ isSubmitting, errors }) => (
            <Form className="w-full flex flex-col ">
              {/* OTP Field */}
              <Field
                disabled={loading}
                className={`rounded-md px-3 py-1.5 mb-2 text-sm  ${
                  loading && "opacity-55"
                } ${errors.otpCode && "border-red-500"} w-full transition-all`}
                type="text"
                name="otpCode"
                innerRef={otpfocusRef}
                placeholder="Mã xác thực"
              />
              <ErrorMessage name="otpCode" component="div">
                {(msg) => (
                  <div className="flex gap-x-1 items-center text-sm mb-4 justify-center text-red-500 animate-appear">
                    <ErrorIcon className="size-5" />
                    {msg}
                  </div>
                )}
              </ErrorMessage>
              <div className="w-full grid place-items-center mb-6">
                <div className="text-[#8E71FF] hover:underline font-medium text-sm text-center cursor-pointer">
                  Chưa nhận được mã? Gửi lại
                </div>
              </div>
              <LoadingButton
                type="submit"
                size="small"
                className={`px-4 py-1 rounded-md
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
                <span className={`${isSubmitting && "text-[#8E71FF]"} pl-4`}>
                  Xác nhận
                </span>
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
}
