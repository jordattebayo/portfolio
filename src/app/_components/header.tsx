import Typewriter from './typewriter';

interface Props {
  animate: boolean;
  toggleAnimate: () => void;
}

export default function Header(props: Props) {
  return (
    <>
      <div className=" hover:bg-[var(--highlight-inverse)] w-fit">
        <Typewriter
          animate={props.animate}
          toggleAnimate={props.toggleAnimate}
        />
      </div>
      <p>
        Hi 👋🏽! My name is Jordan Booker, welcome to my professional page. I am a
        curious fullstack developer that is seriously in love with the web 🤓.
        Here you can find some projects that I am proud of. <br />
        <br />
        <i>Note: Pardon the dust as I work on modernizing my website.</i>
      </p>
    </>
  );
}
