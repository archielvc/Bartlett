import svgPaths from "./svg-dfh0pyvicm";
import imgPlaceholderImage from "figma:asset/f83aefda4fcaa0a98985f08523b8407a6849bf84.png";
import imgPlaceholderImage1 from "figma:asset/123598581007b9dfa52e07bb013d8c8f0bf3cf1b.png";

function SectionInfo() {
  return (
    <div className="bg-white content-stretch flex font-['Libre_Franklin:SemiBold',_sans-serif] font-semibold gap-[24px] h-[64px] items-center leading-[1.5] relative shrink-0 text-[20px] text-black text-nowrap w-full whitespace-pre" data-name="Section Info">
      <p className="relative shrink-0">01</p>
      <p className="relative shrink-0">Feature one</p>
    </div>
  );
}

function TaglineWrapper() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="font-['Libre_Franklin:SemiBold',_sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">Simple</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[24px] items-start relative shrink-0 text-black w-full" data-name="Content">
      <p className="font-['Playfair_Display:Regular',_sans-serif] leading-[1.2] relative shrink-0 text-[60px] tracking-[-0.6px] w-full">Complete your property transaction with confidence</p>
      <p className="font-['Libre_Franklin:Regular',_sans-serif] leading-[1.5] relative shrink-0 text-[20px] w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper />
      <Content />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] relative shrink-0" data-name="Button">
      <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[inherit]">
        <p className="font-['Libre_Franklin:Medium',_sans-serif] font-medium leading-[1.5] relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre">Begin</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-[-1px] pointer-events-none" />
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

function Button1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0" data-name="Button">
      <p className="font-['Libre_Franklin:Medium',_sans-serif] font-medium leading-[1.5] relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre">Value</p>
      <ChevronRight />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Actions">
      <Button />
      <Button1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <SectionTitle />
      <Actions />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[80px] items-center relative shrink-0 w-full" data-name="Content">
      <Content1 />
      <div className="aspect-[616/616] basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPlaceholderImage} />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[48px] grow items-start max-w-[1280px] min-h-px min-w-px pb-[112px] pt-0 px-0 relative shrink-0" data-name="Container">
      <SectionInfo />
      <Content2 />
    </div>
  );
}

function FeatureOne() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Feature one">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[80px] items-start justify-center px-[64px] py-0 relative w-full">
          <Container />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SectionInfo1() {
  return (
    <div className="bg-white content-stretch flex font-['Libre_Franklin:SemiBold',_sans-serif] font-semibold gap-[24px] h-[64px] items-center leading-[1.5] relative shrink-0 text-[20px] text-black text-nowrap w-full whitespace-pre" data-name="Section Info">
      <p className="relative shrink-0">02</p>
      <p className="relative shrink-0">Feature two</p>
    </div>
  );
}

function TaglineWrapper1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="font-['Libre_Franklin:SemiBold',_sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">Enquire</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[24px] items-start relative shrink-0 text-black w-full" data-name="Content">
      <p className="font-['Playfair_Display:Regular',_sans-serif] leading-[1.2] relative shrink-0 text-[60px] tracking-[-0.6px] w-full">Medium length section heading goes here</p>
      <p className="font-['Libre_Franklin:Regular',_sans-serif] leading-[1.5] relative shrink-0 text-[20px] w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
    </div>
  );
}

function SectionTitle1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper1 />
      <Content3 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] relative shrink-0" data-name="Button">
      <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[inherit]">
        <p className="font-['Libre_Franklin:Medium',_sans-serif] font-medium leading-[1.5] relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre">Sell</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-[-1px] pointer-events-none" />
    </div>
  );
}

function ChevronRight1() {
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

function Button3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0" data-name="Button">
      <p className="font-['Libre_Franklin:Medium',_sans-serif] font-medium leading-[1.5] relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre">Button</p>
      <ChevronRight1 />
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Actions">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <SectionTitle1 />
      <Actions1 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex gap-[80px] items-center relative shrink-0 w-full" data-name="Content">
      <Content4 />
      <div className="aspect-[616/616] basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPlaceholderImage1} />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[48px] grow items-start max-w-[1280px] min-h-px min-w-px pb-[112px] pt-0 px-0 relative shrink-0" data-name="Container">
      <SectionInfo1 />
      <Content5 />
    </div>
  );
}

function FeatureTwo() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Feature two">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[80px] items-start justify-center px-[64px] py-0 relative w-full">
          <Container1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SectionInfo2() {
  return (
    <div className="bg-white content-stretch flex font-['Libre_Franklin:SemiBold',_sans-serif] font-semibold gap-[24px] h-[64px] items-center leading-[1.5] relative shrink-0 text-[20px] text-black text-nowrap w-full whitespace-pre" data-name="Section Info">
      <p className="relative shrink-0">03</p>
      <p className="relative shrink-0">Feature three</p>
    </div>
  );
}

function TaglineWrapper2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="font-['Libre_Franklin:SemiBold',_sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">Valuation</p>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[24px] items-start relative shrink-0 text-black w-full" data-name="Content">
      <p className="font-['Playfair_Display:Regular',_sans-serif] leading-[1.2] relative shrink-0 text-[60px] tracking-[-0.6px] w-full">Medium length section heading goes here</p>
      <p className="font-['Libre_Franklin:Regular',_sans-serif] leading-[1.5] relative shrink-0 text-[20px] w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
    </div>
  );
}

function SectionTitle2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper2 />
      <Content6 />
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] relative shrink-0" data-name="Button">
      <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[inherit]">
        <p className="font-['Libre_Franklin:Medium',_sans-serif] font-medium leading-[1.5] relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre">Button</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-[-1px] pointer-events-none" />
    </div>
  );
}

function ChevronRight2() {
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

function Button5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0" data-name="Button">
      <p className="font-['Libre_Franklin:Medium',_sans-serif] font-medium leading-[1.5] relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre">Button</p>
      <ChevronRight2 />
    </div>
  );
}

function Actions2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Actions">
      <Button4 />
      <Button5 />
    </div>
  );
}

function Content7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <SectionTitle2 />
      <Actions2 />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex gap-[80px] items-center relative shrink-0 w-full" data-name="Content">
      <Content7 />
      <div className="aspect-[616/616] basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPlaceholderImage} />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[48px] grow items-start max-w-[1280px] min-h-px min-w-px pb-[112px] pt-0 px-0 relative shrink-0" data-name="Container">
      <SectionInfo2 />
      <Content8 />
    </div>
  );
}

function FeatureThree() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Feature three">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[80px] items-start justify-center px-[64px] py-0 relative w-full">
          <Container2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default function Layout() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="Layout / 356 /">
      <FeatureOne />
      <FeatureTwo />
      <FeatureThree />
    </div>
  );
}