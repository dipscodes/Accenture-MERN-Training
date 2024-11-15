function UserLoggin() {
  let msg = alert("hi");

  return <h1>Welcome Back{msg}</h1>;
}

function GuestLoggin() {
  return <h1>ConditionalRender Demo | Please sign up</h1>;
}

function ConditionalRenderDemo(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserLoggin />;
  }

  return <GuestLoggin />;
}

export default ConditionalRenderDemo;
