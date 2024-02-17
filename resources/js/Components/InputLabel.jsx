export default function InputLabel({ value, className = '', children,required, ...props}) {
    return (
        <label {...props} className={`block font-medium text-sm text-gray-700 ${required && "after:content-['*'] after:ml-0.5 after:text-red-500"}` + className}>
            {value ? value : children}
        </label>
    );
}
