import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                'border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-none file:text-sm file:font-semibold file:shadow-none file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 focus:file:border-transparent active:border-transparent shadow-sm' +
                className
            }
            ref={input}
        />
    );
});
