import React from "react";
import CanvasDraw from "react-canvas-draw";
import { GithubPicker } from "react-color";
import "./styles.css";
import { useClickAway } from "./useClickAway";

import classNames from "classnames";
import { useWindowSize } from "./useWidth";
import { randomPhrase } from "./randomPhrase";
import { download } from "./download";
import { addBackgroundToCanvas } from "./addBackgroundToCanvas";

const DEFAULT_SIZE = 600;

const defaultProps = {
  loadTimeOffset: 5,
  lazyRadius: 0,
  brushRadius: 2,
  catenaryColor: "#0a0302",
  gridColor: "rgba(150,150,150,0.17)",
  hideGrid: true,
  canvasWidth: DEFAULT_SIZE,
  canvasHeight: DEFAULT_SIZE,
  disabled: false,
  imgSrc: "",
  saveData: "",
  immediateLoading: false,
  hideInterface: false,
};

const colors = [
  "#B80000",
  "#DB3E00",
  "#FCCB00",
  "#008B02",
  "#006B76",
  "#1273DE",
  "#004DCF",
  "#5300EB",
  "#000000",
  "#EB9694",
  "#FAD0C3",
  "#FEF3BD",
  "#C1E1C5",
  "#BEDADC",
  "#C4DEF6",
  "#BED3F3",
  "#D4C4FB",
  "#CCCCCC",
];

const paletteWidth = `${Math.ceil(colors.length / 2) * 32}px`;

const getImg = (ref) =>
  addBackgroundToCanvas(ref.current.canvasContainer.children[1], "#FFFFFF");

const prompt = randomPhrase();

export default function App() {
  const initRW = Boolean(localStorage.getItem("rotation_warning") !== "false");
  const canvasRef = React.createRef(null);
  const [brushColor, setBrushColor] = React.useState("#000000");
  const [showColor, setShowColor] = React.useState(false);
  const [saveData, setSaveData] = React.useState("");
  const [rw, setRW] = React.useState(initRW);

  const { width } = useWindowSize();

  const paletteRef = useClickAway(() => {
    setShowColor(false);
  });

  const handleClear = () => {
    canvasRef.current.clear();
    setSaveData("");
  };

  const handleCanvasChange = () => {
    const saveData = getImg(canvasRef);
    setSaveData(saveData);
  };

  const handleDismissRW = () => {
    localStorage.setItem("rotation_warning", "false");
    setRW(false);
  };

  const handleDownload = () => {
    download(saveData, `${new Date().toISOString()}.png`);
  };

  const forwardWidth = Math.min(DEFAULT_SIZE, width);

  const props = {
    ...defaultProps,
    canvasWidth: forwardWidth,
    canvasHeight: forwardWidth,
    className: classNames("canvas"),
    onChange: handleCanvasChange,
    ref: canvasRef,
    brushColor,
    catenaryColor: brushColor,
  };

  return (
    <main id="app">
      {rw && (
        <div id="rotate-me">
          <div>
            <span role="img" aria-label="">
              ⚠️
            </span>{" "}
            This works best in portrait mode on this device!
          </div>
          <div className="dismissRWButton">
            <button onClick={handleDismissRW}>
              let me play this way anyway
            </button>
          </div>
        </div>
      )}
      <div className="prompt">
        draw this:
        <div>
          <b>&quot;{prompt}&quot;</b>
        </div>
      </div>
      <CanvasDraw {...props} />
      <div className="button-container">
        <div ref={paletteRef} className="picker-container">
          <button
            className="palette"
            onClick={() => {
              setShowColor((s) => !s);
            }}
          >
            <span role="img" aria-label="">
              🎨
            </span>{" "}
            color&#8230;
          </button>
          {showColor && (
            <div className="picker-popper">
              <GithubPicker
                triangle={"hide"}
                color={brushColor}
                colors={colors}
                width={paletteWidth}
                onChangeComplete={(c) => setBrushColor(c.hex)}
              />
            </div>
          )}
        </div>
        <button
          className="undo"
          onClick={() => {
            canvasRef.current.undo();
          }}
        >
          <span role="img" aria-label="">
            ↩️
          </span>{" "}
          undo
        </button>
        <button className="clear" onClick={handleClear}>
          <span className="non-hover" role="img" aria-label="">
            💣
          </span>{" "}
          <span className="hover" role="img" aria-label="">
            🧨
          </span>{" "}
          clear
        </button>
        {saveData && (
          <button className="save" onClick={handleDownload}>
            <span role="img" aria-label="">
              📲
            </span>{" "}
            download
          </button>
        )}
      </div>
      {saveData && (
        <>
          <p>
            <br />
            ##########################
            <br /># ~*~ DEBUGGING INFO ~*~ #<br />
            ##########################
          </p>
          <img src={saveData} alt="" />
          <textarea rows={10} value={saveData} readOnly />
        </>
      )}
    </main>
  );
}
