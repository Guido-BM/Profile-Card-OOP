import "../style/index.css";

window.onload = function() {
  const user = createUser();
  render(user);

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");

      user[attribute](
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value
      );
      render(user);
    });
  });
};

function render(user = createUser()) {
  let cover = `<div class="cover"><img src="${user.background}" /></div>`;
  if (user.getIncludeCover() == false) cover = "<div class='cover'></div>";

  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${user.avatarURL}" class="photo" />
          <h1>${user.getName()} ${user.getLastName()}</h1>
          <h2>${user.getRole()}</h2>
          <h3> ${user.getCity()} , ${user.getCountry()} </h3>
          <ul class=${user.getSocialMediaPosition()}>
            <li><a href="https://twitter.com/${user.getTwitter()}"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://github.com/${user.getGithub()}"><i class="fab fa-github"></i></a></li>
            <li><a href="https://linkedin.com/school/${user.getTwitter()}"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${user.getInstagram()}"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

const createUser = () => {
  let includeCover = true;
  let socialMediaPosition = "position-left";

  let twitter = null;
  let github = null;
  let linkedin = null;
  let instagram = null;
  let name = null;
  let lastName = null;
  let role = null;
  let country = null;
  let city = null;
  return {
    setName: newName => {
      name = newName;
    },
    getName: () => name || "Lucy",

    setLastName: newLastName => {
      lastName = newLastName;
    },
    getLastName: () => lastName || "Boilette",

    setCity: newSetCity => {
      city = newSetCity;
    },
    getCity: () => city || "Miami",

    setCountry: newSetCountry => {
      country = newSetCountry;
    },
    getCountry: () => country || "USA",

    setRole: newRole => {
      role = newRole;
    },
    getRole: () => role || "Web Developer",

    setInstagram: newInstagram => {
      instagram = newInstagram;
    },
    getInstagram: () => instagram || "4geeksacademy",

    setLinkedin: newLinkedin => {
      linkedin = newLinkedin;
    },
    getLinkedin: () => linkedin || "4geeksacademy",

    setGithub: newGithub => {
      github = newGithub;
    },
    getGithub: () => github || "4geeksacademy",

    setTwitter: newTwitter => {
      twitter = newTwitter;
    },
    getTwitter: () => twitter || "4geeksacademy",

    setSocialMediaPosition: newSocialMediaPosition => {
      socialMediaPosition = newSocialMediaPosition;
    },
    getSocialMediaPosition: () => socialMediaPosition,

    setIncludeCover: newIncludeCover => {
      includeCover = newIncludeCover;
    },
    getIncludeCover: () => includeCover,

    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",

    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg"
  };
};
