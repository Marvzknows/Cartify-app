import { HTMLAttributes, ReactNode } from "react";

type InputFieldType = {
    label?: string,
    error?: string,
    type: "text" | "number" | "password",
    placeholder?: string,
    icon?: ReactNode,
    value: string,
    // handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void 
}

const InputField = (props: InputFieldType & HTMLAttributes<HTMLInputElement>) => {

    const { label, error, type, placeholder, icon, value, ...otherProps } = props;

    return (
      <form className="flex flex-col gap-1 w-full md:w-64">
        <label
          className="text-slate-900 w-full text-xs font-medium pl-1"
          htmlFor={otherProps.id}
        >
          {label}
        </label>
        <div className="flex border border-slate-200 rounded">
          <input
            className={`p-2 text-xs rounded rounded-r-none w-full`}
            type={type}
            value={value}
            placeholder={placeholder}
            {...otherProps}
          />
          <button
            disabled
            type="submit"
            className="bg-light px-3 rounded rounded-l-none cursor-pointer"
          >
            {icon}
          </button>
        </div>
      </form>
    );
}

export default InputField;