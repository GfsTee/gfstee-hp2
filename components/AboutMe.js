import Image from "next/image";

const AboutMe = () => {
  return (
    <div id="about">
      <figure>
        <Image
          src="/avatar.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <figcaption>
          <h2>Über mich</h2>
          <p></p>
        </figcaption>
      </figure>
      <style jsx>{`
        figure {
          display: grid;
          grid-template-columns: max-content 1fr;
        }
      `}</style>
    </div>
  );
};

export default AboutMe;
