import React, { useState, useEffect } from "react";
import * as faker from "faker";

// to generate the mock data
function generateMockData(count = 20) {
  return Array.from({ length: count }, () => ({
    id: faker.datatype.uuid(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    // image: faker.image.avatar(),
  }));
}

const InfiniteScroll = () => {
  const [users, setUsers] = useState(generateMockData());
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // window.innerHeight = height of element/screen
      // document.documentElement.scrollTop = shows how much it's scrolled
      // document.documentElement.scrollHeight = Shows how much it can be scrolled
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight
      ) {
        setIsLoading(true);

        setTimeout(() => {
          setUsers((prevUser) => [...prevUser, ...generateMockData()]);
          setIsLoading(false);
        }, 2000); // Simulate network delay
      }
    };

    // The first argument is a string representing the event you want to listen for
    // (like 'click', 'mousedown', 'keydown', 'scroll', etc.), and the
    // second argument is the function that should run when the event is detected.

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this runs once on mount and cleanup on unmount

  return (
    <div>
      <h3>Infinite Scroll</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScroll;
