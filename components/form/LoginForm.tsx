'use client';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { InputProps } from '../commons/Input';
import Input from '../commons/Input';
import Link from 'next/link';
export const FieldNames = {
    email: 'email',
    password: 'password'
} as const;

export type LoginTypeUnion = (typeof FieldNames)[keyof typeof FieldNames];

const fieldOptions: { [key in LoginTypeUnion]: InputProps } = {
    //각 input에 들어갈 props들을 정의합니다.
    email: {
        id: 'email',
        label: 'Email',
        placeholder: '이메일을 입력하세요',
        validation: {
            required: '이메일을 입력하세요!',
            pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: '올바른 이메일을 입력해주세요.'
            }
        }
    },
    password: {
        id: 'password',
        label: 'Password',
        placeholder: '비밀번호를 입력하세요',
        validation: {
            required: '비밀번호를 잊으셨나요?',
            pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message: '올바른 비밀번호를 입력해주세요.'
            }
        }
    }
};

const LoginForm = () => {
    const form = useForm({ mode: 'onBlur' });

    const handleOnSubmit = () => {
        toast.success('로그인성공');
    };
    return (
        <FormProvider {...form}>
            <form onSubmit={handleOnSubmit} className="w-full flex flex-col">
                <Input {...fieldOptions.email} />
                <Input {...fieldOptions.password} />

                <div className="flex gap-2 mt-4 items-center justify-end">
                    <Link
                        href="/register"
                        className="text-[#cc4e00] text-body1-regular w-1/4 rounded-lg p-3 bg-[#ff91014a] flex justify-center"
                    >
                        <button className="text-center">가입하기</button>
                    </Link>
                    <button className="bg-[#ef5f00] rounded-lg text-white w-1/4 text-body1-regular p-3">
                        로그인
                    </button>
                </div>
            </form>
        </FormProvider>
    );
};

export default LoginForm;
