import { useLocation } from "react-router-dom";

const Contribute = () => {
  const location = useLocation();

  return (
    <div className="w-[600px] mx-auto flex flex-col justify-center items-center">
      <h1>{location.state.email}</h1>
      <h1 className="text-3xl text-center">Report a Bug</h1>
      <textarea
        className="block w-[400px]  h-[250px] border-2 border-gray-400 rounded-lg mt-5 bg-transparent"
        name=""
        id=""
      ></textarea>
    </div>
  );
};

export default Contribute;
