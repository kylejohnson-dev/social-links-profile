import Image from "next/image";
import Link from "next/link";

const SOCIALS = [
  {
    name: "GitHub",
    href: "#",
  },
  {
    name: "Frontend Mentor",
    href: "#",
  },
  {
    name: "LinkedIn",
    href: "#",
  },
  {
    name: "Twitter",
    href: "#",
  },
  {
    name: "Instagram",
    href: "#",
  },
];

const mapSocials = SOCIALS.map((social) => (
  <Link
    key={social.name}
    href={social.href}
    className="h-[45px] flex items-center justify-center bg-[#333333] rounded-lg text-center font-[family-name:var(--font-inter)] text-white font-bold text-[14px] leading-[150%] tracking-[0px] hover:bg-[#C4F82A] hover:text-[#333333]"
  >
    <span>{social.name}</span>
  </Link>
));

export function SocialLinksProfile() {
  return (
    <div className="max-w-[384px] w-[384px] bg-[#1F1F1F] rounded-xl flex flex-col items-center gap-y-6 p-10">
      <div className="w-[88px] h-[88px] rounded-full overflow-hidden">
        <Image
          src="/avatar-jessica.jpeg"
          alt="Jessica's profile picture"
          width={176}
          height={176}
        />
      </div>
      <div className="space-y-1">
        <h1 className="text-white font-[family-name:var(--font-inter)] font-bold text-[24px] leading-[150%] tracking-[0px]">
          Jessica Randall
        </h1>
        <p className="text-[#C4F82A] font-[family-name:var(--font-inter)] font-bold text-[14px] leading-[150%] tracking-[0px]">
          London, United Kingdom
        </p>
      </div>
      <div>
        <p className="text-white font-[family-name:var(--font-inter)] text-[14px] leading-[150%] tracking-[0px]">
          &#34;Front-end developer and avid reader.&#34;
        </p>
      </div>
      <div className="w-full flex flex-col gap-y-4">{mapSocials}</div>
    </div>
  );
}
