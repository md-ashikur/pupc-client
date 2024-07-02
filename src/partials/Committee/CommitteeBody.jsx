import "./Committee.css";
import as from "../../images/a.png"


const CommitteeBody = () => {
  return (
    <div className="my-20 ">
      <h1 className="text-center text-white font-bold my-10 text-4xl">Our Committee Members</h1>

      <div className="grid justify-center lg:grid-cols-4 gap-5 lg:px-40 px-10">
        <div className="h-72 w-60 bg-[white] rounded-lg overflow-hidden">
            <div className="h-52 committee-card relative overflow-hidden">
                <img src={as} alt=""/>

            </div>
            <div className="p-3">
                <h2 className="text-md font-bold">Md. Ashikur Rahman</h2>
                <p>Joint General Secretary</p>
            </div>
        </div>
        <div className="h-72 w-60 bg-[white] rounded-lg overflow-hidden">
            <div className="h-52 committee-card relative overflow-hidden">
                <img src={as} alt=""/>

            </div>
            <div className="p-3">
                <h2 className="text-md font-bold">Md. Ashikur Rahman</h2>
                <p>Joint General Secretary</p>
            </div>
        </div>
        <div className="h-72 w-60 bg-[white] rounded-lg overflow-hidden">
            <div className="h-52 committee-card relative overflow-hidden">
                <img src={as} alt=""/>

            </div>
            <div className="p-3">
                <h2 className="text-md font-bold">Md. Ashikur Rahman</h2>
                <p>Joint General Secretary</p>
            </div>
        </div>
        <div className="h-72 w-60 bg-[white] rounded-lg overflow-hidden">
            <div className="h-52 committee-card relative overflow-hidden">
                <img src={as} alt=""/>

            </div>
            <div className="p-3">
                <h2 className="text-md font-bold">Md. Ashikur Rahman</h2>
                <p>Joint General Secretary</p>
            </div>
        </div>
       
      </div>
    </div>
  );
};

export default CommitteeBody;
