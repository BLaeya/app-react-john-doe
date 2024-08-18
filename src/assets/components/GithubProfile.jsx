import { useEffect, useState } from "react";
import axios from "axios";

const GithubProfile = ({ username }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => setProfile(response.data))
      .catch((error) => console.error("Error fetching GitHub profile:", error));
  }, [username]);

  if (!profile)
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );

  return (
    <div className="card">
      <img
        src={profile.avatar_url}
        alt={profile.name}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{profile.name}</h5>
        <p className="card-text">{profile.bio}</p>
        <a href={profile.html_url} className="btn btn-primary">
          Voir le profile github
        </a>
      </div>
    </div>
  );
};

export default GithubProfile;
