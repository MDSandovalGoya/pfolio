import imgRectangle6 from "figma:asset/c51c8ad572ec17ac1c2c6fef3919045f1dcac5ae.png";
import imgRectangle7 from "figma:asset/3baa590a412b80d828c9acf8bf6be65cfdeba4e4.png";
import imgRectangle8 from "figma:asset/463a638110095dc5c073c7ebdc5c522a898b5afd.png";

function Prjct() {
  return (
    <div className="absolute contents left-[11px] top-[277px]" data-name="prjct 1">
      <div className="absolute h-[394px] left-[11px] top-[277px] w-[404px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle6} />
      </div>
      <p className="absolute font-['Konkhmer_Sleokchher:Regular',sans-serif] leading-[normal] left-[134px] not-italic text-[20px] text-white top-[704px]">project 1 - 20XX</p>
    </div>
  );
}

function Prjct1() {
  return (
    <div className="absolute contents left-[532px] top-[262px]" data-name="prjct 2">
      <div className="absolute h-[729px] left-[532px] top-[262px] w-[705px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[137.65%] left-[-3.18%] max-w-none top-[-1.36%] w-[106.07%]" src={imgRectangle7} />
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-['Konkhmer_Sleokchher:Regular',sans-serif] h-[66.635px] leading-[normal] left-[882.9px] not-italic text-[32px] text-center text-white top-[1065.36px] w-[292.454px] whitespace-pre-wrap">project 2 - 20XX</p>
    </div>
  );
}

function Prjct2() {
  return (
    <div className="absolute contents left-0 top-[1195px]" data-name="prjct 3">
      <div className="absolute h-[581.214px] left-0 top-[1195px] w-[830px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle8} />
      </div>
      <p className="-translate-x-1/2 absolute font-['Konkhmer_Sleokchher:Regular',sans-serif] h-[53.106px] leading-[normal] left-[415px] not-italic text-[32px] text-center text-white top-[1824.89px] w-[324.604px] whitespace-pre-wrap">project 3 - 20XX</p>
    </div>
  );
}

export default function ProjectSelection() {
  return (
    <div className="relative size-full" data-name="project selection">
      <p className="absolute font-['Konkhmer_Sleokchher:Regular',sans-serif] leading-[normal] left-[420px] not-italic text-[128px] text-white top-0">Work</p>
      <Prjct />
      <Prjct1 />
      <Prjct2 />
    </div>
  );
}