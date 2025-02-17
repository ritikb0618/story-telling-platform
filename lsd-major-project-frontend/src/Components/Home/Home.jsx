import React from "react";

function Home() {
  const stories = [
    {
      title: "The last time I saw her",
      genre: "Drama, Romance",
      img: "https://via.placeholder.com/400x250",
    },
    {
      title: "The man who wasn’t there",
      genre: "Thriller, Mystery",
      img: "https://via.placeholder.com/400x250",
    },
    {
      title: "The house that time forgot",
      genre: "Fantasy, Adventure",
      img: "https://via.placeholder.com/400x250",
    },
    {
      title: "The house that time forgot",
      genre: "Fantasy, Adventure",
      img: "https://via.placeholder.com/400x250",
    },
    {
      title: "The house that time forgot",
      genre: "Fantasy, Adventure",
      img: "https://via.placeholder.com/400x250",
    },
    {
      title: "The house that time forgot",
      genre: "Fantasy, Adventure",
      img: "https://via.placeholder.com/400x250",
    },
  ];

  const collaborations = [
    {
      title: "The missing hour",
      genre: "Mystery, Thriller",
      img: "https://via.placeholder.com/400x250",
    },
    {
      title: "The secret of the old mansion",
      genre: "Adventure, Mystery",
      img: "https://via.placeholder.com/400x250",
    },
    {
      title: "The forgotten prophecy",
      genre: "Fantasy, Adventure",
      img: "https://via.placeholder.com/400x250",
    },
  ];

  const shortStories = [
    {
      title: "The lost sock",
      genre: "Comedy",
      img: "https://via.placeholder.com/400x250",
    },
    {
      title: "The talking cat",
      genre: "Fantasy, Comedy",
      img: "https://via.placeholder.com/400x250",
    },
    {
      title: "The magic potion",
      genre: "Fantasy, Adventure",
      img: "https://via.placeholder.com/400x250",
    },
    
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">

<main className="container mx-auto px-6 py-8 flex flex-col">
        
<section className="mb-10">
  <h2 className="text-2xl font-semibold mb-4 text-center">Featured Stories</h2>
  <div className="flex gap-20 flex-wrap justify-center p-4 space-x-2">
    {stories.map((story, index) => (
      <StoryCard key={index} story={story} />
    ))}
  </div>
</section>


        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-center">Recent Collaborations</h2>
          <div className="flex gap-20 flex-wrap justify-center p-4 space-x-2">
            {collaborations.map((story, index) => (
              <StoryCard key={index} story={story} />
            ))}
          </div>
        </section>

        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-center">Jokes & Short Stories</h2>
          <div className="flex gap-20 flex-wrap justify-center p-4 space-x-2">
            {shortStories.map((story, index) => (
              <StoryCard key={index} story={story} />
            ))}
          </div>
        </section>
        
      </main>
    </div>
  );
}

function StoryCard({ story }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg w-[300px]">
      <img src={story.img} alt={story.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{story.title}</h3>
        <p className="text-gray-400 text-sm">{story.genre}</p>
        <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded">
          Read
        </button>
      </div>
    </div>
  );
}

export default Home;
