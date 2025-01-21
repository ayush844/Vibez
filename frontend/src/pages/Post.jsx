import React from "react";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Post = () => {
  const { id } = useParams(); // Extract the post ID from the URL
  //   const [post, setPost] = useState(null);

  //   useEffect(() => {
  //     // Simulate fetching the post data (Replace with an actual API call)
  //     const fetchPost = async () => {
  //       const response = await fetch(`https://api.example.com/posts/${id}`);
  //       const data = await response.json();
  //       setPost(data);
  //     };

  //     fetchPost();
  //   }, [id]);

  //   if (!post) {
  //     return <div>Loading post...</div>;
  //   }

  return (
    <div className="flex flex-col gap-5 sm:gap-8 bg-gray-50 rounded-md h-fit py-6 sm:py-8 px-4 sm:px-6 items-center">
      <h1 className=" text-2xl sm:text-3xl font-bold mb-5 sm:mb-8">POST</h1>
      <div className=" flex items-center justify-start w-full gap-4">
        <div className="h-8 w-8 hidden sm:flex sm:w-12 sm:h-12 rounded-full overflow-hidden">
          <img
            src={
              "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
            }
            className=" object-cover w-full h-full"
            alt=" user_profile"
          />
        </div>
        <div className=" flex flex-col items-start">
          <h2 className=" font-bold text-lg cursor-pointer hover:underline">
            Ayush Sharma
          </h2>
          <p className=" text-gray-500">Dec 13, 2023</p>
        </div>
      </div>
      <img
        className="rounded-md w-80 sm:w-[40rem] h-80 sm:h-[40rem]"
        src={
          "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
        }
        alt="post image"
      />

      <div className="text-start px-2 sm:px-6">
        <p className=" text-base sm:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
          reprehenderit itaque aspernatur iure aut voluptatibus sapiente magni,
          culpa molestiae incidunt maiores eligendi maxime reiciendis impedit
          ipsam odio animi enim illo. Quod eius dolorem voluptate quo nisi
          eveniet incidunt doloribus nostrum voluptas fugit earum quia minima
          fuga quos iste mollitia, ab tempore expedita repudiandae quae corporis
          ut quas! Consequuntur doloribus voluptas illo. Voluptatum molestiae
          veritatis repudiandae quod omnis eius molestias laudantium unde! Illo
          voluptates beatae accusamus incidunt ducimus temporibus saepe mollitia
          laboriosam, earum debitis blanditiis autem dolorum, aperiam quibusdam
          aspernatur ea eligendi veritatis eveniet exercitationem? Magni
          repudiandae corrupti quae doloribus sit! Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Sunt reprehenderit itaque aspernatur
          iure aut voluptatibus sapiente magni, culpa molestiae incidunt maiores
          eligendi maxime reiciendis impedit ipsam odio animi enim illo. Quod
          eius dolorem voluptate quo nisi eveniet incidunt doloribus nostrum
          voluptas fugit earum quia minima fuga quos iste mollitia, ab tempore
          expedita repudiandae quae corporis ut quas! Consequuntur doloribus
          voluptas illo. Voluptatum molestiae veritatis repudiandae quod omnis
          eius molestias laudantium unde! Illo voluptates beatae accusamus
          incidunt ducimus temporibus saepe mollitia laboriosam, earum debitis
          blanditiis autem dolorum, aperiam quibusdam aspernatur ea eligendi
          veritatis eveniet exercitationem? Magni repudiandae corrupti quae
          doloribus sit! Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Sunt reprehenderit itaque aspernatur iure aut voluptatibus
          sapiente magni, culpa molestiae incidunt maiores eligendi maxime
          reiciendis impedit ipsam odio animi enim illo. Quod eius dolorem
          voluptate quo nisi eveniet incidunt doloribus nostrum voluptas fugit
          earum quia minima fuga quos iste mollitia, ab tempore expedita
          repudiandae quae corporis ut quas! Consequuntur doloribus voluptas
          illo. Voluptatum molestiae veritatis repudiandae quod omnis eius
          molestias laudantium unde! Illo voluptates beatae accusamus incidunt
          ducimus temporibus saepe mollitia laboriosam, earum debitis blanditiis
          autem dolorum, aperiam quibusdam aspernatur ea eligendi veritatis
          eveniet exercitationem? Magni repudiandae corrupti quae doloribus sit!
        </p>
      </div>
    </div>
  );
};

export default Post;
