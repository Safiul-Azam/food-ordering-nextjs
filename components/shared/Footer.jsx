import CopyRight from "./CopyRight";

function Footer() {
  return (
    <>
      <div
        className=" text-center bg-black"
        style={{
          backgroundImage: "url(https://i.ibb.co/H40Dknz/shape-dot.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        footer
      </div>
      <CopyRight />
    </>
  );
}

export default Footer;
