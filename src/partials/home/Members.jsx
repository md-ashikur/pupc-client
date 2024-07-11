import { useState, useEffect } from 'react';

// Mock user data
const mockUsers = [
    { name: "Ashik", url: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Nayem", url: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Sadia", url: "https://via.placeholder.com/80?text=Sadia" },
    { name: "Rana", url: "https://via.placeholder.com/80?text=Rana" },
    { name: "Maruf", url: "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Ayesha", url: "https://via.placeholder.com/80?text=Ayesha" },
    { name: "Kamal", url: "https://via.placeholder.com/80?text=Kamal" },
    { name: "sha", url: "https://via.placeholder.com/80?text=Ayesha" },
    { name: "Ka", url: "https://via.placeholder.com/80?text=Kamal" },
    { name: "A", url: "https://via.placeholder.com/80?text=Ayesha" },
    { name: "K", url: "https://via.placeholder.com/80?text=Kamal" }
];

const fixedPositions = [
    { bottom: '40%', right: '45%' },
    { bottom: '44%', right: '70%' },
    { bottom: '16%', left: '20%' },
    { bottom: '16%', right: '40%' },
    { top: '40%', right: '30%' },
    { top: '10%', right: '16%' },
    { top: '10%', left: '10%' },
    { bottom: '20%', right: '10%' }
];

// Helper function to get a random user from the mock data excluding the ones already displayed
const getRandomUserExcluding = (excludedUsers) => {
    const filteredUsers = mockUsers.filter(user => !excludedUsers.includes(user.name));
    return filteredUsers[Math.floor(Math.random() * filteredUsers.length)];
};

const Members = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Initialize with random images at the fixed positions
        const initialImages = fixedPositions.map(position => ({
            ...getRandomUserExcluding([]),
            position
        }));
        setImages(initialImages);
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setImages(prevImages => {
                const randomIndex = Math.floor(Math.random() * fixedPositions.length);
                const currentDisplayedUsers = prevImages.map(image => image.name);
                const newImage = {
                    ...getRandomUserExcluding(currentDisplayedUsers),
                    position: fixedPositions[randomIndex]
                };
                const updatedImages = [...prevImages];
                updatedImages[randomIndex] = newImage;
                return updatedImages;
            });
        }, Math.floor(Math.random() * 5000) + 1000); // Random interval between 1-6 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
      <div className='flex justify-center '>
          <div className="py-20 px-20 relative overflow-hidden h-[100vh] lg:w-[1350px] ">
            <div className="flex justify-center">
                <h1 className="text-5xl text-center font-semibold max-w-96">
                    Meet the Brilliant Members of Our Programming Club
                </h1>
            </div>

            {images.map((image, index) => (
                <div
                    key={index}
                    className="overflow-hidden rounded-xl absolute group"
                    style={{ ...image.position, width: '80px', height: '80px' }}
                >
                    <img src={image.url} alt={image.name} className="w-full h-auto" />
                    <span className="hidden group-hover:block absolute top-0 left-0 bg-white text-black text-sm p-1 rounded">
                        {image.name}
                    </span>
                </div>
            ))}
        </div>
      </div>
    );
};

export default Members;