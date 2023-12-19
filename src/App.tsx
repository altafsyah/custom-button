import Button from "./components/buttons";
import "./index.css";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="w-full h-screen flex flex-col gap-5 px-10 py-12">
      <div className="flex flex-col gap-3">
        <h1 className="text-lg font-semibold">Primary Button</h1>
        <div className="grid gap-3 h-fit w-fit">
          <Button bgColor="primary" size="small">
            Small Button
          </Button>
          <Button bgColor="primary">Base Button</Button>
          <Button bgColor="primary" size="large">
            Large Button
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-lg font-semibold">Secondary Button</h1>
        <div className="grid gap-3 h-fit w-fit">
          <Button bgColor="secondary" size="small">
            Without Icon
          </Button>
          <Button bgColor="secondary" icon={<FontAwesomeIcon icon={faEye} />}>
            With Icon
          </Button>
          <Button
            bgColor="secondary"
            size="large"
            icon={<FontAwesomeIcon icon={faEdit} />}
            iconPosition="right"
          >
            Secondary Button
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-lg font-semibold">Secondary Button</h1>
        <div className="grid gap-3 h-fit w-fit">
          <Button bgColor="danger" size="small">
            Without Tooltip
          </Button>
          <Button
            bgColor="danger"
            icon={<FontAwesomeIcon icon={faEye} />}
            tooltip="Halo"
            tooltipPosition="top"
          >
            Tooltip on Top
          </Button>
          <Button
            bgColor="danger"
            size="large"
            icon={<FontAwesomeIcon icon={faEdit} />}
            iconPosition="right"
            tooltip="TOP"
            tooltipPosition="top"
          >
            Secondary Button
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
