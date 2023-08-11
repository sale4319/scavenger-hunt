type ENV = Record<string, string>;

interface Window {
  __ENV__: ENV;
}
