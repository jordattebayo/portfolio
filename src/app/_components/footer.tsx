export default function Footer() {
  const currentDate = new Date();

  return (
    <footer className="py-3 row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <div>
        &copy;{currentDate.getFullYear()} Jordan Booker. All rights reserved.{' '}
      </div>
    </footer>
  );
}
