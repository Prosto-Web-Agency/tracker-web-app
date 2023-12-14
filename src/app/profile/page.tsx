import Header from "@/components/common/header";
import PersonalOffice from "@/components/pages/personalOffice";
import ProtectedRoute from "@/components/common/protectedRoute";

export default function Profile() {
    return (
        <ProtectedRoute>
            <Header />
            <PersonalOffice />
        </ProtectedRoute>
    )
}
