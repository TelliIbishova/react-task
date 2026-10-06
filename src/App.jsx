import ProfileCard from "./components/ProfileCard"

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f3f4f6",
      }}
    >
      <ProfileCard
        image="https://foto.lunar.az/uploads/posts/2021-06/1623779628_img_20210615_215059_463.jpg"
        name="Telli İbişova"
        job="Kompüter mühəndisi tələbəsi"
        bio="Frontend tələbəsi"
      />
    </div>
  )
}

export default App