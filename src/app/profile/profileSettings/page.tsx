import Header from "@/components/common/header";
import ProfileSettingsComponent from "@/components/pages/ProfileSettingsComponent";
import 'animate.css';
import ProtectedRoute from "@/components/common/protectedRoute";

export default function ProfileSettings() {
    return (
        <ProtectedRoute>
            <div className="flex flex-col">
                <Header />
                <div className="h-[calc(100vh-100px)] s_lg:h-[calc(100vh-75px)] bg-bg-gray rounded-t-9 s_lg:rounded-[0] w-screen flex justify-center  items-center">
                    <ProfileSettingsComponent />
                </div>
            </div>
        </ProtectedRoute>
    )
}
