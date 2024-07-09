import LoginForm from '@/components/form/LoginForm';
import Image from 'next/image';

export default function LoginPage() {
    return (
        <main className="bg-gradient-to-br from-orange-300 to-yellow-100 flex items-center justify-center h-screen relative">
            <Image
                className="top-9 left-12 absolute"
                src="/images/logo.png"
                alt="로고"
                width={160}
                height={50}
            />
            <div className="w-[500px] rounded-xl border border-orange-50 p-6 bg-orange-50/85">
                <p className="text-slate-900 text-h1">Sign in</p>
                <LoginForm />
            </div>
        </main>
    );
}
