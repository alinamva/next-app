import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-6 justify-between">
      <div className="flex justify-center flex-col gap-8 items-start">
        <h1>Creative Thoughts Agency</h1>
        <p>
          Lorem ipsum dolor sit, amet elit. Ipsum quia obcaecati consectetur.
          Inventore amet, nesciunt maxime distinctio blanditiis!
        </p>
        <div className="flex gap-3">
          <button className="bg-btn p-3 rounded">Learn more</button>
          <button className="bg-white p-3 rounded text-bg">Contact</button>
        </div>
        <Image
          src="/brands.png"
          alt="brands"
          width={400}
          height={200}
          className="grayscale"
        />
      </div>
      <div className="flex justify-end">
        <Image
          src="/hero.gif"
          alt="hero"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
