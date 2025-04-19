import React from 'react'

const Projects = () => {
  return (
    <>
      <div className="projects-container-top">
        <h2>Projects</h2>
        <p>Here are some of the projects I have worked on</p>
      </div>
        {/* Project 1: Planning Tool */}
        <section className="projects-container2">
          <h3>A personalized project planning tool</h3>
          <p>
            For my bachelor project, I wrote a personalized project planning tool for agile projects, that splits entire projects into categories and sprints. The sprints contained a number of tasks and the solution will automatically estimate the duration of a task. The sprints/categories can be rearranged in the user's preferred order. Furthermore, the tool also has a Critical Path Plotter which creates a node network that connects tasks so users can easily identify which tasks are dependent on previous tasks, identify high priority tasks, and get a broad overview of the project. This project is developed using React for the frontend and Firebase for authentication and data storage.
          </p>
          <h4>Planning Tool Screenshots</h4>
          <div className="image-grid">
            <div className="image-wrapper">
              <img src="images/planning_tool/1.jpg" alt="Planning Tool" />
            </div>
            <div className="image-wrapper">
              <img src="images/planning_tool/2.jpg" alt="Planning Tool" />
            </div>
            <div className="image-wrapper">
              <img src="images/planning_tool/3.jpg" alt="Planning Tool" />
            </div>
            <div className="image-wrapper">
              <img src="images/planning_tool/4.jpg" alt="Planning Tool" />
            </div>
          </div>
        </section>

        {/* Project 2: Shadow Plane Studios */}
        <section className="projects-container2">
          <h3>Shadow Plane Studios</h3>
          <p>
            In 2024, I founded <b>Shadow Plane Studios</b>, where I specialize in all aspects of 3D graphics, from modeling and texturing to rigging, animation, and post-production. We seek to motivate people to push creative boundaries, explore new storytelling techniques, and bring their artistic visions to life through high-quality visuals and immersive experiences.
          </p>
          <h4>CGI Examples</h4>
          <div className="image-grid">
            <div className="image-wrapper">
              <img src="images/sps/CGI/chesssim.png" alt="CGI Example" />
            </div>
            <div className="image-wrapper">
              <img src="images/sps/CGI/deadpoolmodel.png" alt="CGI Example" />
            </div>
            <div className="image-wrapper">
              <img src="images/sps/CGI/starwarsscene.png" alt="CGI Example" />
            </div>
          </div>
          <p>
            I've made a video showcasing some examples of CGI that I've worked on.
            View Showcase on <a href="https://www.youtube.com/watch?v=2ffvrKACeI4" target="_blank" rel="noopener noreferrer">Youtube</a>
          </p>
          </section>
          <section className="projects-container2">
          <h4>Game Development</h4>
          <p>
            Besides CGI, I also spent my past time learning game development in Godot 4.4.<br />
            The game is currently in development. View devlog here: <a href="https://www.youtube.com/watch?v=2ffvrKACeI4" target="_blank" rel="noopener noreferrer">Youtube</a>
          </p>
          <div className="image-grid">
            <div className="image-wrapper">
              <img src="images/sps/game/mur.jpg" alt="Game Development" />
            </div>
          </div>
        </section>

        {/* Project 3: Airplate App */}
        <section className="projects-container-bottom">
          <h3>Airplate - Drone Detection App (Android)</h3>
          <p>
            In 2024, I developed and published a drone detection Android app for Airplate in 10 weeks, a company that specializes in drone detection and tracking. The app detects drones and provides users with accurate and reliable information about the location and behavior of drones.
            <br />
            The app can be downloaded here: <a href="https://play.google.com/store/apps/details?id=com.anonymous.airPlateReactApp&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">Go to Google Play Store</a>
            <br />
            <span style={{fontStyle: 'italic'}}>Note: requires registering for a free account to use the app.</span>
          </p>
          <h4>App Screenshots</h4>
          <div className="image-grid">
            <div className="image-wrapper">
              <img src="images/app_screenshots/1.jpg" alt="App Screenshot" />
            </div>
            <div className="image-wrapper">
              <img src="images/app_screenshots/2.jpg" alt="App Screenshot" />
            </div>
            <div className="image-wrapper">
              <img src="images/app_screenshots/3.jpg" alt="App Screenshot" />
            </div>
            <div className="image-wrapper">
              <img src="images/app_screenshots/4.jpg" alt="App Screenshot" />
            </div>
          </div>
        </section>
      </>
  )
}

export default Projects
