import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <div className="flex justify-between items-center m-2 text-center h-[5vw] p-5 border-t-[1.5px] border-t-transparent border-gradient-to-r from-transparent via-white to-transparent">
        <div>Copyright MBC Laboratory. All Right Reserved.</div>
        <div className="flex gap-2">
          <Image width={30} height={30} src="/image/logo/ig.png" alt="Instagram" />
          <Image width={30} height={30} src="/image/logo/linkedin.png" alt="LinkedIn" />
          <Image width={30} height={30} src="/image/logo/Line.png" alt="Line" />
        </div>
      </div>
    </>
  );
}
