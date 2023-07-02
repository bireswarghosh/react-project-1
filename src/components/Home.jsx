import React from 'react'
import vg from '../assets/2.png'
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
function Home() {
  return (

   <>
    <div className='home' id="home">
        <main>
            <h1>wealcome to error-fix </h1>
            <p>Soluction of all your problem </p>
        </main>
    </div>
   
   
    <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>


      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
          Welcome to our technical support website! We are here to assist you with all your technical needs and provide solutions to any problems you may encounter. Our team of dedicated experts is well-versed in a wide range of technologies and is committed to delivering top-notch support.

Whether you are facing issues with your computer, software applications, or electronic devices, we've got you covered. Our comprehensive knowledge base and troubleshooting guides offer step-by-step instructions to help you resolve common technical issues on your own. From troubleshooting network connectivity problems to resolving software conflicts, we provide detailed insights to assist you in overcoming challenges.

If you need personalized assistance, our responsive customer support team is just a click away. Reach out to us via our contact form or live chat feature, and we'll swiftly address your concerns. Our support agents are trained to understand your technical queries and provide prompt, effective solutions.

Furthermore, our website offers a vibrant community forum where users can engage with fellow enthusiasts, share experiences, and exchange valuable insights. Our forum provides an excellent platform for troubleshooting discussions, finding workarounds, and discovering innovative solutions from like-minded individuals.

We understand the importance of staying up-to-date with the latest technology trends, so our website features informative articles, blog posts, and tutorials on emerging technologies. Whether you are looking to explore the world of artificial intelligence, cybersecurity, or cloud computing, our resources will empower you to expand your knowledge and stay ahead of the curve.

At our technical support website, we strive to provide exceptional service and ensure your technical journey is smooth and hassle-free. We are committed to resolving your issues promptly, equipping you with the necessary knowledge, and fostering a supportive community. Trust us to be your go-to resource for all your technical support needs.</p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>





   </>
  )
}

export default Home