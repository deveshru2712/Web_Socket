import { useEffect, useState } from "react";

const App = () => {
  const [socket, setSocket] = useState<WebSocket | null>();
  const [messagesArr, setMessagesArr] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const newSocket = new WebSocket("ws://localhost:8080");
    setSocket(newSocket);

    newSocket.onopen = () => {
      console.log("Connected");
    };

    newSocket.onmessage = (message: MessageEvent) => {
      setMessagesArr((prev) => [...prev, message.data]);
      console.log("received message", message.data);
    };

    newSocket.onerror = (error) => {
      console.log(error);
    };

    newSocket.onclose = () => {
      console.log("Disconnected");
      // setConnectionStatus("Disconnected");
    };

    return () => {
      newSocket.close();
    };
  }, []);

  if (!socket) {
    return (
      <div className="flex justify-center items-center">
        <h2 className="text-slate-600 font-semibold">Loading...</h2>
      </div>
    );
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    socket.send(message);
    setMessage("");
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center px-1 md:px-20 gap-3">
      <span className="w-2/3 md:w-1/2 text-2xl font-semibold text-left">
        Messaging Queues
      </span>
      <div className="border w-2/3 md:w-1/2 h-1/2 rounded-md flex flex-col justify-between items-center">
        <div className="w-full flex flex-col gap-1 px-2 py-1">
          {messagesArr.map((message, index) => (
            <div
              key={index}
              className="w-full px-2 py-1 bg-slate-600/50 text-white rounded-sm"
            >
              {message}
            </div>
          ))}
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex">
            <input
              type="text"
              value={message}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMessage(e.target.value)
              }
              placeholder="Type your message"
              className="border w-full text-slate-800 p-2 outline-none"
            />
            <button className="bg-black px-2 py-1 rounded-md text-white cursor-pointer">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
