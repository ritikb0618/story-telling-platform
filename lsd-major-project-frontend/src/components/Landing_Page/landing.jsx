import React from 'react';

const StoryCard = ({ image, title, category, onClick }) => (
  <div className="flex items-center w-full bg-gray-900 rounded-lg overflow-hidden mb-4 hover:bg-gray-800 transition-colors">
    <div className="w-1/3 h-56 relative">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex-1 px-8">
      <h3 className="text-white text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-400 text-lg">{category}</p>
    </div>
    <button
      onClick={onClick}
      className="bg-blue-600 text-white px-8 py-3 rounded-md mr-8 hover:bg-blue-700 transition-colors text-lg"
    >
      Read
    </button>
  </div>
);

const StorySection = ({ title, stories }) => (
  <section className="mb-20 w-full">
    <h2 className="text-white text-3xl font-semibold mb-10">{title}</h2>
    <div className="space-y-8 w-full">
      {stories.map((story, index) => (
        <StoryCard
          key={index}
          image={story.image}
          title={story.title}
          category={story.category}
          onClick={() => console.log(`Reading ${story.title}`)}
        />
      ))}
    </div>
  </section>
);

const Landing = () => {
  const featuredStories = [
    {
      title: "The last time I saw her",
      category: "Drama, Romance",
      image: "/api/placeholder/400/320"
    },
    {
      title: "The man who wasn't there",
      category: "Thriller, Mystery",
      image: "/api/placeholder/400/320"
    },
    {
      title: "The house that time forgot",
      category: "Fantasy, Adventure",
      image: "/api/placeholder/400/320"
    }
  ];

  const collaborations = [
    {
      title: "The missing hour",
      category: "Mystery, Thriller",
      image: "/api/placeholder/400/320"
    },
    {
      title: "The secret of the old mansion",
      category: "Adventure, Mystery",
      image: "/api/placeholder/400/320"
    },
    {
      title: "The forgotten prophecy",
      category: "Fantasy, Adventure",
      image: "/api/placeholder/400/320"
    }
  ];

  const shortStories = [
    {
      title: "The lost sock",
      category: "Comedy",
      image: "/api/placeholder/400/320"
    },
    {
      title: "The talking cat",
      category: "Fantasy, Comedy",
      image: "/api/placeholder/400/320"
    },
    {
      title: "The magic potion",
      category: "Fantasy, Adventure",
      image: "/api/placeholder/400/320"
    }
  ];

  return (
    <div className="min-w-[175.8vh] min-h-screen bg-gray-950 p-8">
      <div className="max-w-7xl mx-auto">
        <StorySection title="Featured stories" stories={featuredStories} />
        <StorySection title="Recent collaborations" stories={collaborations} />
        <StorySection title="Jokes and short stories" stories={shortStories} />
      </div>
    </div>
  );
};

export default Landing;