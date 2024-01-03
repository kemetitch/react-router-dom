import Button from "../component/Button";
import Input from "../component/Input";

const Login = () => {
  return (
    <div className="w-[600px] mx-auto flex flex-col gap-5 justify-center items-center">
      <h3 className="text-center text-2xl">Login to controbute</h3>
      <Input placeholder="Email" />
      <Input placeholder="Password" />
      <Button className="w-[300px] rounded-md">Login</Button>
    </div>
  );
};

export default Login;
