import svgPaths from "./svg-fd1f2peixo";
import imgContent from "figma:asset/3f8b70b6cdfe9ef6ed25dae5d47b67bb81b754da.png";

function TaglineWrapper() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="font-['Libre_Franklin:SemiBold',_sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-black text-center text-nowrap whitespace-pre">Why</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[24px] items-center relative shrink-0 text-black text-center w-full" data-name="Content">
      <p className="font-['Playfair_Display:Regular',_sans-serif] leading-[1.2] relative shrink-0 text-[60px] tracking-[-0.6px] w-full">{`Why choose Bartlett & Partners`}</p>
      <p className="font-['Libre_Franklin:Regular',_sans-serif] leading-[1.5] relative shrink-0 text-[20px] w-full">We deliver exceptional property services with precision</p>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper />
      <Content />
    </div>
  );
}

function TaglineWrapper1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="font-['Libre_Franklin:SemiBold',_sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-center text-nowrap text-white whitespace-pre">Tagline</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[24px] items-start relative shrink-0 text-white w-full" data-name="Content">
      <p className="font-['Playfair_Display:Regular',_sans-serif] leading-[1.2] relative shrink-0 text-[48px] tracking-[-0.48px] w-full">Personal service that understands you</p>
      <p className="font-['Libre_Franklin:Regular',_sans-serif] leading-[1.5] relative shrink-0 text-[18px] w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
    </div>
  );
}

function ContentTop() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content Top">
      <TaglineWrapper1 />
      <Content1 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[6px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Libre_Franklin:Medium',_sans-serif] font-medium leading-[1.5] relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">Learn</p>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron_right">
          <path d={svgPaths.p116eba00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Button">
      <p className="font-['Libre_Franklin:Medium',_sans-serif] font-medium leading-[1.5] relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">Discover</p>
      <ChevronRight />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Actions">
      <Button />
      <Button1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Content">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgContent} />
        <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0" />
      </div>
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start justify-center p-[48px] relative size-full">
          <ContentTop />
          <Actions />
        </div>
      </div>
    </div>
  );
}

function Relume() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Relume">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Relume">
          <path clipRule="evenodd" d={svgPaths.p29729300} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[8px] items-start relative shrink-0 text-white w-full" data-name="Content">
      <p className="font-['Playfair_Display:Regular',_sans-serif] leading-[1.3] relative shrink-0 text-[32px] tracking-[-0.32px] w-full">Boutique marketing that stands out</p>
      <p className="font-['Libre_Franklin:Regular',_sans-serif] leading-[1.5] relative shrink-0 text-[18px] w-full">Tailored approach for every unique client</p>
    </div>
  );
}

function ContentTop1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content Top">
      <Relume />
      <Content3 />
    </div>
  );
}

function ChevronRight1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron_right">
          <path d={svgPaths.p116eba00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Button">
      <p className="font-['Libre_Franklin:Medium',_sans-serif] font-medium leading-[1.5] relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">Explore</p>
      <ChevronRight1 />
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Actions">
      <Button2 />
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Content">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgContent} />
        <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0" />
      </div>
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
          <ContentTop1 />
          <Actions1 />
        </div>
      </div>
    </div>
  );
}

function Relume1() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Relume">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Relume">
          <path clipRule="evenodd" d={svgPaths.p29729300} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[8px] items-start relative shrink-0 text-white w-full" data-name="Content">
      <p className="font-['Playfair_Display:Regular',_sans-serif] leading-[1.3] relative shrink-0 text-[32px] tracking-[-0.32px] w-full">Results driven by local expertise</p>
      <p className="font-['Libre_Franklin:Regular',_sans-serif] leading-[1.5] relative shrink-0 text-[18px] w-full">Strategic presentation of your property</p>
    </div>
  );
}

function ContentTop2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content Top">
      <Relume1 />
      <Content5 />
    </div>
  );
}

function ChevronRight2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron_right">
          <path d={svgPaths.p116eba00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Button">
      <p className="font-['Libre_Franklin:Medium',_sans-serif] font-medium leading-[1.5] relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">Button</p>
      <ChevronRight2 />
    </div>
  );
}

function Actions2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Actions">
      <Button3 />
    </div>
  );
}

function Content6() {
  return (
    <div className="basis-0 grow h-[351px] min-h-px min-w-px relative shrink-0" data-name="Content">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgContent} />
        <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0" />
      </div>
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[351px] items-start p-[24px] relative w-full">
          <ContentTop2 />
          <Actions2 />
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full" data-name="Row">
      <Content4 />
      <Content6 />
    </div>
  );
}

function Relume2() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Relume">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Relume">
          <path clipRule="evenodd" d={svgPaths.p29729300} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[24px] items-start relative shrink-0 text-white w-full" data-name="Content">
      <p className="font-['Playfair_Display:Regular',_sans-serif] leading-[1.2] relative shrink-0 text-[48px] tracking-[-0.48px] w-full">Short heading here</p>
      <p className="font-['Libre_Franklin:Regular',_sans-serif] leading-[1.5] relative shrink-0 text-[18px] w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
    </div>
  );
}

function ContentTop3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content Top">
      <Relume2 />
      <Content7 />
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[6px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Libre_Franklin:Medium',_sans-serif] font-medium leading-[1.5] relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">Button</p>
    </div>
  );
}

function ChevronRight3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron_right">
          <path d={svgPaths.p116eba00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Button">
      <p className="font-['Libre_Franklin:Medium',_sans-serif] font-medium leading-[1.5] relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">Button</p>
      <ChevronRight3 />
    </div>
  );
}

function Actions3() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Actions">
      <Button4 />
      <Button5 />
    </div>
  );
}

function Content8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgContent} />
        <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0" />
      </div>
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start p-[48px] relative w-full">
          <ContentTop3 />
          <Actions3 />
        </div>
      </div>
    </div>
  );
}

function Column() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Column">
      <Row />
      <Content8 />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Row">
      <Content2 />
      <Column />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle />
      <Row1 />
    </div>
  );
}

export default function Layout() {
  return (
    <div className="bg-white relative size-full" data-name="Layout / 525 /">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[80px] items-center px-[64px] py-[112px] relative size-full">
          <Container />
        </div>
      </div>
    </div>
  );
}