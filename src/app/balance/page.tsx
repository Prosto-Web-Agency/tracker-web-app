import Header from "@/components/common/header";
import BalancePage from "@/components/pages/balancePage";
import BalanceWebPage from "@/components/pages/balancePage/balanceGraph";
import ProtectedRoute from "@/components/common/protectedRoute";

export default function Balance() {
    return (
        <ProtectedRoute>
            <Header />
            <BalancePage />
            <BalanceWebPage />
        </ProtectedRoute>
    )
}
