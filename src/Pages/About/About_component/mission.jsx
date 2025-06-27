import "./mission.css"
import icon1 from "../../../assets/about/icon1.png"
import icon2 from "../../../assets/about/icon2.png"
import icon3 from "../../../assets/about/icon3.png"
export default function Mission() {
  const missionarr = [
    {
      head: "Mission",
      i: icon3,
      color: "#1a1f36",
      par: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quod!",
      ink: "white",
      ic: "#1a1f36"
    },
    {
      head: "Vission",
      i: icon2,
      color: "#90d916",
      par: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quod!",
      ink: "white",
      ic: "#1a1f36"
    },
    {
      head: "Values",
      i: icon1,
      color: "#e5f9e0",
      par: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quod!",
      ink: "black",
      ic: "#e5f9e0"
    },
  ]

  return (
    <>
      <section className="mission_about">
        <h1 className="head_about">Mission, Vision & Values</h1>
        <div className="mission_con">
          {missionarr && missionarr.map((item) =>
            <div className="mission">
              <div style={{ backgroundColor: item.color }} className="head">
                <p style={{ color: item.ink }}>{item.head}</p>
              </div>
              <div className="mission_i" > <div style={{ backgroundColor: item.ic }}><img src={item.i} alt="" /></div> </div>
              <p className="content">{item.par}</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}