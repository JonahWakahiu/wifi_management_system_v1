import DetailsSection from "./DetailsSection";
import LoginSection from "./LoginSection";
import PackagesSection from "./PackagesSection";
import ReconnectSection from "./ReconnectSection";
import VoucherSection from "./VoucherSection";
import "./styles.scss";

const MainSection = () => {
  return (
    <main className="main">
      <DetailsSection />
      <PackagesSection />
      <ReconnectSection />
      <VoucherSection />
      <LoginSection />
    </main>
  );
};
export default MainSection;
