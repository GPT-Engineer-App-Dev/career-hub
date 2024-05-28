import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import PostJob from "./pages/PostJob.jsx";
import JobList from "./pages/JobList.jsx";
import ApplyJob from "./pages/ApplyJob.jsx";
import ViewApplications from "./pages/ViewApplications.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/job-list" element={<JobList />} />
        <Route path="/apply-job" element={<ApplyJob />} />
        <Route path="/view-applications" element={<ViewApplications />} />
      </Routes>
    </Router>
  );
}

export default App;
