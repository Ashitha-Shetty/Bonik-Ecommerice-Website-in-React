import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> 123456789</label>
            <i className='fa fa-envelope'></i>
            <label> xyz@gmail.com</label>
          </div>
          <div className='right row RText'>
            <label>Theme FAQ"s</label>
            <label>Need Help?</label>
          
            <label>Happy Shopping!</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
