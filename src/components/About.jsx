import React from 'react'
import "./About.css"
import MusicImg from "../img/music.jpg"
import SmallLogo from "../img/logo192.png"

function About() {
  return (
    <div className='about'>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={MusicImg} alt="" className="a-img"/>
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About me</h1>
        <p className="a-sub">
          Lorem ipsum dolor sit amet consectetur
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat temporibus, voluptatem ex molestiae quod placeat eaque dolorum ad necessitatibus dolorem cupiditate delectus quam tempora animi, similique est natus esse laudantium?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita perferendis quae voluptates neque obcaecati. Magnam quod voluptatem illo doloribus omnis earum molestiae iusto aperiam! Harum inventore nesciunt et maiores voluptatibus.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sapiente, perferendis dolorum illo aut ea optio sunt similique mollitia, incidunt id! Tempora, temporibus! Esse neque tenetur laboriosam, exercitationem iste dolore.
        </p>
        <div className="a-award">
          <img src={SmallLogo} alt="" className="a-award-img" />
          <div className="a-award-text">
            Lorem ipsum dolor sit amet consectetur
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
