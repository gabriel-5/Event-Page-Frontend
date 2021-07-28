import React from "react";
import Dashboard from "./Dashboard";
import { ApiClient } from "./apiClient";

function App() {
  const client = new ApiClient();

  return (
    <>
      <Dashboard client={client} />
    </>
  );
}

export default App;
