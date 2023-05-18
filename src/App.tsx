import DashboardInfo from "./components/DashboardInfo";
import Greeting from "./components/Greeting";
import PremiumFeatures from "./components/PremiumFeatures";
import PricingInfo from "./components/PricingInfo";

function App() {
  return (
    <div className="App p-8">
      <header className="App-header font-black">
        <Greeting />
      </header>
      <body className="lg:relative  lg:-mt-32 font-black">
        <DashboardInfo />
        <PremiumFeatures />
        <div className="lg:grid lg:grid-cols-2">
          <PricingInfo
            pricingTier="Free"
            price="0.00"
            features={[
              "Cash Quest!",
              "Dinnertime",
              "Groceries",
              "fmlyChat",
              "To-Do's",
              "Calendar",
              "",
              "",
              "",
              "",
              "",
            ]}
            backgroundColor="bg-[#75BBE2]"
          />
          <PricingInfo
            pricingTier="Premium"
            price="9.99"
            features={[
              "Cash Quest!",
              "Dinnertime",
              "Groceries",
              "fmlyChat",
              "To-Do's",
              "Calendar",
              "Find My fmly",
              "bountyboard",
            ]}
            backgroundColor="bg-[#F59999]"
          />
        </div>

        <div className="bg-white rounded-lg h-2 mt-24 w-[60%] max-w-[800px] m-auto relative"></div>
      </body>
      <footer>
        <div className="flex justify-center items-center mt-8">fmly, LLC.</div>
      </footer>
    </div>
  );
}

export default App;
