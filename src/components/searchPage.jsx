import React, { useState } from 'react';

// Dummy data (for blog posts or text)
const data = [
  { id: 1, title: "React Basics", category: "React", content: "Learn the fundamentals of React." },
  { id: 2, title: "Advanced React", category: "React", content: "Dive deeper into React concepts." },
  { id: 3, title: "JavaScript Tips", category: "JavaScript", content: "Boost your JavaScript skills." },
  { id: 4, title: "CSS for Beginners", category: "CSS", content: "Master the basics of CSS." },
  { id: 5, title: "Responsive Design", category: "CSS", content: "Make your websites mobile-friendly." },
];

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  // const [filteredData, setFilteredData] = useState(data);

  // Handle search input
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
  };

  // Handle category filter change
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredData = data.filter(item =>
    (item.title.toLowerCase().includes(searchQuery) || item.content.toLowerCase().includes(searchQuery)) &&
    (selectedCategory === "All" || item.category === selectedCategory)
  );
 
  
  console.log('this is selected category',selectedCategory)
  console.log('this is search query',searchQuery)
  return (
    <div className="max-w-4xl mx-auto p-4">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-center mb-4">Search Blog</h1>
        <input
          type="text"
          placeholder="Search for articles..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          onChange={handleCategoryChange}
          value={selectedCategory}
          className="w-full p-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All Categories</option>
          <option value="React">React</option>
          <option value="JavaScript">JavaScript</option>
          <option value="CSS">CSS</option>
        </select>
      </header>

      <div className="space-y-4">
        {filteredData.length === 0 ? (
          <p className="text-center text-xl text-gray-500">No results found</p>
        ) : (
          filteredData.map(item => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-md hover:scale-105 duration-300">
              <h2 className="text-2xl font-semibold">{item.title}</h2>
              <p className="text-lg text-gray-700 mt-2">{item.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchPage;
