function App() {
  function dark() {
    let bgColor = (document.body.style.background = "black");
    console.log(bgColor);
  }
  function light() {
    let bgLight = (document.body.style.background = "white");
    console.log(bgLight);
  }

  return (
    <>
      <div>
        <div
          className="h-8 w-8 bg-black mt-[10rem] ml-[30rem] text-white text-[12px]
      pt-2 text-center cursor-pointer "
          onClick={dark}
        >
          Dark
        </div>
        <div
          className="h-8 w-8 bg-white mt-[-2rem] ml-[25rem] border border-black text-[12px]
      text-center pt-2 cursor-pointer
       "
          onClick={light}
        >
          Light
        </div>
      </div>
    </>
  );
}

export default App;
