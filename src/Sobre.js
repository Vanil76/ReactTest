import React from 'react'
import imgSobre from "./img/imgSobre.jpg"
import "./Sobre.css"

function Sobre() {
  return (
    <section>
      <h1>Sobre a empresa</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque architecto quaerat alias omnis quos incidunt mollitia delectus iste quam est et repudiandae, nostrum sint cupiditate blanditiis, cum quasi! Iste, quasi!
      Provident perspiciatis culpa dolor voluptates vel maiores dolores recusandae facilis magni saepe dignissimos doloremque, non eveniet ullam architecto sed voluptatum fugiat voluptatem quam a voluptas commodi. Ullam ducimus mollitia facilis!
      Error fugiat laudantium, ipsam iusto ab rem exercitationem, est commodi quod officiis nobis, dolorum itaque! Architecto perspiciatis, voluptate repellat suscipit quo, odio explicabo nam a modi maxime saepe libero repellendus?
      Odio eaque eveniet tenetur quo sit harum veritatis voluptate doloremque praesentium reprehenderit laboriosam, omnis sunt at optio quam? Consequuntur obcaecati consectetur porro iusto eos impedit, a aspernatur est modi voluptatem!
      Aspernatur dolorem quis ipsa expedita quaerat eius nam doloremque inventore recusandae voluptates itaque id mollitia tempora ut fugiat, dolorum voluptatem numquam! Aliquam, omnis voluptas! Officia corporis molestias perferendis ipsam quisquam?</p>
      <img className='sobreImg' src={imgSobre} alt="imgSobre" />
    </section>
  )
}

export default Sobre