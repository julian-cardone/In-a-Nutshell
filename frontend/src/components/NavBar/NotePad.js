

const NotePad = () => {
  return (
    <>
      <div className="note-pad">
        <h2 style={{ display: "flex", justifyContent: "center" }}>
          Make a Note!
        </h2>
      </div>
      <div style={{ paddingLeft: "30px" }}>
        <textarea style={{ height: "200px", width: "300px" }}></textarea>
      </div>
    </>
  );
};

export default NotePad;
