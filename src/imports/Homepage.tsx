import imgHomePageBackground from "figma:asset/99aab4281710a725000f7358c0f4e923940744b5.png";

function HpBackground() {
  return (
    <div className="absolute contents left-[-14px] top-0" data-name="hp background">
      <div className="absolute bg-[#3d3d3d] h-[5755px] left-0 top-[3px] w-[1440px]" data-name="home page background" />
      <div className="absolute h-[5758px] left-[-14px] opacity-3 top-0 w-[1440px]" data-name="home page background">
        <div aria-hidden="true" className="absolute bg-size-[1024px_1024px] bg-top-left inset-0 opacity-94 pointer-events-none" style={{ backgroundImage: `url('${imgHomePageBackground}')` }} />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[-1px] p-[10px] top-[754px]">
      <p className="font-['Konkhmer_Sleokchher:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[155px] text-black">Matthew Sandoval</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative">
      <p className="font-['Konkhmer_Sleokchher:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[155px] text-white">Matthew Sandoval</p>
    </div>
  );
}

function ExpirementalLogoTitle() {
  return (
    <div className="absolute contents left-[-1px] top-[754px]" data-name="expiremental logo title">
      <Frame1 />
      <div className="absolute flex items-center justify-center left-[-1px] top-[852px]">
        <div className="-scale-y-100 flex-none">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function MotionVideo() {
  return (
    <div className="absolute contents left-[-1px] top-[54px]" data-name="motion video">
      <div className="absolute bg-[#d9d9d9] h-[899px] left-0 top-[54px] w-[1440px]" data-name="motion video" />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[32px] leading-[normal] left-[669px] not-italic text-[16px] text-black top-[432px] w-[101px] whitespace-pre-wrap">Motion video</p>
      <ExpirementalLogoTitle />
    </div>
  );
}

function Frame3() {
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
    <div className="absolute content-stretch flex gap-[422px] items-center left-[59px] top-[8px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-white">Matthew Sandoval Goya</p>
      <div className="bg-[#d9d9d9] rounded-[10px] shrink-0 size-[40px]" data-name="logo" />
      <Frame3 />
    </div>
  );
}

function NavBar() {
  return (
    <div className="absolute contents left-0 top-[2px]" data-name="nav bar">
      <div className="absolute bg-[#282828] h-[52px] left-0 top-[2px] w-[1440px]" data-name="nav bar" />
      <Frame />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[60px] items-center leading-[normal] not-italic relative shrink-0 text-[14px] text-white">
      <p className="relative shrink-0">{`Work `}</p>
      <p className="relative shrink-0">Bio</p>
      <p className="relative shrink-0">Contact me</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex gap-[422px] items-center left-[87px] top-[13px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-white">Matthew Sandoval Goya</p>
      <div className="bg-[#d9d9d9] rounded-[10px] shrink-0 size-[30px]" data-name="logo" />
      <Frame5 />
    </div>
  );
}

function NavBar1() {
  return (
    <div className="absolute contents left-0 top-[2px]" data-name="nav bar">
      <div className="absolute bg-[#282828] h-[52px] left-0 top-[2px] w-[1440px]" data-name="nav bar" />
      <Frame4 />
    </div>
  );
}

function Photo() {
  return (
    <div className="absolute contents left-[900px] top-[1364px]" data-name="photo 1">
      <div className="absolute bg-[#d9d9d9] h-[660px] left-[900px] top-[1364px] w-[477px]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Konkhmer_Sleokchher:Regular',sans-serif] justify-center leading-[0] left-[1092px] not-italic text-[32px] text-black top-[1694px] whitespace-nowrap">
        <p className="leading-[normal]">Photo</p>
      </div>
    </div>
  );
}

function AboutStatement() {
  return (
    <div className="absolute contents left-[93px] top-[1289px]" data-name="about statement">
      <p className="absolute font-['Konkhmer_Sleokchher:Regular',sans-serif] h-[29px] leading-[normal] left-[93px] not-italic text-[#d8d8d8] text-[20px] top-[1289px] w-[83px] whitespace-pre-wrap">About</p>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Konkhmer_Sleokchher:Regular',sans-serif] h-[617px] justify-center leading-[normal] left-[93px] not-italic text-[32px] text-white top-[1683.5px] w-[711px] whitespace-pre-wrap">
        <p className="mb-0">I am a Developer, Designer, and a creative from Queens, New York. I work with Brands, Businesses, and Founders to develop products and projects that feel premium, clear, and powerful. I enjoy working in teams or on my own and working towards a great User Experience.</p>
        <p className="mb-0">&nbsp;</p>
        <p>My Goal is to always be able to look at the work I have done and surpass the expectations of others and myself.</p>
      </div>
      <Photo />
    </div>
  );
}

function Prjct() {
  return (
    <div className="absolute contents left-[109px] top-[2344px]" data-name="prjct 1">
      <div className="absolute bg-[#d9d9d9] h-[394px] left-[109px] top-[2344px] w-[404px]" />
      <p className="absolute font-['Konkhmer_Sleokchher:Regular',sans-serif] leading-[normal] left-[232px] not-italic text-[20px] text-white top-[2771px]">project 1 - 20XX</p>
    </div>
  );
}

function Prjct1() {
  return (
    <div className="absolute contents left-[607px] top-[2342px]" data-name="prjct 2">
      <div className="absolute bg-[#d9d9d9] h-[729.283px] left-[607px] top-[2342px] w-[747.793px]" />
      <p className="-translate-x-1/2 absolute font-['Konkhmer_Sleokchher:Regular',sans-serif] h-[66.635px] leading-[normal] left-[980.9px] not-italic text-[32px] text-center text-white top-[3132.36px] w-[292.454px] whitespace-pre-wrap">project 2 - 20XX</p>
    </div>
  );
}

function Prjct2() {
  return (
    <div className="absolute contents left-[98px] top-[3262px]" data-name="prjct 3">
      <div className="absolute bg-[#d9d9d9] h-[581.214px] left-[98px] top-[3262px] w-[830px]" />
      <p className="-translate-x-1/2 absolute font-['Konkhmer_Sleokchher:Regular',sans-serif] h-[53.106px] leading-[normal] left-[513px] not-italic text-[32px] text-center text-white top-[3891.89px] w-[324.604px] whitespace-pre-wrap">project 3 - 20XX</p>
    </div>
  );
}

function ProjectSelection() {
  return (
    <div className="absolute contents left-[98px] top-[2067px]" data-name="project selection">
      <p className="absolute font-['Konkhmer_Sleokchher:Regular',sans-serif] leading-[normal] left-[518px] not-italic text-[128px] text-white top-[2067px]">Work</p>
      <Prjct />
      <Prjct1 />
      <Prjct2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex font-['Konkhmer_Sleokchher:Regular',sans-serif] items-center justify-between leading-[0] not-italic relative shrink-0 text-[30px] text-center text-white w-[739px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[normal]">{`Name  `}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[normal]">Email</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="font-['Konkhmer_Sleokchher:Regular',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] not-italic place-items-start relative shrink-0 text-[#a5a5a5] text-[24px] text-center whitespace-nowrap">
      <div className="col-1 flex flex-col justify-center ml-0 mt-0 relative row-1">
        <p className="leading-[normal]">John Doe</p>
      </div>
      <div className="col-1 flex flex-col justify-center ml-[658px] mt-0 relative row-1">
        <p className="leading-[normal]">John Doe@johnmail.com</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="h-0 relative shrink-0 w-[1166px]">
      <div className="absolute inset-[-2px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1166 2">
          <g id="Group 2">
            <line id="Line 1" stroke="var(--stroke-0, white)" strokeWidth="2" x2="624" y1="1" y2="1" />
            <line id="Line 2" stroke="var(--stroke-0, white)" strokeWidth="2" x1="659" x2="1166" y1="1" y2="1" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15px] items-start left-[137px] top-[4490px] w-[1166px]">
      <Frame7 />
      <Group />
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents font-['Konkhmer_Sleokchher:Regular',sans-serif] leading-[0] left-[137px] not-italic text-center top-[4680px] whitespace-nowrap">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[204px] text-[30px] text-white top-[4707px]">
        <p className="leading-[normal]">Message</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[190.5px] text-[#a5a5a5] text-[24px] top-[4760.5px]">
        <p className="leading-[normal]">Message</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[137px] top-[4680px]">
      <Group3 />
      <div className="absolute h-0 left-[137px] top-[5096px] w-[1166px]">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1166 2">
            <line id="Line 3" stroke="var(--stroke-0, white)" strokeWidth="2" x2="1166" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="absolute contents left-[137px] top-[4067px]" data-name="contact page">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Konkhmer_Sleokchher:Regular',sans-serif] h-[307px] justify-center leading-[150px] left-[705.5px] not-italic text-[128px] text-center text-white top-[4220.5px] w-[745px] whitespace-pre-wrap">
        <p className="mb-0">{`Lets Dream `}</p>
        <p>Together</p>
      </div>
      <Frame6 />
      <Group2 />
    </div>
  );
}

function Group5() {
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

function Group4() {
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

function Group6() {
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

function Frame8() {
  return (
    <div className="absolute content-stretch flex font-['Konkhmer_Sleokchher:Regular',sans-serif] gap-[90px] items-start leading-[0] left-[880px] not-italic top-[5285px]">
      <Group5 />
      <Group4 />
      <Group6 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute contents left-0 top-[5224px]" data-name="footer">
      <div className="absolute bg-black h-[534px] left-0 top-[5224px] w-[1440px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Konkhmer_Sleokchher:Regular',sans-serif] justify-center leading-[0] left-[720px] not-italic text-[155px] text-center text-white top-[5709px] w-[1440px]">
        <p className="leading-[normal] whitespace-pre-wrap">Matthew Sandoval</p>
      </div>
      <Frame8 />
    </div>
  );
}

export default function Homepage() {
  return (
    <div className="bg-[#2c2c2c] relative size-full" data-name="homepage">
      <HpBackground />
      <MotionVideo />
      <NavBar />
      <NavBar1 />
      <AboutStatement />
      <ProjectSelection />
      <ContactPage />
      <Footer />
    </div>
  );
}