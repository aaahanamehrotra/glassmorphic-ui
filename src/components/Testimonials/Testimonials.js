
import React from './testimonials.scss';

const Testimonials = () => {

    const data=[
        {
            id: 1,
            name: "John Doe",
            title: "Senior Developer",
            img:
              "./assets/undraw_profile_pic_ic5t.png",
            icon: "assets/test2.png",
            desc:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
          },
          {
            id: 2,
            name: "John Doe",
            title: "Co-Founder of DELKA",
            img:
            "./assets/undraw_profile_pic_ic5t.png",
            icon: "assets/test2.png",
            desc:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
          },
          {
            id: 3,
            name: "John Doe",
            title: "CEO of ALBI",
            img:
              "./assets/undraw_profile_pic_ic5t.png",
            icon: "assets/test2.png",
            desc:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
          },
    ]
    return (
        <div className="testimonials" id="testimonials">
            <h1 className="heading">Testimonials</h1>
            <h3 className="users">What our users say...</h3>
            <div className="container">
                {data.map(c => (
                <div className="card">
                    <div className="top">
                        <img src="assets/temp.png" className="left" alt="" />
                        <img src={c.img} className="user" alt="" />
                        {/* <img src={c.icon} className="right" alt="" /> */}
                        {/* <YouTubeIcon className="right"/> */}
                    </div>
                    <div className="center">
                        {c.desc}
                    </div>
                    <div className="bottom">
                        <h3>{c.name}</h3>
                        <h4>{c.title}</h4>
                    </div>
                </div>
                ))}
            </div>
            
        </div>
    )
}

export default Testimonials