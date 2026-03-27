// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function Dashboard() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("token");

//         const res = await axios.get("http://localhost:5000/api/auth/dashboard", {
//           headers: { Authorization: token },
//         });

//         setData(res.data);
//       } catch {
//         window.location.href = "/";
//       }
//     };

//     fetchData();
//   }, []);

//   const logout = () => {
//     localStorage.clear();
//     window.location.href = "/";
//   };

//   if (!data) return <p>Loading...</p>;
//  return (
//     <div>
//       <h2>Welcome {data.user.name}</h2>
//       <button onClick={logout}>Logout</button>

//       <h3>Leads</h3>
//       <ul>{data.data.leads.map((l, i) => <li key={i}>{l}</li>)}</ul>

//       <h3>Tasks</h3>
//       <ul>{data.data.tasks.map((t, i) => <li key={i}>{t}</li>)}</ul>

//       <h3>Users</h3>
//       <ul>{data.data.users.map((u, i) => <li key={i}>{u}</li>)}</ul>
//     </div>
//   );
// }



import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get("http://localhost:5000/api/auth/dashboard", {
          headers: { Authorization: token },
        });

        setData(res.data);
      } catch {
        window.location.href = "/";
      }
    };

    fetchData();
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  if (!data) return <p className="text-center mt-10">Loading...</p>;
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Welcome {data.user.name}</h2>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold mb-2">Leads</h3>
          <ul>{data.data.leads.map((l, i) => <li key={i}>{l}</li>)}</ul>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold mb-2">Tasks</h3>
          <ul>{data.data.tasks.map((t, i) => <li key={i}>{t}</li>)}</ul>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold mb-2">Users</h3>
          <ul>{data.data.users.map((u, i) => <li key={i}>{u}</li>)}</ul>
        </div>
      </div>
    </div>
  );
}
