const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b-2">
      <div className="flex items-center h-16 px-24 space-x-4">
        <div>logo</div>
        <div>nav menu</div>
        <div className="flex justify-end flex-1 space-x-4">
          <div>social media</div>
          <div>dark mode</div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
