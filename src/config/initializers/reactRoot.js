import { createRoot } from "react-dom/client";

export const run = async () => {
  const rootElement = document.getElementById('root');
  window.reactRootElement = createRoot(rootElement);
}
