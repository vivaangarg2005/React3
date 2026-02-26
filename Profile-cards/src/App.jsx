import Card from "./components/card";

function App() {
  return (
    <>
      <h2 className="Heading">Profile Cards</h2>
      <div className="main">
        <Card
          name="Vivaan Garg"
          id="@vivaan2005"
          description="Software Developer at Google"
          src="https://vivaangarg.netlify.app/images/vivaan-profile.jpg"
          project={10}
          task={5}
          performance={100}
          points={1500}
        ></Card>

        <Card
          name="Aarav Mehta"
          id="@aarav_dev"
          description="Frontend Engineer at Microsoft"
          src="https://randomuser.me/api/portraits/men/32.jpg"
          project={8}
          task={3}
          performance={96}
          points={840}
          rating={80}
        ></Card>

        <Card
          name="Ishita Sharma"
          id="@ishita_codes"
          description="Full Stack Developer at Amazon"
          src="https://randomuser.me/api/portraits/women/44.jpg"
          project={12}
          task={4}
          performance={98}
          points={1100}
          rating={90}
        ></Card>

        <Card
          name="Rohan Patel"
          id="@rohan_builds"
          description="Backend Developer at Netflix"
          src="https://randomuser.me/api/portraits/men/67.jpg"
          project={6}
          task={2}
          performance={94}
          points={620}
        ></Card>

        <Card
          name="Neha Verma"
          id="@neha_ui"
          description="UI/UX Engineer at Adobe"
          src="https://randomuser.me/api/portraits/women/68.jpg"
          project={9}
          task={5}
          performance={97}
          points={950}
        ></Card>

        <Card
          name="Kabir Singh"
          id="@kabir_ai"
          description="ML Engineer at OpenAI"
          src="https://randomuser.me/api/portraits/men/75.jpg"
          project={15}
          task={6}
          performance={99}
          points={100}
        ></Card>

        <Card
          name="Simran Kaur"
          id="@simran_dev"
          description="Mobile App Developer at Meta"
          src="https://randomuser.me/api/portraits/women/12.jpg"
          project={7}
          task={2}
          performance={95}
          points={580}
        ></Card>

        <Card
          name="Aditya Rao"
          id="@aditya_cloud"
          description="Cloud Engineer at IBM"
          src="https://randomuser.me/api/portraits/men/18.jpg"
          project={11}
          task={4}
          performance={97}
          points={1020}
        ></Card>
      </div>
    </>
  );
}

export default App;
