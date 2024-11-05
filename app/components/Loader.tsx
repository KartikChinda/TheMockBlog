import { FadeLoader } from "react-spinners";

const Loader = ({ loading }: { loading: boolean }) => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <FadeLoader color="black" loading={loading} />
    </div>
  );
};

export default Loader;
