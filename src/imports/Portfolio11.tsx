import svgPaths from "./svg-mbh4dop5we";
import imgPlaceholderImage from "figma:asset/45013ccbfe44eb7be85fb9012a9ec4b6b1c59a5a.png";

function TaglineWrapper() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Tagline Wrapper">
      <p className="font-['Libre_Franklin:SemiBold',_sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-black text-center text-nowrap whitespace-pre">Portfolio</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[24px] items-center relative shrink-0 text-black text-center w-full" data-name="Content">
      <p className="font-['Playfair_Display:Regular',_sans-serif] leading-[1.2] relative shrink-0 text-[60px] tracking-[-0.6px] w-full">Short heading goes here</p>
      <p className="font-['Libre_Franklin:Regular',_sans-serif] leading-[1.5] relative shrink-0 text-[20px] w-full">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</p>
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

function Text() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[8px] items-start relative shrink-0 text-black w-full" data-name="Text">
      <p className="font-['Playfair_Display:Regular',_sans-serif] leading-[1.3] relative shrink-0 text-[32px] tracking-[-0.32px] w-full">Project name here</p>
      <p className="font-['Libre_Franklin:Regular',_sans-serif] leading-[1.5] relative shrink-0 text-[18px] w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] box-border content-stretch flex items-start px-[10px] py-[4px] relative shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Libre_Franklin:SemiBold',_sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">Tag one</p>
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] box-border content-stretch flex items-start px-[10px] py-[4px] relative shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Libre_Franklin:SemiBold',_sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">Tag two</p>
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] box-border content-stretch flex items-start px-[10px] py-[4px] relative shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Libre_Franklin:SemiBold',_sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">Tag three</p>
    </div>
  );
}

function Tags() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Tags">
      <Tag />
      <Tag1 />
      <Tag2 />
    </div>
  );
}

function ContentTop() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content Top">
      <Text />
      <Tags />
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron_right">
          <path d={svgPaths.p116eba00} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, black)" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Button">
      <p className="font-['Libre_Franklin:Medium',_sans-serif] font-medium leading-[1.5] relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre">View project</p>
      <ChevronRight />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Actions">
      <Button />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Content">
      <ContentTop />
      <Actions />
    </div>
  );
}

function Card() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Card">
      <div className="aspect-[405.333/228] relative shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPlaceholderImage} />
      </div>
      <Content1 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Row">
      {[...Array(3).keys()].map((_, i) => (
        <Card key={i} />
      ))}
    </div>
  );
}

function PortfolioList() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center relative shrink-0 w-full" data-name="Portfolio List">
      <Row />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[6px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Libre_Franklin:Medium',_sans-serif] font-medium leading-[1.5] relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre">View all</p>
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Actions">
      <Button1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center relative shrink-0 w-full" data-name="Content">
      <PortfolioList />
      <Actions1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle />
      <Content2 />
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className="bg-white relative size-full" data-name="Portfolio / 11 /">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[80px] items-center px-[64px] py-[112px] relative size-full">
          <Container />
        </div>
      </div>
    </div>
  );
}