function Profile({ name, imageLink, isHappy, animation }) {
  return (
    <div className="profile">
      <p>
        <img
          className={`${isHappy ? "happy-animate" : "normal-animate"} ${
            animation ? "" : "animation-paused"
          }`}
          src={imageLink}
          alt="NO IMAGE"
        />
      </p>
      <p className="name">{name}</p>
    </div>
  );
}

export default Profile;
