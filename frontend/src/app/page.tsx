import DeployerContrac from "../components/DeployerContrac";
import FundEscrow from "../components/FundEscrow";

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-gray-100 flex items-center justify-center">
      <div className="flex justify-center items-center space-x-8"> {/* Adds space between components */}
        <DeployerContrac />
        <FundEscrow />
      </div>
    </div>
  );
  
}
