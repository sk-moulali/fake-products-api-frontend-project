import { useState } from "react";

function Login(props) {
  const [formData, setFormData] = useState({
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
      <form action="" onSubmit={handleSubmit}>
        <div className="flex justify-center items-center gap-5">
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            name="email"
            className="border"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <br />

        <div className="flex justify-center items-center gap-2">
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            name="password"
            className="border"
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

export default Login;
