import { useState } from "react";
import { Home, Compass, PlusCircle, MessageSquare, Bell, Lock, MoreHorizontal } from "lucide-react";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("stories");

  return (
    <div className="flex h-screen bg-[#0F0F10] text-white w-screen">
      {/* Sidebar */}
      <aside className="w-1/3 max-w-xs bg-[#131417] p-6 flex flex-col gap-6">
        <h2 className="text-2xl font-bold">Home</h2>
        <nav className="flex flex-col gap-4">
          <NavItem icon={Compass} label="Explore" />
          <NavItem icon={PlusCircle} label="Create" />
          <NavItem icon={MessageSquare} label="Messages" />
          <NavItem icon={Bell} label="Notifications" />
        </nav>
        <button className="mt-auto bg-blue-600 hover:bg-blue-500 py-3 rounded-lg font-semibold">
          Write
        </button>
      </aside>

      {/* Profile Section */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold">Profile</h1>

        {/* User Info */}
        <div className="flex items-center gap-4 mt-6">
          <img
            src="/profile-pic.png"
            alt="User Avatar"
            className="w-20 h-20 rounded-full border-2 border-gray-500"
          />
          <div>
            <h2 className="text-xl font-semibold">Bryan Hurst</h2>
            <p className="text-gray-400">@bryan_hurst</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 mt-8 border-b border-gray-600 pb-2">
          <button
            className={`pb-2 ${activeTab === "stories" ? "border-b-2 border-white font-semibold" : "text-gray-400"}`}
            onClick={() => setActiveTab("stories")}
          >
            Stories
          </button>
          <button
            className={`pb-2 ${activeTab === "contributions" ? "border-b-2 border-white font-semibold" : "text-gray-400"}`}
            onClick={() => setActiveTab("contributions")}
          >
            Contributions
          </button>
        </div>

        {/* Content */}
        <div className="mt-6 space-y-4">
          {[...Array(4)].map((_, index) => (
            <StoryCard key={index} />
          ))}
        </div>
      </main>
    </div>
  );
};

const NavItem = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 cursor-pointer">
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </div>
);

const StoryCard = () => (
  <div className="flex items-center justify-between bg-[#1C1D20] p-4 rounded-lg">
    <div className="flex items-center gap-4">
      <Lock className="w-6 h-6 text-gray-400" />
      <div>
        <h3 className="font-semibold">The Ultimate Heist</h3>
        <p className="text-gray-400 text-sm">1 collaborator, 0 followers</p>
      </div>
    </div>
    <MoreHorizontal className="w-6 h-6 text-gray-400 cursor-pointer" />
  </div>
);

export default UserProfile;