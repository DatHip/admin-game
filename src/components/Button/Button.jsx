import IconSpinner from "../../asset/icon/IconSpinner.jsx";
import React, { memo } from "react";

const Button = memo(
  ({
    type = "button",
    children,
    className = "",
    loading = false,
    disabled = false,
    onClick = () => {},
  }) => {
    return (
      <button
        type={type}
        className={
          className +
          " flex justify-center items-center relative disabled:opacity-80"
        }
        disabled={loading || disabled}
        onClick={onClick}
      >
        {loading && (
          <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full h-full">
            <IconSpinner></IconSpinner>
          </div>
        )}

        <p className={`${loading ? "invisible" : "visible"} transition-none`}>
          {children}
        </p>
      </button>
    );
  }
);

export default Button;
