declare module "vanta/dist/vanta.globe.min" {
  type VantaOptions = Record<string, unknown>;
  type VantaEffect = { destroy: () => void };
  const effect: (options: VantaOptions) => VantaEffect;
  export default effect;
}
