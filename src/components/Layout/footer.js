import Container from './container';

export default function Footer() {
  return (
    <footer className='mt-32'>
      <Container>
        <h2
          className='max-w-md mb-20 text-3xl font-black sm:text-4xl'
          data-animate='title'
        >
          <span className='block'>My Name is Gareth Donaldson come say hi</span>
          <span className='block text-primary sm:mt-8'>hello@iamgd.com</span>
        </h2>
      </Container>
    </footer>
  );
}
