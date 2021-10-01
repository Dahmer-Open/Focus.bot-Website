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
          <div className="banner-donate">
            <button
              onClick={() => {
                window.location.replace("http://paypal.me/dahmer96");
              }}
            >
              <i className="fas fa-donate" />
              Donate
            </button>
          </div>
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
          {/* <button className="primary">
            <i className="fas fa-terminal"></i>Features &amp; Commands
          </button> */}
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
          {/* <p style={{ textAlign: "left" }}>
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
          </p> */}
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
              <h3>Track your Progress</h3>
              <p>
                See how long you've stayed focused, what's your longest session,
                how many sessions were completed successfully, how many were
                interrupted, etc. This helps you stay motivated and improve your
                work environment.
              </p>
            </div>
          </div>
          <div className="card muted">
            <img src="/img/trophy.svg" alt="Statistics image" height="150" />
            <div>
              <h3>INCOMING - Participate in a Friendly Competition</h3>
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
              If you know a bit if code and love Focus and would love to
              contribute to it's evolution, contact me with either of the links
              below. If you're not a programmer, you can always{" "}
              <a
                href="http://paypal.me/dahmer96"
                target="_blank"
                rel="noopener noreferrer"
              >
                donate
              </a>{" "}
              to help focus grow!
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
              Me! I'm Dominic Fournier, a software engineering student from
              Canada. I'm always looking for interested developers to work with,
              but for now, I am the sole developer of Focus.
            </p>
            <h3>How is this service free?</h3>
            <p>
              There are no fees attached to running Focus. Free of charge
              services are used for our current infrastructure. I also build it
              as a personnal project, so I handle the cost of development,
              because I believe that productivity and dedication from all will
              help build a better tomorrow.
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
            <h3>What about the privacy of my data?</h3>
            <p>
              Focus only stores minimal information about you, just enough to
              work. Your full discord username (ie.: Adam#1234), Identifier,
              your server Identifier and the URL to your discord avatar are
              stored, that's it. Your study sessions are also stored (length and
              date). This data is not and will not be used for profit in any
              way.
            </p>
          </div>
        </section>
        <footer>
          <span>
            ©{" "}
            {new Date().getFullYear() !== 2020
              ? `${new Date().getFullYear()} - `
              : ""}
            {new Date().getFullYear()}{" "}
            <a href="https://dominicfournier.com">Dominic Fournier</a>
          </span>
          <a href="https://www.vecteezy.com/free-vector/wall-paper-office">
            Wall Paper Office Vectors by Vecteezy
          </a>
        </footer>
      </div>
    </div>
  );
}
