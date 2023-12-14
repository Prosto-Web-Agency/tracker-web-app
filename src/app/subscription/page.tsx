import Header from "@/components/common/header";
import SubscriptionPage from "@/components/pages/subscription";
import ProtectedRoute from "@/components/common/protectedRoute";
export default function Subscription() {
    return (
        <ProtectedRoute>
            <Header />
            <SubscriptionPage />
        </ProtectedRoute>
    )
}
