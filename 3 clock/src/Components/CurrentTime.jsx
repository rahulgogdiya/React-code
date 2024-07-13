let CurrentTime = () => {
  let time = new Date();
  return (
    <p>
      Current time : {time.toLocaleDateString()} , {time.toLocaleTimeString()} , {time.getFullYear()}
    </p>
  );
};

export default CurrentTime;
