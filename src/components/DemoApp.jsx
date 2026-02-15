import { useState, useContext } from "react";
import { DemoAppContext } from "../store/demo-app-context";

export function DemoApp() {
  const [theme, setTheme] = useState("light");
  const [fontSize, setFontSize] = useState("medium");

  const ctxValue = {
    theme: theme,
    setTheme: setTheme,
    fontSize: fontSize,
    setFontSize: setFontSize,
  };

  return (
    <DemoAppContext value={ctxValue}>
      <Layout theme={theme} setTheme={setTheme} fontSize={fontSize} setFontSize={setFontSize} />
    </DemoAppContext>
  );
}

function Layout() {
  const { theme } = useContext(DemoAppContext);

  const bgColor = theme === "light" ? "#ffffff" : "#1a1a1a";
  const color = theme === "light" ? "#000000" : "#ffffff";

  return (
    <div style={{ backgroundColor: bgColor, color, minHeight: "100vh", padding: "20px" }}>
      <Header />
      <Content />
    </div>
  );
}

function Header() {
  return (
    <header style={{ marginBottom: "20px" }}>
      <Navigation />
      <Controls />
    </header>
  );
}

function Navigation() {
  const { fontSize } = useContext(DemoAppContext);
  const size = fontSize === "small" ? "14px" : fontSize === "large" ? "20px" : "16px";

  return (
    <nav style={{ fontSize: size, marginBottom: "10px" }}>
      <a href="#home">Home</a> | <a href="#about">About</a> | <a href="#contact">Contact</a>
    </nav>
  );
}

function Controls() {
  return (
    <div>
      <ThemeToggle />
      <FontControl />
    </div>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useContext(DemoAppContext);

  return <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>{theme === "light" ? "Dark" : "Light"} Mode</button>;
}

function FontControl() {
  const { fontSize, setFontSize } = useContext(DemoAppContext);

  return (
    <select value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
      <option value="small">Small</option>
      <option value="medium">Medium</option>
      <option value="large">Large</option>
    </select>
  );
}

function Content() {
  const { fontSize } = useContext(DemoAppContext);
  const size = fontSize === "small" ? "14px" : fontSize === "large" ? "20px" : "16px";

  return (
    <main style={{ fontSize: size }}>
      <Article />
      <Sidebar />
    </main>
  );
}

function Article() {
  const { theme } = useContext(DemoAppContext);

  return (
    <article>
      <h1>Article Title</h1>
      <p>This content uses the {theme} theme. Notice how theme props are passed through every component!</p>
    </article>
  );
}

function Sidebar() {
  const { theme } = useContext(DemoAppContext);

  return (
    <aside style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}>
      <h3>Sidebar</h3>
      <p>Current theme: {theme}</p>
    </aside>
  );
}
