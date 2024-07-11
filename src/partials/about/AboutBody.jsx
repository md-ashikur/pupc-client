import president from "../../images/habibsir.png";

const AboutBody = () => {
  return (
    <div className="py-20 lg:px-20 px-5">
      <div className="grid lg:grid-cols-3 ">
        <div className="bg-white-200 p-5 text-center rounded-lg flex flex-col justify-center items-center">
          <img src={president} alt="" className="w-52 rounded-2xl" />
          <h2 className="lg:text-2xl text-xl font-bold">MD. HABIB EHSANUL HAQUE</h2>
          <p>President of PUPC</p>
          <p>Dept. Head of CSE</p>
        </div>
        <div className="lg:col-span-2 p-5 text-justify">
          <h2 className="font-bold text-2xl mb-4">
            Speech from the President of PUPC
          </h2>

          <p>
            It gives me immense pleasure to welcome you to the Pundra University
            Programming Club (PUPC). Since our establishment in 2019, our club
            has focused on developing a strong community of programmers and tech
            enthusiasts. As the President of PUPC and Head of the CSE
            Department, I am proud of the progress we have made.
          </p>
          <p className="my-5">
            Our goal at PUPC is simple: to help students learn and grow in the
            field of programming. We offer resources and opportunities to
            enhance technical skills and encourage collaborative learning.
            Through workshops, coding sessions, and Programming Contest, we aim
            to prepare our members for the challenges and opportunities in the
            tech industry.
          </p>

          <p>
            Our activities not only improve technical skills but also build
            professional networks and friendships. We regularly invite industry
            professionals and alumni to share their insights and experiences,
            bridging the gap between academic learning and practical
            application.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBody;
