import imgHomePageBackground from "figma:asset/99aab4281710a725000f7358c0f4e923940744b5.png";

function HpBackground() {
  return (
    <div className="absolute contents left-[-19px] top-0" data-name="hp background">
      <div className="absolute bg-[#3d3d3d] h-[5755px] left-[-4.95px] top-[3px] w-[1444.952px]" data-name="home page background" />
      <div className="absolute h-[5758px] left-[-19px] opacity-3 top-0 w-[1444.952px]" data-name="home page background">
        <div aria-hidden="true" className="absolute bg-size-[1024px_1024px] bg-top-left inset-0 opacity-94 pointer-events-none" style={{ backgroundImage: `url('${imgHomePageBackground}')` }} />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[60px] items-center leading-[normal] not-italic relative shrink-0 text-[14px] text-white">
      <p className="relative shrink-0">{`Work `}</p>
      <p className="relative shrink-0">Bio</p>
      <p className="relative shrink-0">Contact me</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[422px] items-center left-[93px] top-[11px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-white">Matthew Sandoval Goya</p>
      <div className="bg-[#d9d9d9] rounded-[10px] shrink-0 size-[30px]" data-name="logo" />
      <Frame1 />
    </div>
  );
}

function NavBar() {
  return (
    <div className="absolute contents left-0 top-0" data-name="nav bar">
      <div className="absolute bg-[#282828] h-[52px] left-0 top-0 w-[1440px]" data-name="nav bar" />
      <Frame />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute contents font-['Konkhmer_Sleokchher:Regular',sans-serif] left-[35px] not-italic text-right top-[210px] whitespace-pre-wrap" data-name="header">
      <div className="-translate-x-full absolute leading-[200px] left-[1004px] text-[130px] text-white top-[323px] w-[969px]">
        <p className="mb-0">{`From Concept `}</p>
        <p>To Product</p>
      </div>
      <p className="-translate-x-full absolute h-[116px] leading-[normal] left-[261px] text-[#a5a5a5] text-[64px] top-[210px] w-[202px]">Work</p>
    </div>
  );
}

function Projects() {
  return (
    <div className="absolute contents left-[35px] top-[770px]" data-name="projects">
      <div className="absolute bg-[#d9d9d9] h-[608px] left-[35px] top-[770px] w-[406px]" />
      <div className="absolute bg-[#d9d9d9] h-[608px] left-[517px] top-[770px] w-[406px]" />
      <div className="absolute bg-[#d9d9d9] h-[608px] left-[999px] top-[770px] w-[406px]" />
      <p className="absolute font-['Konkhmer_Sleokchher:Regular',sans-serif] leading-[normal] left-[159px] not-italic text-[20px] text-white top-[1425px]">project 1 - 20XX</p>
      <p className="absolute font-['Konkhmer_Sleokchher:Regular',sans-serif] leading-[normal] left-[641px] not-italic text-[20px] text-white top-[1425px]">project 2 - 20XX</p>
      <p className="absolute font-['Konkhmer_Sleokchher:Regular',sans-serif] leading-[normal] left-[1123px] not-italic text-[20px] text-white top-[1425px]">project 3- 20XX</p>
      <div className="absolute bg-[#d9d9d9] h-[608px] left-[37px] top-[1626px] w-[406px]" />
      <div className="absolute bg-[#d9d9d9] h-[608px] left-[519px] top-[1626px] w-[406px]" />
      <div className="absolute bg-[#d9d9d9] h-[608px] left-[1001px] top-[1626px] w-[406px]" />
      <p className="absolute font-['Konkhmer_Sleokchher:Regular',sans-serif] leading-[normal] left-[161px] not-italic text-[20px] text-white top-[2281px]">project 4 - 20XX</p>
      <p className="absolute font-['Konkhmer_Sleokchher:Regular',sans-serif] leading-[normal] left-[643px] not-italic text-[20px] text-white top-[2281px]">project 5 - 20XX</p>
      <p className="absolute font-['Konkhmer_Sleokchher:Regular',sans-serif] leading-[normal] left-[1125px] not-italic text-[20px] text-white top-[2281px]">project 6 - 20XX</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="col-1 flex flex-col justify-center ml-0 mt-0 relative row-1 text-[28px] text-center text-white whitespace-nowrap">
        <p className="leading-[normal]">Studio</p>
      </div>
      <div className="col-1 h-[233px] leading-[80px] ml-0 mt-[48px] relative row-1 text-[#dadada] text-[20px] w-[90px] whitespace-pre-wrap">
        <p className="mb-0">About</p>
        <p className="mb-0">Address</p>
        <p>Contact</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="col-1 flex flex-col justify-center ml-0 mt-0 relative row-1 text-[28px] text-center text-white whitespace-nowrap">
        <p className="leading-[normal]">Directory</p>
      </div>
      <div className="col-1 flex flex-col h-[233px] justify-center leading-[80px] ml-0 mt-[51px] relative row-1 text-[#dadada] text-[20px] w-[80px] whitespace-pre-wrap">
        <p className="mb-0">Work</p>
        <p className="mb-0">Bio</p>
        <p>Contact</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="col-1 flex flex-col justify-center ml-0 mt-0 relative row-1 text-[28px] text-center text-white whitespace-nowrap">
        <p className="leading-[normal]">Social</p>
      </div>
      <div className="col-1 flex flex-col h-[233px] justify-center leading-[80px] ml-0 mt-[51px] relative row-1 text-[#dadada] text-[20px] w-[106px] whitespace-pre-wrap">
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">X</p>
        <p className="mb-0">Instagram</p>
        <p className="mb-0">Linkedln</p>
        <p className="mb-0">&nbsp;</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex font-['Konkhmer_Sleokchher:Regular',sans-serif] gap-[90px] h-[294.451px] items-start leading-[0] left-[878.89px] not-italic top-[2618.24px] w-[507.806px]">
      <Group1 />
      <Group />
      <Group2 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute contents left-[-6px] top-[2555px]" data-name="footer">
      <div className="absolute bg-black h-[553.651px] left-[-6px] top-[2555px] w-[1448px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Konkhmer_Sleokchher:Regular',sans-serif] h-[290.304px] justify-center leading-[0] left-[718px] not-italic text-[155px] text-center text-white top-[3057.85px] w-[1448px]">
        <p className="leading-[normal] whitespace-pre-wrap">Matthew Sandoval</p>
      </div>
      <Frame2 />
    </div>
  );
}

export default function Work() {
  return (
    <div className="bg-white relative size-full" data-name="work">
      <HpBackground />
      <NavBar />
      <Header />
      <Projects />
      <Footer />
    </div>
  );
}