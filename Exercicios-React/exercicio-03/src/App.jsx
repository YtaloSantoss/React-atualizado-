import Profile from "./components/Profile"


function App() {

  return (
    <div className="app">
      <Profile
        avatar="https://w1.pngwing.com/pngs/809/551/png-transparent-man-user-user-profile-male-user-account-avatar-client-symbol.png"
        name="John Doe"
        bio="Full-stack javascript developer at Acme Inc."
        email="ytalomateus87@gmail.com"
        phone="+5579999999"
        githubUrl="https://github.com"
        linkdinUrl="https://linkedin.com"
        twitterUrl="https://twitter.com"
      />
    </div>



  )
}

export default App
