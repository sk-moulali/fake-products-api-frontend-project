import { useState } from "react";

function Register(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted : ", formData);
    // Handle form submission logic here
  };

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <body className="bg-gray-300" />
      <form action="" onSubmit={handleSubmit}>
        <div className="flex justify-center items-center gap-5 bg-white">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border rounded-4xl p-2 outline-none border-none shadow-2xl text-xl font-bold bg-white"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <br />

        <div className="flex justify-center items-center gap-5">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border rounded-4xl p-2 outline-none border-none shadow-2xl text-xl font-bold bg-white"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <br />

        <div className="flex justify-center items-center gap-2">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border rounded-4xl p-2 outline-none border-none shadow-2xl text-xl font-bold bg-white"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <br />

        <button type="submit" className="border cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
