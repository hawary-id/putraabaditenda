import { Link } from "@inertiajs/react";

export default function PrimaryButton({ href, className, disabled, children, ...props }) {
    if (href) {
      return (
        <Link
          href={href}
          className={`text-center items-center px-4 py-2 shadow-md bg-blue-600 text-white rounded-md font-semibold uppercase tracking-widest hover:text-white focus:text-white active:text-white hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition ease-in-out duration-150 ${
            disabled ? 'opacity-25 cursor-not-allowed' : 'hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800'
          } ${className}`}
          disabled={disabled}
        >
          {children}
        </Link>
      );
    } else {
      return (
        <button
          {...props}
          className={`text-center items-center px-4 py-2 shadow-md bg-blue-600 text-white rounded-md font-semibold uppercase tracking-widest hover:text-white focus:text-white active:text-white hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition ease-in-out duration-150 ${
            disabled ? 'opacity-25 cursor-not-allowed' : 'hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800'
          } ${className}`}
          disabled={disabled}
        >
          {children}
        </button>
      );
    }
  }
  