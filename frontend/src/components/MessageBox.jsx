import React, { useEffect, useRef, useState } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";
import { FaAngleDoubleUp } from "react-icons/fa";

const messagesMock = [
  "İyi akşamlar İyi akşamlar İyi akşamlar İyi akşamlar İyi akşamlar",
  "Merhaba, nasılsın?",
  "Harikasın! :)",
  "Günaydın",
  "Tünaydın",
  "Hahaha",
  "Öğlen görüşelim.",
  "Pekala",
];


const users = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  name: `UserUsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ${i + 1}`,
  image: `https://i.pravatar.cc/150?img=${i + 10}`,
  lastMessage: messagesMock[i % messagesMock.length],
  time: `${i + 2} day ago`,
  unreadCount: i % 3 === 0 ? i : 0,
}));

export default function ChatSidebar() {
  const [selected, setSelected] = useState(
    localStorage.getItem("selected") || 0
  );
  const [opened, setOpened] = useState(false);
  const messageEndRef = useRef(null);

  const handleSelect = (index) => {
    setSelected(index);
    localStorage.setItem("selected", index);
    setOpened(false);
  };

    useEffect(() => {
      if (messageEndRef.current) {
        messageEndRef.current.scrollTop = messageEndRef.current.scrollHeight;
      }
    }, [selected]);

  const selectedUser = users[selected];

  return (
    <div className="h-[73vh] sm:h-[80vh] flex w-full overflow-hidden justify-start md:justify-normal">
      <aside
        className={`bg-white border-r border-gray-300 transition-all duration-500 flex flex-col w-72 min-w-[18rem] overflow-auto md:relative absolute z-10 ${
          opened ? "h-[70vh]" : "h-0 md:h-full"
        }`}
      >
        <div className="text-3xl tracking-widest text-center py-3 border-b border-gray-300 hidden md:flex text-white bg-pink-600 items-center justify-center">
          {/* LOGO */}
          VIBEZ
        </div>
        <div className="flex-1 overflow-y-auto">
          {users.map((user, i) => (
            <div
              key={user.id}
              onClick={() => handleSelect(i)}
              className={`flex items-center p-2 h-16 cursor-pointer border-b border-gray-300 hover:bg-gray-100 ${
                selected == i ? "bg-gray-100" : ""
              }`}
            >
              <img
                src={user.image}
                className="w-12 h-12 rounded-full object-cover shadow mr-2 border-2 border-pink-600"
              />
              <div className="flex-1">
                <div className="font-bold max-w-[8rem] truncate">{user.name}</div>
                <div className="text-sm text-gray-500 truncate max-w-[6rem]">{user.lastMessage}</div>
              </div>
              <div className="text-xs text-gray-400 mr-2">{user.time}</div>
              {user.unreadCount > 0 && (
                <div className="text-xs bg-blue-200 text-black px-2 py-1 rounded-full">
                  {user.unreadCount}
                </div>
              )}
            </div>
          ))}
        </div>
      </aside>

      <main className="flex-1 flex flex-col  w-full max-w-[90vw] md:w-[50vw]  ">
        <header className="h-20  text-white border-b border-gray-300 flex items-center px-4 bg-gradient-to-r from-pink-600 to-indigo-500 justify-start">
          <img
            src={selectedUser.image}
            className=" hidden sm:flex sm:w-14 sm:h-14 rounded-full object-cover shadow mr-2 border-2 border-white"
          />
          <div className="flex-1 w-fit flex flex-col items-center md:items-start">
            <div className="font-bold text-lg truncate max-w-[13rem] sm:max-w-[25rem] md:max-w-[18rem]">{selectedUser.name}</div>
            <div className="text-sm text-gray-300">{selectedUser.time}</div>
          </div>
          <div className="md:hidden block">
            <button
              onClick={() => setOpened(!opened)}
              className="tracking-widest"
            >
              {opened ? (<FaAngleDoubleUp />) : (<FaAngleDoubleDown />)}
            </button>
          </div>
        </header>

        <div className="flex-1 flex flex-col px-4 py-2 overflow-auto bg-[#FEC7B4]" ref={messageEndRef}>
          {/* <div className="flex-1" /> */}
          <div className="max-w-[70%] self-start flex flex-col items-start">
            <div className="bg-white shadow px-2 py-2 mb-2 rounded max-w-[90%] overflow-hidden text-wrap break-words text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non pr
            </div>
            <div className="text-right text-xs text-gray-400 ">
              {selectedUser.time}
            </div>
          </div>
          <div className="max-w-[70%] self-end flex flex-col items-end">
            <div className="bg-blue-200 shadow px-2 py-2 mb-2 rounded max-w-[80%] overflow-hidden text-wrap break-words text-start">
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
            </div>
            <div className="text-right text-xs text-gray-400">
              {selectedUser.time}
            </div>
          </div>
          {/* <div ref={messageEndRef} /> */}
        </div>

        <div className="border-t p-2 h-16 flex items-center bg-gradient-to-r from-pink-600 to-indigo-500">
          <input
            type="text"
            placeholder={`Message ${selectedUser.name.split(" ")[0]}`}
            className="flex-1 px-4 py-2 rounded focus:outline-none bg-white shadow"
            style={{ width: '-webkit-fill-available' }}
          />
        </div>
      </main>
    </div>
  );
}
