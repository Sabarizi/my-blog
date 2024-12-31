"use client";

import React, { useState } from "react";

const videos = [
  { id: 1, src: "/videos/video1.mp4", title: "Reel 1" },
  { id: 2, src: "/videos/video2.mp4", title: "Reel 2" },
  { id: 3, src: "/videos/video3.mp4", title: "Reel 3" },
  { id: 4, src: "/videos/video4.mp4", title: "Reel 4" },
  { id: 5, src: "/videos/video5.mp4", title: "Reel 5" },
  { id: 6, src: "/videos/video6.mp4", title: "Reel 6" },
  { id: 7, src: "/videos/video7.mp4", title: "Reel 7" },
  { id: 8, src: "/videos/video8.mp4", title: "Reel 8" },
  { id: 9, src: "/videos/video9.mp4", title: "Reel 9" },
  { id: 10, src: "/videos/video10.mp4", title: "Reel 10" },
  { id: 11, src: "/videos/video11.mp4", title: "Reel 11" },
  { id: 12, src: "/videos/video12.mp4", title: "Reel 12" },
];

const ReelsPage = () => {
  const [comments, setComments] = useState<{ [key: number]: string[] }>({});

  const handleAddComment = (videoId: number, comment: string) => {
    setComments((prev) => ({
      ...prev,
      [videoId]: [...(prev[videoId] || []), comment],
    }));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">My Favourote Reels</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            {/* Video Player */}
            <video
              src={video.src}
              controls
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{video.title}</h2>

              {/* Comment Section */}
              <div className="mt-4">
                <h3 className="text-sm font-medium mb-2">Comments</h3>
                <ul className="space-y-2 mb-4">
                  {(comments[video.id] || []).map((comment, index) => (
                    <li
                      key={index}
                      className="text-gray-700 bg-gray-100 p-2 rounded"
                    >
                      {comment}
                    </li>
                  ))}
                </ul>

                {/* Add Comment Form */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const input = form.elements.namedItem(
                      "comment"
                    ) as HTMLInputElement;
                    const comment = input.value.trim();
                    if (comment) {
                      handleAddComment(video.id, comment);
                      input.value = "";
                    }
                  }}
                >
                  <input
                    type="text"
                    name="comment"
                    placeholder="Add a comment..."
                    className="w-full border rounded p-2 mb-2"
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Post Comment
                  </button>
                </form>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReelsPage;
