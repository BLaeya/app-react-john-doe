import GitHubProfile from "./assets/components/GithubProfile";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container mt-5">
      <GitHubProfile username="github-john-doe" />
    </div>
  );
}

export default App;
