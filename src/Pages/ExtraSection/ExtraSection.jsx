import img from "../../assets/Banner/acoustic-guitar-chair-close-up-brown-guitar-black-wall.jpg"

const ExtraSection = () => {
    return (
      <section className="my-16">
        <div className="bg-[#0B4B66] py-14 px-32 flex gap-4"
        style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}>
            <div>
                <img src={"http://notacorda.like-themes.com/wp-content/uploads/2017/09/family.jpg"} className="rounded-xl mr-16" alt="" />
            </div>
            <div className="w-1/2">
                <h3 className="font-extrabold text-xl text-yellow-400">Our Classes</h3>
                <h1 className="font-extrabold my-4 text-4xl text-white">About School</h1>
                <p className="font-extrabold text-xl text-yellow-400">Integer in justo euismod nulla feugiat lacinia non porta velit. Vestibulum vulputate purus sit amet vestibulum ultrices mauris malesuada.</p>
                <p className="text-white my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum sem ligula. Phasellus eleifend vel justo sit amet volutpat. Duis vitae maximus ligula, nec mattis libero. Donec eget felis odio.</p>
                <button className="btn bg-red-700 my-7 text-white font-extrabold border-0 px-5">View All</button>
            </div>
        </div>
       <div className="flex bg-[#EFCF4F] py-10 justify-around ">
       <div className="text-center">
            <h1 className="text-white font-extrabold text-6xl">27</h1>
            <p className="text-[#0C4B65] font-bold text-3xl ">Professional</p>
            <p className="text-red-700 font-bold text-3xl">Teachers</p>
        </div>
       <div className="text-center">
            <h1 className="text-white font-extrabold text-6xl">54</h1>
            <p className="text-[#0C4B65] font-bold text-3xl ">Learning</p>
            <p className="text-red-700 font-bold text-3xl">Groups</p>
        </div>
       <div className="text-center">
            <h1 className="text-white font-extrabold text-6xl">590</h1>
            <p className="text-[#0C4B65] font-bold text-3xl ">Happy</p>
            <p className="text-red-700 font-bold text-3xl">Students</p>
        </div>
       <div className="text-center">
            <h1 className="text-white font-extrabold text-6xl">8</h1>
            <p className="text-[#0C4B65] font-bold text-3xl ">Music</p>
            <p className="text-red-700 font-bold text-3xl">Classes</p>
        </div>
       </div>
      </section>
    );
};

export default ExtraSection;