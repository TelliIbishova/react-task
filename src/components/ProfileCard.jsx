function ProfileCard({ image, name, job, bio }) {
  return (
    <div
      style={{
        width: "300px",
        padding: "25px",
        textAlign: "center",
        border: "1px solid #ddd",
        borderRadius: "15px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        backgroundColor: "white",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "80px",
          height: "80px",
          objectFit: "cover",
          borderRadius: "50%",
          display: "block",
          margin: "0 auto 15px",
        }}
      />

      <h2>{name}</h2>

      <p>{job}</p>

      <p>{bio}</p>
    </div>
  )
}

export default ProfileCard