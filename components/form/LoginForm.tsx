'use client';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { InputProps } from '../commons/Input';
import Input from '../commons/Input';

export const FieldNames = {
    email: 'email',
    password: 'password'
} as const;

export type LoginTypeUnion = (typeof FieldNames)[keyof typeof FieldNames];

const fieldOptions: { [key in LoginTypeUnion]: InputProps } = {
    //각 input에 들어갈 props들을 정의합니다.
    email: {
        id: 'email',
        label: '이메일',
        placeholder: '이메일을 입력하세요',
        validation: {
            required: '이메일을 입력하세요!'
        }
    },
    password: {
        id: 'password',
        label: '패스워드',
        placeholder: '비밀번호를 입력하세요',
        validation: {
            required: '이메일을 입력하세요!'
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
            <form onSubmit={handleOnSubmit}>
                <Input {...fieldOptions.email} />
                <Input {...fieldOptions.password} />
                <button className="bg-red-500 p-4 text-white">로그인</button>
            </form>
        </FormProvider>
    );
};

export default LoginForm;
