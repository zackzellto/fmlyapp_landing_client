import DashboardMockup from "../assets/DashboardMockup.png";
import CollapsibleCard from "./FeatureDropdown";

const DashboardInfo = () => {
  return (
    <div className="items-center bg-[#4af0dafa] justify-center lg:-mt-[500px]">
      <h1 className="text-2xl underline text-center p-8">Dashboard Info</h1>
      <div className="bg-white rounded-lg h-2 w-[60%] max-w-[800px] lg:-mt-64 mb-8  m-auto relative"></div>
      <div className="container p-8 drop-shadow-xl bg-purple-400 shadow-xl rounded-lg m-auto min-h-screen">
        <div className="row">
          <div className="col-12">
            <img
              className="m-auto w-[85%] relative lg:bottom-[-200px] lg:right-64 md:w-[60%] lg:w-[40%] xl:w-[30%] drop-shadow-2xl py-8"
              src={DashboardMockup}
              alt="Dashboard Mockup"
            />
            <div className="grid grid-cols-1 relative lg:top-[-450px]">
              <div className="text-white drop-shadow-lg max-w-md m-auto relative lg:left-[245px] xl:left-[310px] 2xl:left-[380px] lg:text-2xl text-center underline font-semibold">
                Included features are:
              </div>
              <div className="mt-8">
                <CollapsibleCard
                  title="Dinnertime!"
                  content="dinnertime allows for families to come together to provide input on what sounds good for family meals.

              Share recipes, images, or full articles to decide what’s for dinner!
              
              Helping cook or prepare is also a great use
              of the bountyboard!"
                  backgroundColor="bg-[#D9DB69]"
                />
              </div>
              <div>
                <CollapsibleCard
                  title="Cash Quest!"
                  content="Cash Quest is a creative way to teach kids about money management and hard work. 

              It allows setting challenging goals that can be rewarded with money set by parents and serves as a visual motivator for accountability in family life."
                  backgroundColor="bg-[#EB90E2]"
                />
              </div>
              <div>
                <CollapsibleCard
                  title="fmlyChat"
                  content="fmlychat is a messaging system that provides ease-of-use directly in the fmly app.

              You can chat one-on-one, add fmly members to group chats, share images, videos, links, etc..."
                  backgroundColor="bg-[#B2EB90]"
                />
              </div>
              <div>
                <CollapsibleCard
                  title="Groceries"
                  content="Groceries, lets families collaborate on a list for food and home supplies. 

              Share the list and even delegate access for others to add items at their discretion.
              
              Picking up the supplies can also be assigned as a bounty on the bountyboard!"
                  backgroundColor="bg-blue-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg h-2 w-[60%] max-w-[800px] mt-8 lg:mt-8 m-auto relative"></div>
    </div>
  );
};

export default DashboardInfo;
