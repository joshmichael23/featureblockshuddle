import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

  return (
    <main>
      <header>
        <img src="/logo.svg" alt="" />
        <button>Try It Free</button>
      </header>

      <div className='hero'>
        <h1>
          Build The Community 
          <span>Your Fans Will Love</span>
        </h1>

        <p>Huddle re-imagines the way we build <span>communities. You have a voice, but so</span> <span>does your audience. Create connections</span> <span>with your users as you engage in</span> <span>genuine discussion.</span>
        </p>

        <button>Get Started For Free</button>

        <img src="/illustration-mockups.svg" alt="" />
      </div>

      <div className='bottom-section'>
        <section>
          <img src="/illustration-grow-together.svg" alt="" />
          <h2>Grow Together</h2>
          <p>Generate meaningful discussions with your audience and build a strong, loyal community. 
  Think of the insightful conversations you miss out on with a feedback form. </p>
        </section>

        <section className='alternate'>
          <img src="/illustration-flowing-conversation.svg" alt="" />
          <h2>Flowing Conversations</h2>
          <p>You wouldn't paginate a conversation in real life, so why do it online? Our threads 
  have just-in-time loading for a more natural flow.</p>
        </section>

        <section>
          <img src="/illustration-grow-together.svg" alt="" />
          <h2>Your Users</h2>
          <p>It takes no time at all to integrate <span>Huddle with your app's</span> 
          <span>
            authentication solution. 
              This means,
          </span> 
          <span>once signed in to your app, your</span> <span>users can start chatting immediately.</span></p>
        </section>

        <section className='last-ready'>
          <h2>Ready To Build Your Community?</h2>
          <button>Get Started For Free</button>
        </section>
      </div>
      <footer>
        <div className="logofooter"></div>

        <div className='group-contact'>
          <div className='contact-info'>
            <img src="/icon-location.svg" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className='contact-info'>
            <img src="/icon-phone.svg" alt="" />
            <p>+1-543-123-4567</p>
          </div>
          <div className='contact-info'>
            <img src="/icon-email.svg" alt="" />
            <p>example@huddle.com</p>
          </div>
            
        </div>

        <nav>
          <a href="#">About Us</a>
          <a href="#">What We Do</a>
          <a href="#">FAQ</a>
          <a href="#">Career</a>
          <a href="#">Blog</a>
          <a href="#">Contact Us</a>
        </nav>

        <div className="socialmedia">
          <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i class="fa-brands fa-twitter"></i></a>
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
        </div>


        <p className='copyright'>&copy; Copyright 2018 Huddle. All rights reserved.</p>
      </footer>
    </main>
  )
}

export default App
