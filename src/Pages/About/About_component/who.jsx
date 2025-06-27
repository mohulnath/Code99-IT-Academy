import who from "../../../assets/about/who.png"
import "./who.css"
export default function Who(){
  return(
    <>
    <section className="who_about">
      <div className="who_img">
        <img src={who} alt="" />
        <div className="lol">
          <div className="circle">WEB</div>
          <div className="circle2">SEO</div>
          <div className="circle3">CSS</div>
          <div className="circle4">PYTHON</div>
          <div className="circle5">JAVA</div>
          <div className="circle6">UI/UX</div>
        </div>
      </div>
      <div className="who_content">
        <h6>WHO WE ARE</h6>
        <h3>Hello, we’re CODE99<br/> IT Academy</h3>
        <p>We’re passionate about making   to everyone. Our team of dedicated educators, mentors, and coding enthusiasts believes that technology should be open to all—regardless of background, age, or gender.</p>
      </div>
    </section>
    </>
  )
}