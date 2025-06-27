import "./reason.css"

export default function Reason(){

  const reason_arr = [
    {
      heading:"Heading",
      pra:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, atque."
    },
    {
      heading:"Heading",
      pra:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, atque."
    },
    { 
      heading:"Heading",
      pra:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, atque."
    },
  ]

  return(
    <>
    <section className="reason_about">
      <h1 className="title">Reason To Choose <span className="span-bold" style={{color:"rgb(144, 217, 22)"}}>Us</span></h1>
      <div className="reason_con">
          {reason_arr && reason_arr.map((item)=>
          <div className="reason_box">
            <div className="left_box"></div>
            <div className="right_box"></div>
            <div className="box">
              <div className="miss"></div>
            <h3>{item.heading}</h3>
            <p>{item.pra}</p>
            </div>
          </div>
            )}
      </div>
    </section>
    </>
  )
}