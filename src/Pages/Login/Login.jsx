import { useEffect } from 'react';
import OnBoardingLayout from '../../layouts/OnBoardingLayout';
import LeftSide from './Content/LeftSide';
import RightSide from './Content/RightSide';

export default function Login() {



    const title = "Login | Smart School Management System";

    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <OnBoardingLayout>
            <div className="flex min-h-screen dark:bg-gray-900">
                {/* Left Side - Info Panel */}
                <LeftSide />
                {/* Right Side - Login Panel */}
                <RightSide />
            </div >
        </OnBoardingLayout>

    )
}
