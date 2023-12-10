import Header from "@/components/common/header";
import BalancePage from "@/components/pages/balancePage";
import BalanceWebPage from "@/components/pages/balancePage/balanceGraph";

export default function BalancePageMain() {
    return (
        <>
            <Header />
            <BalancePage />
            <BalanceWebPage />
        </>
    )
}