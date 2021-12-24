const getFields = (username: string, email: string, password: string) => [
  {
    id: 0,
    label: "Username",
    name: "username",
    type: "text",
    value: username
  },
  { id: 1, label: "Email", name: "email", type: "email", value: email },
  {
    id: 2,
    label: "Password",
    name: "password",
    type: "password",
    value: password
  }
];

export { getFields };
