import Head from "next/head";

export default function Home() {
  const BOT_CLIENT_ID = "728289399451942982";

  return (
    <div>
      <div className="banner">
        <div className="banner-discord">
          <i className="fab fa-discord" />
          Bot
        </div>
        <div className="banner-image" />
        <div className="banner-header">
          <h1>Focus</h1>
          <span className="subtitle">
            The discord bot to help you stay on task and achieve your goals!
          </span>
        </div>
        <div className="header-actions">
          <button
            onClick={() => {
              window.location.replace(
                `https://discord.com/oauth2/authorize?client_id=${BOT_CLIENT_ID}&permissions=0&scope=bot`
              );
            }}
          >
            <i className="fas fa-cloud-download-alt"></i>Invite to Discord
          </button>
          <button className="primary">
            <i className="fas fa-terminal"></i>Features &amp; Commands
          </button>
        </div>
      </div>
      <div className="container">
        <section>
          <h2>Presentation</h2>
          <div style={{ textAlign: "left" }}>
            <p>
              Whether you're managing a study, work or project Discord server,
              Focus provides tools to help your team stay focused by using
              sessions and other time management techniques such as Pomodoro.
            </p>
            <p>
              Focus also provides a Leaderboard so your community can compare
              their work times and compete for the top!
            </p>
          </div>
        </section>
        <section>
          <h2>Features</h2>
          <p style={{ textAlign: "left" }}>
            Here are the key features of Focus. To see the detailed description
            of the features and commands, please
            <a
              href="https://www.google.ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp;click here
            </a>
            .
          </p>
          <div className="card">
            <img src="/img/clock.svg" alt="Clock image" height="150" />
            <div>
              <h3>Pomodoro Cycles</h3>
              <p>
                The Pomodoro Technique is a time management method developed by
                Francesco Cirillo in the late 1980s. The technique uses a timer
                to break down work into intervals, traditionally 25 minutes in
                length, separated by short breaks.
                <sup>
                  [
                  <a
                    href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    1
                  </a>
                  ]
                </sup>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="/img/chronometer.svg"
              alt="Chronometer image"
              height="150"
            />
            <div>
              <h3>Focus Sessions</h3>
              <p>
                You simply want a short focus session or have no trouble staying
                concentrated for long periods of time? Simply use the focus
                session. Pick a time and get to work!
              </p>
            </div>
          </div>
          <div className="card">
            <img src="/img/stats.svg" alt="Statistics image" height="150" />
            <div>
              <h3>Track your progress</h3>
              <p>
                You can access Focus's Leaderboard and join the competition for
                the most persistent! It is optional as it makes your focus time
                public, but it's a fun way to see your progress while
                participating in a friendly competition.
              </p>
            </div>
          </div>
        </section>
        <button
          className="btn-lg"
          onClick={() => {
            window.location.replace(
              `https://discord.com/oauth2/authorize?client_id=${BOT_CLIENT_ID}&permissions=0&scope=bot`
            );
          }}
        >
          <i className="fas fa-cloud-download-alt"></i>Invite to Discord
        </button>
        <section>
          <h2>Contribute</h2>
          <div style={{ textAlign: "left" }}>
            <p>
              To contribute to the project, check out the code on Github or
              contact us on the contribute channel of the focus Discord server
              or by email.
            </p>
          </div>
          <p>
            <a href="https://github.com/Dahmer-Open/Focus.bot">
              <i className="social-link fab fa-github" />
            </a>
            <a href="https://discord.gg/QKg4FF2">
              <i className="social-link fab fa-discord" />
            </a>
            <a href="mailto:me@dominicfournier.com">
              <i className="social-link fas fa-envelope" />
            </a>
          </p>
        </section>
        <section>
          <h2>FAQ</h2>
          <div style={{ textAlign: "left" }}>
            <h3>Who's behind Focus?</h3>
            <p>
              Focus is a collaborative, Open-Source project. That means that
              nobody owns it. It also means that it is developed and maintained
              by any willing developer!
            </p>
            <h3>How is this service free?</h3>
            <p>
              There are no fees attached to running Focus. For our
              infrastructure, we targeted services that are free of charge for
              our current scale and the people building it do it for free. Also,
              there is no monetary intent behind the project, we simply believe
              that productivity and dedication from all will help build a better
              tomorrow.
            </p>
            <h3>How can I use Focus?</h3>
            <p>
              Right now, Focus is only available as a{" "}
              <a href="https://discord.com/new">Discord</a> bot. If you're
              interested in using it, you need to create your own Discord server
              or ask your server administrator to add the bot. Instructions on
              installing Discord bots can be found{" "}
              <a href="https://www.techjunkie.com/discord-install-bots/">
                here
              </a>
              .
            </p>
          </div>
        </section>
        <footer>
          <span>
            © {new Date().getFullYear()}{" "}
            <a href="https://github.com/Dahmer-Open">Dahmer-Open</a>
          </span>
          <a href="https://www.vecteezy.com/free-vector/wall-paper-office">
            Wall Paper Office Vectors by Vecteezy
          </a>
        </footer>
      </div>
    </div>
  );
}
