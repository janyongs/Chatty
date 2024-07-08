import { useFormContext, RegisterOptions } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label?: string;
    placeholder?: string;
    type?: string;
    readOnly?: boolean;
    validation?: RegisterOptions;
    inputStyle?: string;
    errorStyle?: string;
}

const Input = ({
    id,
    label,
    placeholder = '',
    type = 'text',
    readOnly = false,
    validation,
    errorStyle,
    inputStyle,
    ...rest
}: InputProps) => {
    const {
        register,
        formState: { errors }
    } = useFormContext();

    function getClassName(): string {
        let result = `w-full px-[12px] h-[50px] rounded-[5px] outline-none text-[16px] ${inputStyle}`;

        if (readOnly) result += ' ' + 'bg-[#f2f4f7] cursor-not-allowed ';
        else result += ' ' + 'text-[#333] border border-[#e1e2e3] focus:border-blue1';

        return result;
    }

    return (
        <div>
            {label ? (
                <div className="mb-[7px] mt-[17px] ">
                    <label className="font-semi-bold text-[#888] text-[14px]" htmlFor={id}>
                        {label}
                    </label>
                </div>
            ) : null}
            <div className="flex items-center mb-[8px]">
                <input
                    {...register(id, validation)}
                    {...rest}
                    type={type}
                    name={id}
                    id={id}
                    readOnly={readOnly}
                    className={getClassName()}
                    placeholder={placeholder}
                />
            </div>
            <ErrorMessage
                errors={errors}
                name={id}
                render={({ message }) => (
                    <p className={`text-red-600 text-[13px] mb-[8px] ${errorStyle}`}>{message}</p>
                )}
            />
        </div>
    );
};

export default Input;
