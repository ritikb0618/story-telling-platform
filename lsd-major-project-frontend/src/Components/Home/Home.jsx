import React from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const stories = [
  {
    category: "Featured stories",
    items: [
      { title: "The last time I saw her", genre: "Drama, Romance", image: "story1.jpg" },
      { title: "The man who wasn’t there", genre: "Thriller, Mystery", image: "story2.jpg" },
      { title: "The house that time forgot", genre: "Fantasy, Adventure", image: "story3.jpg" },
    ],
  },
  {
    category: "Recent collaborations",
    items: [
      { title: "The missing hour", genre: "Mystery, Thriller", image: "story4.jpg" },
      { title: "The secret of the old mansion", genre: "Adventure, Mystery", image: "story5.jpg" },
      { title: "The forgotten prophecy", genre: "Fantasy, Adventure", image: "story6.jpg" },
    ],
  },
  {
    category: "Jokes and short stories",
    items: [
      { title: "The lost sock", genre: "Comedy", image: "story7.jpg" },
      { title: "The talking cat", genre: "Fantasy, Comedy", image: "story8.jpg" },
      { title: "The magic potion", genre: "Fantasy, Adventure", image: "story9.jpg" },
    ],
  },
];

const StorytellingPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Storyteller</h1>
        <div className="relative w-80">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-800 text-white rounded-lg p-2 pl-10 focus:outline-none"
          />
          <Search className="absolute left-3 top-3 text-gray-400" size={18} />
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-700" />
      </div>
      
      {/* Story Sections */}
      {stories.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{section.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.items.map((story, idx) => (
              <div key={idx} className="bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium">{story.title}</h3>
                  <p className="text-gray-400 text-sm">{story.genre}</p>
                  <Button className="mt-3 bg-blue-600 hover:bg-blue-700">Read</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StorytellingPage;
