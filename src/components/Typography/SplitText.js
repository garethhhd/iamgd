export default function SplitText({ copy, role }) {
  return (
    <>
      {copy.split('').map(function (char, index) {
        char = `${char}`;
        return (
          <span aria-hidden='true' key={index} className='inline-block'>
            {char}
          </span>
        );
      })}
    </>
  );
}
