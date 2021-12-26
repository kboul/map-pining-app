const getFields = (username: string, password: string) => [
  {
    id: 0,
    label: "Username",
    name: "username",
    type: "text",
    value: username
  },
  {
    id: 1,
    label: "Password",
    name: "password",
    type: "password",
    value: password
  }
];

export { getFields };
