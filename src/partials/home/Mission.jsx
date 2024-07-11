import tech from "../../images/learning.png";
import pro from "../../images/promotion.png";
import net from "../../images/network.png";
import cre from "../../images/creativity.png";


const Mission = () => {
    return (
      <div className="lg:px-20 px-5 py-20 bg-secondary-100">
        <h1 className="text-center font-bold text-4xl mb-8">OUR MISSION & VISION</h1>
          <div className="grid lg:grid-cols-4 gap-5 ">

<div className="text-center bg-white rounded-xl border hover:border-cyan-400 hover:shadow-xl">
<div className="flex justify-center p-4">
        <img src={cre} alt="" className="w-16 h-16 " />
    </div>
    <h2 className="font-bold ">Innovation and Creativity</h2>
    <p className="text-sm p-5">Our mission is to cultivate an environment where students can explore and express their creativity through programming. We aim to provide resources, mentorship, and opportunities to develop innovative solutions to real-world problems.</p>
</div>

<div className="text-center bg-white  rounded-xl border hover:border-cyan-400 hover:shadow-xl">
<div className="flex justify-center p-4">
        <img src={net} alt="" className="w-16 h-16 " />
    </div>
    <h2 className="font-bold ">Promote Collaborative Learning</h2>
    <p className="text-sm p-4">We strive to build a community of learners who support and inspire each other. Through workshops, hackathons, and collaborative projects, we encourage students to work together, share knowledge, and grow collectively.</p>
</div>

<div className="text-center bg-white rounded-xl border hover:border-cyan-400 hover:shadow-xl">
<div className=" flex justify-center p-4">
        <img src={tech} alt="" className="w-16 h-16 "/>
    </div>
    <h2 className="font-bold ">Enhance Technical Skills</h2>
    <p className="text-sm p-5">We are dedicated to enhancing the technical proficiency of our members. By offering a variety of programming courses, hands-on coding sessions, and guest lectures from industry professionals.</p>
</div>
<div className="text-center bg-white rounded-xl border hover:border-cyan-400 hover:shadow-xl">
    <div className="flex justify-center p-4">
        <img src={pro} alt="" className="w-16 h-16 " />
    </div>
    <h2 className="font-bold">Prepare for Professional Success</h2>
    <p className="text-sm p-5">Our mission includes preparing our members for successful careers in technology. We provide guidance on professional development, ensuring that our students are well-prepared to meet the demands of the ever-evolving tech landscape.</p>
</div>
</div>
      </div>
    );
};

export default Mission;