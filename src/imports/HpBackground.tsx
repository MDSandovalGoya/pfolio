import imgHomePageBackground from "figma:asset/99aab4281710a725000f7358c0f4e923940744b5.png";

export default function HpBackground() {
  return (
    <div className="relative size-full" data-name="hp background">
      <div className="absolute bg-[#3d3d3d] h-[5755px] left-[14px] top-[3px] w-[1440px]" data-name="home page background" />
      <div className="absolute h-[5758px] left-0 opacity-3 top-0 w-[1440px]" data-name="home page background">
        <div aria-hidden="true" className="absolute bg-size-[1024px_1024px] bg-top-left inset-0 opacity-94 pointer-events-none" style={{ backgroundImage: `url('${imgHomePageBackground}')` }} />
      </div>
    </div>
  );
}